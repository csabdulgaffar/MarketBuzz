
function MarketSentiment() {
    return (
        <div className="max-w-screen-lg mx-auto">
            <div>

                <div className='text-3xl font-bold px-2 py-2'>
                    Market Sentiment                </div>
                <p className="px-2">
                    Market sentiment refers to the overall attitude and mood of investors in the financial markets. It's essentially a measure of the prevailing psychology and expectations of market participants.                </p>

            </div>
            <div>
                <div className="font-bold text-center text-7xl text-green-500 py-5">
                    Bullish
                </div>
                <div className="w-full h-20 bg-white rounded-full dark:bg-gray-700 mt-10 ">
                    <div className="h-20 bg-green-500 rounded-full " style={{ width: '100%' }} />

                </div>
                <div className="flex justify-between px-5 font-bold mt-2">
                    <div>0</div>
                    <div>50</div>
                    <div>100</div>
                </div>
                <div className="flex justify-between  text-xl font-bold">
                    <div>Bearish</div>
                    <div>Neutral</div>
                    <div>Bullish</div>
                </div>

                <div className="mt-10">
                    <div className='text-3xl font-bold px-2 py-2'>
                        Bullish Sentiment:
                    </div>
                    <p className="px-2">
                        Investors are optimistic and confident about the market's future performance.
                        They believe that stock prices will rise, and they are willing to buy stocks.
                        Bullish sentiment is characterized by factors like rising stock prices, high consumer confidence, and positive economic data.

                    </p>
                </div>


            </div>

        </div >


    )
}

export default MarketSentiment