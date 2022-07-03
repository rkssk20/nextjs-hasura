import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { accountState, notificateState } from '@/lib/recoil'
import { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'

type Props = {
  path: string
  comment: string
}

type ExistingType =
  | InfiniteData<
      [
        definitions['comments'] & { profiles: definitions['profiles'] } & {
          comments_likes: definitions['comments_likes'][] | undefined
        },
      ]
    >
  | undefined

const Mutate = async ({ path, comment }: Props) => {
  const { data, error } = await supabase
    .from<definitions['comments']>('comments')
    .insert({ articles_id: path, comment })
    .single()

  if (error) throw error

  return data
}

const useInsertComments = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)
  const account = useRecoilValue(accountState)
  const queryClient = useQueryClient()
  const router = useRouter()

  const { mutate, isLoading } = useMutation((comment: string) => Mutate({ path, comment }), {
    onSuccess: (data) => {
      const existing: ExistingType = queryClient.getQueryData(['comments', path])

      if (existing) {
        queryClient.setQueryData(['comments', path], {
          pageParams: existing.pageParams,
          pages: [
            ...existing.pages,
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

      router.push(`${path}#comment${data.id}`, undefined, {
        shallow: true,
      })

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

export default useInsertComments
