import { atom, selector, DefaultValue } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

type AccountProps = {
  loading: boolean
  data: {
    username: string
    avatar: string | undefined
  } | null
}

type NotificateProps = {
  open: boolean
  message: string
}

type DraftProps = {
  title: string
  details: string
  categories: number[]
}

// アカウント
export const accountState = atom<AccountProps>({
  key: 'account',
  default: {
    loading: true,
    data: null,
  },
})

// 通知
export const notificateState = atom<NotificateProps>({
  key: 'notificate',
  default: {
    open: false,
    message: '',
  },
})

// 下書き
export const draftState = atom<DraftProps>({
  key: 'draft',
  default: {
    title: '',
    details: '',
    categories: [],
  },
  effects_UNSTABLE: [persistAtom],
})

// 検索履歴
export const searchHistoryState = atom<string[]>({
  key: 'searchHistroy',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const searchHistorySelector = selector<string[]>({
  key: 'searchHistorySelector',
  get: ({ get }) => {
    return get(searchHistoryState)
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) return

    set(searchHistoryState, (currVal: string[]) => {
      return Array.from(new Set([...newValue, ...currVal])).slice(0, 5)
    })
  },
})
