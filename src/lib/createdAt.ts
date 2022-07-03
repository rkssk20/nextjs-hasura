const CreatedAt = (created_at: string) => {
  const date = new Date(created_at)
  const elapsed = Number(new Date()) - Number(date)

  // 投稿されてから1時間以内は分表示
  if (elapsed < 3600000) {
    return (Math.floor(elapsed / 1000 / 60) % 60) + '分前'

    // 1日以内は時間
  } else if (elapsed < 86400000) {
    return (Math.floor(elapsed / 1000 / 60 / 60) % 24) + '時間前'

    // 一ヶ月以内は日数
  } else if (elapsed < 2592000000) {
    return Math.floor(elapsed / 1000 / 60 / 60 / 24) + '日前'

    // 一年以内は月数
  } else if (elapsed < 31536000000) {
    return Math.floor(elapsed / 1000 / 60 / 60 / 24 / 30) + 'ヶ月前'

    // それ以上は年数
  } else {
    return Math.floor(elapsed / 1000 / 60 / 60 / 24 / 365) + '年前'
  }
}

export default CreatedAt
