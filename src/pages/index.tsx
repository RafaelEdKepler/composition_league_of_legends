import Head from 'next/head'
import GlobalStyle from '../styles/global';
import Team from '../components/Team';
import { SelectContextProvider } from '../context/selectContext';

export default function Home() {
  return (
    <>
      <SelectContextProvider>
        <GlobalStyle />
        <Team />
      </SelectContextProvider>
    </>
  )
}
