
function FearGreedIndex() {
    return (
        <div className="max-w-screen-lg mx-auto">
            <div>

                <div className='text-3xl font-bold px-2 py-2'>
                    Fear Greed Index
                </div>
                <p className="px-2">
                    The Fear & Greed Index is a sentiment indicator that attempts to measure the overall emotion driving the markets. It was developed by CNN Business as a way to gauge investor sentiment.
                </p>

            </div>
            <div>
                <div className="font-bold text-center text-7xl text-red-500 py-5">
                    Extreme Fear
                </div>
                <div className="w-full h-20 bg-white   rounded-full dark:bg-gray-700 mt-10 ">
                    <div className="h-20 bg-red-500    rounded-full " style={{ width: '15%' }} />
                </div>
                <div className="flex justify-between px-5 font-bold ">
                    <div>0</div>
                    <div>100</div>
                </div>
                <div className="grid grid-cols-4 font-bold text-center">
                    <div>Extreme Fear</div>
                    <div>Fear</div>
                    <div>Greed</div>
                    <div>Extreme    Greed</div>
                </div>

                <div className="mt-10">
                    <div className='text-3xl font-bold px-2 py-2'>
                        Extreme Fear:
                    </div>
                    <p className="px-2">
                        This range indicates high levels of fear and risk aversion among investors. They are likely to be selling assets and moving to safer investments due to concerns over the market's performance.


                    </p>
                </div>


            </div>

        </div>


    )
}

export default FearGreedIndex