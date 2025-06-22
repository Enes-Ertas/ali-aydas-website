import Image from "next/image";

export default function HowToBuySection() {
  return (
    <section id="how-to-buy" className="text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Başlık */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4F9842] mb-12">
          How to Buy $WICKD
        </h2>

        {/* 3 Adımlı Kutu Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adım 1 */}
          <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Image
              src="/create-wallet.png" // public klasöründe olacak
              alt="Create Wallet"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#4F9842]">
              Create a Wallet
            </h3>
            <p className="text-base">
              Download Metamask or your wallet of choice from the app store or Google Chrome extension for free. Desktop users, download the Google Chrome extension by going to metamask.io.
            </p>
          </div>

          {/* Adım 2 */}
          <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Image
              src="/get-some-eth.png" // public klasöründe olacak
              alt="Get Some ETH"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#4F9842]">
              Get Some ETH
            </h3>
            <p className="text-base">
              Have ETH in your wallet to switch to $WICKD. If you don’t have any ETH, you can buy directly on Metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
            </p>
          </div>

          {/* Adım 3 */}
          <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Image
              src="/uniswap.png" // public klasöründe olacak
              alt="Go to Uniswap"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#4F9842]">
              Go to Uniswap
            </h3>
            <p className="text-base">
              Connect to Uniswap. Go to app.uniswap.org in Google Chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $WICKD token address into Uniswap, select $WICKD, and confirm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
