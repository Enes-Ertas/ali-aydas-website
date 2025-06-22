import Image from "next/image";

export default function Header() {
  return (
    <header className="text-white py-4 ">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
         <a href="#home" className="flex items-center space-x-3">
        <div className="flex items-center space-x-3">
          <Image
            src="/ana-logo.jpeg" // public klasörüne koyacağız
            alt="WICKD Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-2xl font-bold tracking-wide">WICKDOG</span>
        </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium uppercase">
          <a href="#hero" className="hover:text-green-400 transition">Home</a>
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#how-to-buy" className="hover:text-green-400 transition">How to Buy</a>
          <a href="#tokenomics" className="hover:text-green-400 transition">Tokenomics</a>
         {/* <a href="#roadmap" className="hover:text-green-400 transition">Roadmap</a> */}
          {/* <a href="#faq" className="hover:text-green-400 transition">FAQ</a> */}
        </nav>

        {/* CTA */}
        <div>
          <a
            href="https://app.uniswap.org"
            target="_blank"
            className="bg-green-500 text-black px-4 py-2 rounded font-bold text-sm hover:bg-green-400 transition"
          >
            Buy Now
          </a>
        </div>
      </div>
    </header>
  );
}
