import Head from 'next/head'
import GlobalStyle from '../styles/global';
import ChampionBox from '../components/ChampionBox'

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <ChampionBox />
    </>
  )
}
