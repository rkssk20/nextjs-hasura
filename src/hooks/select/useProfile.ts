import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { useQuery } from 'react-query'
import { definitions } from '@/types/supabase'
import { accountState, notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

const FetchData = async () => {
  if (typeof window === 'undefined') return

  const user = supabase.auth.user()

  if (!user?.id) return

  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .select('username, avatar')
    .eq('id', user.id)
    .single()

  if (error) throw error

  return data
}

const useProfile = () => {
  const setNotificate = useSetRecoilState(notificateState)
  const setAccount = useSetRecoilState(accountState)

  const id = supabase.auth.user()?.id

  const { refetch } = useQuery(['profiles'], FetchData, {
    enabled: false,
    onSuccess: (data) => {
      // ログイン時
      if (data) {
        setAccount({
          loading: false,
          data: {
            username: data.username,
            avatar: data.avatar
              ? process.env.NEXT_PUBLIC_SUPABASE_URL +
                '/storage/v1/object/public/avatars/' +
                data.avatar
              : undefined,
          },
        })

        // ログアウト時
      } else {
        setAccount({
          loading: false,
          data: null,
        })

        // ログインしているのにユーザー情報が存在しなかった場合
        if (supabase.auth.user()?.id) {
          supabase.auth.signOut().then(() => {
            setNotificate({
              open: true,
              message: 'ユーザーが見つかりませんでした。',
            })
          })
        }
      }
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました。',
      })
    },
  })

  useEffect(() => {
    if (id) {
      refetch()
    } else {
      setAccount({
        loading: false,
        data: null,
      })
    }

    supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        refetch()
      } else {
        setAccount({
          loading: false,
          data: null,
        })
      }
    })
  }, [id])
}

export default useProfile
