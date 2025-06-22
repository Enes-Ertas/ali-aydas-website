import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Sol: Görsel */}
        <div className="flex-1">
          <Image
            src="/about-logo-2.png" // → public/pepe-about.png
            alt="About Pepe"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        {/* Sağ: Metin */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4F9842] mb-6">
            What is $PEPE?
          </h2>

          <p className="text-base md:text-lg mb-6 leading-relaxed">
            $PEPE is a meme coin with no intrinsic value or expectation of financial return. 
            There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
          </p>

          <p className="text-lg md:text-xl font-semibold text-[#4F9842]">
            $PEPE is for the people — forever. No presale. No taxes. No bullshit.
          </p>
        </div>

        
      </div>
    </section>
  );
}
