import { useRouter } from 'next/router'
import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { accountState, notificateState } from '@/lib/recoil'
import { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'

type Props = {
  comment_id: number
  comment: string
}

type CommentsExistingType =
  | InfiniteData<
      [
        definitions['comments'] & { profiles: definitions['profiles'] } & {
          comments_likes: definitions['comments_likes'][] | undefined
        },
      ]
    >
  | undefined
type RepliesExistingType =
  | InfiniteData<
      [
        definitions['replies'] & { profiles: definitions['profiles'] } & {
          replies_likes: definitions['replies_likes'][] | undefined
        },
      ]
    >
  | undefined

const Mutate = async ({ comment_id, comment }: Props) => {
  const { data, error } = await supabase
    .from<definitions['replies']>('replies')
    .insert({ comment_id, comment })
    .single()

  if (error) throw error

  return data
}

const useInsertReplies = (path: string, comment_id: number) => {
  const setNotificate = useSetRecoilState(notificateState)
  const account = useRecoilValue(accountState)
  const queryClient = useQueryClient()
  const router = useRouter()

  const { mutate, isLoading } = useMutation((comment: string) => Mutate({ comment_id, comment }), {
    onSuccess: (data) => {
      const comments_existing: CommentsExistingType = queryClient.getQueryData(['comments', path])
      const replies_existing: RepliesExistingType = queryClient.getQueryData([
        'replies',
        comment_id,
      ])

      if (comments_existing) {
        // 返信した対象のコメントをfindIndexで探す
        const index = comments_existing.pages.map((page) =>
          page.findIndex((item) => item.id === comment_id),
        )
        const page = index.findIndex((item) => item !== -1)

        // キャッシュから対象のコメントのリプライ数を+1する
        comments_existing.pages[page][index[page]].reply_count =
          comments_existing.pages[page][index[page]].reply_count + 1

        // キャッシュを更新
        queryClient.setQueryData(['comments', path], {
          pageParams: comments_existing.pageParams,
          pages: comments_existing.pages,
        })
      }

      if (replies_existing) {
        // 返信のキャッシュを更新
        queryClient.setQueryData(['replies', comment_id], {
          pageParams: replies_existing.pageParams,
          pages: [
            ...replies_existing.pages,
            [
              {
                ...data,
                profiles: {
                  username: account.data?.username,
                  avatar: account.data?.avatar?.replace(
                    process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/avatars/',
                    '',
                  ),
                },
              },
            ],
          ],
        })
      }

      router.push(`${path}#reply${data.id}`, undefined, {
        shallow: true,
      })

      // 通知
      setNotificate({
        open: true,
        message: 'この記事にコメントしました。',
      })
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました。',
      })
    },
  })

  return { mutate, isLoading }
}

export default useInsertReplies
