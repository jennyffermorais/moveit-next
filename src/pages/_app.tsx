import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} /> //aqui ficam os componentes que ficarão fixos em todas as pags
}

export default MyApp
