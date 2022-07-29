import { useState, useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { GetSideTrendQuery } from "@/types/generated/graphql"
import { notificateState } from "@/lib/recoil"

const useSideTrend = () => {
  const [data, setData] = useState<GetSideTrendQuery | null>(null)
  const setNotificate = useSetRecoilState(notificateState)

  useEffect(() => {
    fetch(`/api/getSideTrend`).then(res => res.json()).then(result => {
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

export default useSideTrend