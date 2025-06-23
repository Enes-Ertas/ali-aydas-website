import Head from "next/head"
import Header from "@/components/Header" // Eğer alias yoksa: ../components/Header
import HeroSection from "@/components/HeroSection"
import Tokenomics from "@/components/Tokenomics"
import About from "@/components/About"
import AirdropSection from "@/components/AirdropSection"
import HowToBuySection from "@/components/HowToBuy"

export default function Home() {
  return (
    <>
      <Head>
        <title>WICKD Landing</title>
      </Head>

      <main
    className="min-h-screen text-white
             bg-center bg-repeat
             bg-[length:100vw_100vh]
             sm:bg-cover sm:bg-no-repeat"
  style={{ backgroundImage: "url('/site-background.png')" }}>
        <Header />
        <HeroSection />
        <AirdropSection />
        <About />
        <HowToBuySection/>
      </main>
    </>
  )
}
