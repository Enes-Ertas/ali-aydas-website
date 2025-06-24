import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex  flex-col-reverse md:flex-row items-center gap-12">
        {/* Sol: Görsel */}
        <div className="flex-1 flex items-center justify-center">
  <Image
    src="/resim-3.png"
    alt="About Wickd"
    width={500}
    height={500}
    className="mx-auto"
  />
</div>

        {/* Sağ: Metin */}
        <div className="flex flex-1 flex-col justify-center text-center md:text-left">
  <h2 className="text-4xl md:text-5xl font-bold text-[#4F9842] mb-6">What is WICKDOG?</h2>

  <p className="text-base md:text-lg mb-6 leading-relaxed">
  WICKDOG is a next-generation community token — launched with zero presale, zero taxes, and zero empty promises. No VC funding, no centralized control, just a bold experiment in decentralized meme culture.
</p>

<p className="text-lg md:text-xl font-semibold text-[#4F9842]">
  WICKDOG is for the people — from the ground up. No fluff. No fees. Just vibes.
</p>

</div>


        
      </div>
    </section>
  );
}
