export default function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className=" py-20 px-4 md:px-8 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Başlık */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4F9842] mb-6">
          Tokenomics
        </h2>

        {/* Açıklama Paragraf */}
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          No taxes, no bullshit. It&apos;s that simple. 93.1% of the tokens were sent
          to the liquidity pool, LP tokens were burnt, and contract is renounced.
          The remaining 6.9% is held in a multi-sig wallet only to be used for
          future centralized exchange listings, bridges, and liquidity pools.
        </p>

        {/* 3'lü Bilgi Kutuları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md border border-[#4F9842]">
            <h3 className="text-xl font-semibold text-[#4F9842] mb-2">
              Total Supply
            </h3>
            <p className="text-lg font-bold">420,690,000,000,000</p>
          </div>

          <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md border border-[#4F9842]">
            <h3 className="text-xl font-semibold text-[#4F9842] mb-2">
              Liquidity
            </h3>
            <p className="text-lg font-bold">93.1% Sent to LP & Burnt</p>
          </div>

          <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md border border-[#4F9842]">
            <h3 className="text-xl font-semibold text-[#4F9842] mb-2">
              Team Wallet
            </h3>
            <p className="text-lg font-bold">6.9% Multi-Sig Controlled</p>
          </div>
        </div>
      </div>
    </section>
  );
}
