import {createTheme} from '@mui/material/styles'

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#2b825b',
    },
    secondary: {
      main: '#F8BBD0',
    },
    info: {
      main: '#e7e7e8',
    },
    warning: {
      main: '#F4212E',
    },
  },
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'arial',
      'Hiragino Kaku Gothic ProN',
      'Meiryo',
      'sans-serif',
    ].join(','),
    // 重要なタイトル (太字)
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '0F1419',
    },
    // 重要なタイトル
    h2: {
      fontSize: 24,
      color: '0F1419',
    },
    // タイトル (太字)
    h3: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0F1419',
    },
    // タイトル
    h4: {
      fontSize: 20,
      color: '0F1419',
    },
    // 少し大きいタイトル (太字)
    h5: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '0F1419',
    },
    // 少し大きいタイトル
    h6: {
      fontSize: 17,
      color: '0F1419',
    },
    // 少し大きい タグ、色付きリンク
    subtitle1: {
      fontSize: 17,
      color: '#1F94E6',
    },
    // タグ、色付きリンク
    subtitle2: {
      fontSize: 15,
      color: '#3FCF8E',
    },
    // 標準 #黒
    body1: {
      fontSize: 15,
      color: '#0F1419',
    },
    // 標準 #黒
    body2: {
      fontSize: 15,
      color: '#0F1419',
    },
    // ボタン用 #白 bold
    button: {
      fontSize: 15,
      color: '#ffffff',
      fontWeight: 600,
      textTransform: 'none',
    },
    // 補足 #グレー
    caption: {
      fontSize: 15,
      color: '#536471',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 768,
      lg: 998,
      xl: 1098,
    },
  },
})

export default muiTheme