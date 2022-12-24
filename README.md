## Next.js × Hasura

~~[https://nextjs-hasura.tk](https://nextjs-hasura.tk)~~
Herokuの無料枠が終了したため、DBに接続できません。Supabase版、Firebase版がほぼ同じものになっているので、そちらをご覧ください。

Next.js と Hasura を使用した技術ブログ風のポートフォリオです。ログイン・投稿・いいね・コメントなどをお試しください
[Supabase 版](https://nextjs-supabase.tk)と[Firebase 版](https://nextjs-firebase.tk)もあります

<br>

## 技術選定

詳細は[Next.js × Hasura の技術選定](https://nextjs-hasura.tk/article/2VUSR4cSHml0oVyiQlLsU)

### フロント

- Next.js
- Typescript
- Recoil
- Apollo Client
- Mui (旧 Material UI)
- SCSS

### サーバー

- Hasura (GraphQL サーバー)
- NextAuth.js(認証ライブラリ)
- Firebase Storage(ストレージ)

### ホスティング

- Vercel

### その他

- ESlint, Prettier
- Google Analytics

<br>

## 実装した機能

### CRUD

- 記事・コメント・返信の投稿、削除
- 記事・コメント・返信へのいいね
- アカウント作成、削除、プロフィール変更
- ユーザーのフォロー
- 記事やアバター画像のアップロード

など

### 検索履歴、下書き

- Recoil (Persist)

### レスポンシブデザイン

- Mui と SCSS

### トレンド一覧

- Google Analytics で PV 数を測定
- Google Analytics Data API で人気のページを取得

### Markdown

- エディターは react-simplemde-editor
- unified で変換して表示

### 無限スクロール

- Intersection Observer API で ref を監視

### 検索

- iLike で部分一致

![image](https://user-images.githubusercontent.com/67939683/181830525-26f63424-15c4-43cf-97b4-5bfb889f4312.jpeg)
