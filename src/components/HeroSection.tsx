import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className=" text-white py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Sol: Metin Alanı */}
        <div className="flex-1 text-center md:text-left">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
    The King of Memecoins Has Arrived 🐶
  </h1>

  <p className="text-lg md:text-xl mb-8 max-w-xl">
    WICKD is here to rule the memecoin world. No presale, no taxes, just
    pure meme power and community.
  </p>

  {/* Buton */}
  <a
    href="#how-to-buy"
    className="inline-block bg-white text-[#4F9842] font-bold py-3 px-6 rounded-full text-lg hover:bg-green-100 transition"
  >
    How to Buy
  </a>

  {/* 🔽 Sosyal Medya İkonları */}
  <div className="mt-6 grid grid-cols-4 gap-4 justify-items-center md:justify-items-start">
    <a href="https://x.com/RealWickdog" target="_blank" rel="noopener noreferrer">
      <Image src="/twitter.png" alt="Twitter" width={60} height={60} />
    </a>
        <a href="https://coinmarketcap.com" target="_blank" rel="noopener noreferrer">
      <Image src="/cmc.png" alt="CMC" width={60} height={60} />
    </a>
    <a href="https://t.me/wickdognation" target="_blank" rel="noopener noreferrer">
      <Image src="/telegram.png" alt="Telegram" width={60} height={60} />
    </a>

    <a href="https://app.uniswap.org" target="_blank" rel="noopener noreferrer">
      <Image src="/uniswap.png" alt="Uniswap" width={60} height={60} />
    </a>
  </div>
</div>


        {/* Sağ: Görsel */}
        <div className="flex-1">
          <Image
            src="/image-hero-section.png"
            alt="coin hero"
            width={600}
            height={600}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
