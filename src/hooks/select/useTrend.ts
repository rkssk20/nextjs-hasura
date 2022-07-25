import { useState, useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { GetTrendQuery } from "@/types/generated/graphql"
import { notificateState } from "@/lib/recoil"

const useTrend = () => {
  const [data, setData] = useState<GetTrendQuery | null>(null)
  const setNotificate = useSetRecoilState(notificateState)

  useEffect(() => {
    fetch(`/api/getTrend`).then(res => res.json()).then(result => {
      setData(result.response.data)
    }).catch(() => {
      setNotificate({
        open: true,
        message: 'トレンドの取得に失敗しました'
      })
    });
  }, [])

  return data
}

export default useTrend