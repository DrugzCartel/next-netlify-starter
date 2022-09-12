import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
<iframe
src="https://gateway.ipfscdn.io/ipfs/Qma5FgmS9s3hkQrURfG4XDnh5Dxp9Fx9ZjBYkPFUNdQwfi/nft-drop.html?contract=0x346E7C0d8e8e0CEC7aF773CC022788301a829e0e&chainId=80001"
width="600px"
height="600px"
style="max-width:100%;"
frameborder="0"
></iframe>
    
      <Footer />
    </div>
  )
}
