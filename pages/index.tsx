import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ConnectMetamask from '@/components/button/ConnectMetamask'
import { useStore } from 'libs/store';

export default function Home() {
  const { address } = useStore((state) => state)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.connectWallet}>
          <ConnectMetamask />
        </div>
        {address.length === 0 ?
          "PLEASE CONNECT YOUR WALLET" :
          `Your Address: ${address}`}
      </main>
    </>
  )
}
