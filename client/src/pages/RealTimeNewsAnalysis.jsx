
function RealTimeNewsAnalysis() {
    return (

        <div className="max-w-screen-lg mx-auto px-2">
            <div className='text-3xl  text-center font-bold px-2 py-5'>
                Live AI Powered News Analysis
            </div>
            <div className="">
                <div className="cards">
                    <div className="card grid grid-cols-5  mobile:grid-cols-4 py-4 px-3 bg-black text-white rounded-xl mobile:rounded-lg ">
                        <div className="news  text-xl  mobile:text-lg col-span-3 font-bold">News Headline</div>
                        <div className="sentiment mobile:text-lg text-xl font-bold">
                            <div>
                                <div className=""> Sentiment </div>
                            </div>
                        </div>
                        <div className="Source px-2 text-center mobile:hidden  text-xl font-bold">Source</div>
                    </div>

                    <div className="card grid grid-cols-5 mobile:grid-cols-4 mt-4 py-4 ">
                        <div className="news  px-3 text-lg  col-span-3">RBI's Rs 2.1 lakh cr bonanza to govt brings cheer to stock market</div>
                        <div className="sentiment">
                            <div>
                                <div className="text-center bg-green-500 text-lg font-bold rounded-md mx-3 mobile:mx-0  "> Positive   </div>
                            </div>
                        </div>
                        <div className="Source px-2 text-center font-bold text-lg mobile:hidden"> Money Control   </div>
                    </div>
                    <hr />
                    <div className="card grid grid-cols-5 mobile:grid-cols-4 py-4 ">
                        <div className="news  px-3 text-lg  col-span-3">Telecom and renewable energy stocks catch Mark Mobius' eye</div>
                        <div className="sentiment">
                            <div>
                                <div className="text-center bg-green-500 text-lg font-bold rounded-md mx-3 mobile:mx-0  "> Positive   </div>
                            </div>
                        </div>
                        <div className="Source px-2 text-center font-bold text-lg mobile:hidden"> Money Control   </div>
                    </div>
                    <hr />
                    <div className="card grid grid-cols-5 mobile:grid-cols-4 py-4 ">
                        <div className="news  px-3 text-lg  col-span-3">FIIs selling Indian Equities</div>
                        <div className="sentiment">
                            <div>
                                <div className="text-center bg-red-500 text-lg font-bold rounded-md mx-3 mobile:mx-0    "> Negative   </div>
                            </div>
                        </div>
                        <div className="Source px-2 text-center font-bold text-lg mobile:hidden"> Money Control       </div>
                    </div>
                    <hr />
                    <div className="card grid grid-cols-5 mobile:grid-cols-4 py-4 ">
                        <div className="news  px-3 text-lg  col-span-3">
                            Zee seeks merger termination fee of $90 mn from Sony                            </div>
                        <div className="sentiment">
                            <div>
                                <div className="text-center bg-green-500 text-lg font-bold rounded-md mx-3 mobile:mx-0  "> Positive   </div>
                            </div>
                        </div>
                        <div className="Source px-2 text-center font-bold text-lg mobile:hidden"> Economic Times   </div>
                    </div>
                    <hr />
                    <div className="card grid grid-cols-5 mobile:grid-cols-4 py-4 ">
                        <div className="news  px-3 text-lg  col-span-3 ">
                            RBI's record dividend of Rs 2.11 lakh crore will be a booster for new govt. to check fiscal deficit

                        </div>
                        <div className="sentiment">
                            <div>
                                <div className="text-center bg-green-500 text-lg font-bold rounded-md mx-3  mobile:mx-0 "> Positive   </div>
                            </div>
                        </div>
                        <div className="Source px-2 text-center font-bold text-lg mobile:hidden"> Zee Business   </div>
                    </div>
                    <hr />
                    <div className="card grid grid-cols-5 mobile:grid-cols-4 py-4 ">
                        <div className="news  px-3 text-lg  col-span-3">SEBI put these stocks in servilliance</div>
                        <div className="sentiment">
                            <div>
                                <div className="text-center bg-red-500 text-lg font-bold rounded-md mx-3  mobile:mx-0   "> Negative   </div>
                            </div>
                        </div>
                        <div className="Source px-2 text-center font-bold text-lg mobile:hidden"> Economic Times   </div>
                    </div>
                    <hr />
                    <div className="text-center">
                        <button type="button" className="mt-5 text-white bg-black hover:scale-105 duration-300 transition-all  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">View More</button>

                    </div>






                </div>


            </div>
        </div>



    )
}

export default RealTimeNewsAnalysis