import { Link } from 'react-router-dom'
import nifty from '../assets/images/nifty.png'
import stockgraph from '../assets/images/stockgraph.png'
function Home() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className='section1'>
                <div className="grid grid-cols-2 gap-5 mt-5 ">

                    <div>
                        <div className='text-3xl font-bold px-2 py-2'>
                            Nifty 50
                        </div>
                        <img src={nifty} alt="" />
                    </div>
                    <div>
                        <div className='text-3xl font-bold px-2 py-2'>
                            Trending Stocks
                        </div>
                        <div className=' font-bold px-2'>
                            <div className='grid grid-cols-3    items-end'>
                                <div className='pt-5'>	Cochin Shipyard	</div>

                                <div className='text-green-500 '>+5.23%</div>

                                <img src={stockgraph} alt="" />
                            </div>
                            <div className='grid grid-cols-3  items-end'>
                                <div className='pt-5'>	Hindustan Zinc 	</div>

                                <div className='text-green-500'>+8.39%</div>

                                <img src={stockgraph} alt="" />
                            </div>
                            <div className='grid grid-cols-3  justify-between items-end'>
                                <div className='pt-5'>	RVNL 	</div>

                                <div className='text-green-500'>+4.39%</div>
                                <div>
                                    <img src={stockgraph} alt="" />

                                </div>

                            </div>

                            <div className='grid grid-cols-3  justify-between items-end'>
                                <div className='pt-5'>	IRFC 	</div>

                                <div className='text-green-500'>+4.39%</div>
                                <div>
                                    <img src={stockgraph} alt="" />

                                </div>

                            </div>

                            <button type="button" className=" mt-5 text-white bg-black hover:scale-105 duration-300 transition-all  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">View All</button>


                        </div>

                    </div>
                </div>
            </div>
            <div className='section2'>
                <div className='text-3xl font-bold px-2 py-2 mt-5'>
                    Sector Wise Analysis
                </div><div className='cards grid grid-cols-5 px-2 gap-2'>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        <div className='    '>
                            Metal <br />
                            <h2>+1.25%</h2>
                        </div>
                    </div>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        Bank
                        <br />
                        <h2>+1.22%</h2>
                    </div>
                    <div className='card bg-red-500 py-9 font-bold text-center rounded-md text-black'>
                        Energy <br />
                        <h2>-1.15%</h2>
                    </div>
                    <div className='card bg-red-500 py-9 font-bold text-center rounded-md text-black'>
                        Consumer Durables <br />
                        <h2>-0.85%</h2>
                    </div>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        Automobile <br />
                        <h2>+0.92%</h2>
                    </div>
                    <div className='card bg-red-500 py-9 font-bold text-center rounded-md text-black'>
                        Chemicals <br />
                        <h2>-1.34%</h2>
                    </div>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        Construction <br />
                        <h2>+1.05%</h2>
                    </div>
                    <div className='card bg-red-500 py-9 font-bold text-center rounded-md text-black'>
                        Finance <br />
                        <h2>-0.78%</h2>
                    </div>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        FMCG <br />
                        <h2>+1.21%</h2>
                    </div>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        Healthcare <br />
                        <h2>+0.95%</h2>
                    </div>
                    <div className='card bg-red-500 py-9 font-bold text-center rounded-md text-black'>
                        Insurance <br />
                        <h2>-1.09%</h2>
                    </div>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        Logistics <br />
                        <h2>+1.17%</h2>
                    </div>
                    <div className='card bg-red-500 py-9 font-bold text-center rounded-md text-black'>
                        Metals and Mining <br />
                        <h2>-1.41%</h2>
                    </div>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        Oil and Gas <br />
                        <h2>+1.32%</h2>
                    </div>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        Power <br />
                        <h2>+1.08%</h2>
                    </div>
                    <div className='card bg-red-500 py-9 font-bold text-center rounded-md text-black'>
                        Ship Building <br />
                        <h2>-0.92%</h2>
                    </div>
                    <div className='card bg-green-500 py-9 font-bold text-center rounded-md text-black'>
                        Trading <br />
                        <h2>+1.19%</h2>
                    </div>
                    <div className='card bg-red-500 py-9 font-bold text-center rounded-md text-black'>
                        Telecom <br />
                        <h2>-1.02%</h2>
                    </div>
                </div>
            </div>
            <div className="section3 mt-5">
                <div className='text-3xl font-bold px-2 py-2 mt-5'>
                    Most Active Stocks
                </div>
                <div className='cards  '>
                    <div className='card grid grid-cols-5 px-2 gap-2 font-bold '>
                        <div>Stock</div>
                        <div>Low</div>
                        <div>High</div>
                        <div>Volume</div>
                        <div>Change</div>

                    </div>
                    <div className='card grid grid-cols-5 px-2 gap-2'>
                        <div className='font-bold'>RVNL</div>
                        <div>341.12</div>
                        <div>374.25</div>
                        <div>12.3L</div>
                        <div>9.11%</div>
                    </div>

                    <div className='card grid grid-cols-5 px-2 gap-2'>
                        <div className='font-bold'>Bharat Electron</div>
                        <div>341.12</div>
                        <div>374.25</div>
                        <div>12.3L</div>
                        <div>3.11%</div>
                    </div>

                    <div className='card grid grid-cols-5 px-2 gap-2'>
                        <div className='font-bold'>IRFC</div>
                        <div>341.12</div>
                        <div>374.25</div>
                        <div>12.3L</div>
                        <div>1.11%</div>
                    </div>

                    <div className='card grid grid-cols-5 px-2 gap-2'>
                        <div className='font-bold'>Jio Financial    </div>
                        <div>341.12</div>
                        <div>374.25</div>
                        <div>12.3L</div>
                        <div>1.11%</div>
                    </div>
                    <button type="button" className=" mt-5 text-white bg-black hover:scale-105 duration-300 transition-all  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">View More</button>


                </div>


            </div>
            <div className='section4 mt-5'>
                <div className='grid grid-cols-2 font-bold'>
                    <div>
                        <div>
                            <div className='text-3xl font-bold px-2 py-2 mt-5'>
                                Top Gainers
                            </div>
                            <div className='grid grid-cols-2 px-2   '>
                                <div>
                                    Rail Vikas Nigam Limited
                                </div>
                                <div className='text-green-500'>+8.5%</div>
                            </div>
                            <div className='grid grid-cols-2 px-2   '>
                                <div>
                                    HAL
                                </div>
                                <div className='text-green-500'>+6.5%</div>
                            </div>
                            <div className='grid grid-cols-2 px-2   '>
                                <div>
                                    Hindustan Zinc
                                </div>
                                <div className='text-green-500'>+4.5%</div>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className='text-3xl font-bold  py-2 mt-5'>
                            Top Losers
                        </div>
                        <div className='grid grid-cols-2 px-2'>
                            <div>
                                Waree renewable Energy
                            </div>
                            <div className='text-red-500'>-9.5%</div>
                        </div>

                        <div className='grid grid-cols-2 px-2'>
                            <div>
                                Suzlon Energy
                            </div>
                            <div className='text-red-500'>-7.5%</div>
                        </div>

                        <div className='grid grid-cols-2 px-2'>
                            <div>
                                Ganesh Housing
                            </div>
                            <div className='text-red-500'>-4.5%</div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='section5 my-5'>
                <div className='text-3xl font-bold text-center px-2 py-2 mt-5'>
                    AI Powered Features
                </div>
                <div className='grid grid-cols-3 gap-5 mt-5 '>
                    <Link to="/fear-greed-index" className='text-center py-20 bg-black text-white font-bold text-xl rounded-xl hover:scale-105 transition-all duration-300' >Fear Greed Index</Link>
                    <Link to="/market-sentiment" className='hover:scale-105 transition-all duration-300 text-center py-20 bg-black text-white font-bold text-xl rounded-xl'>Market Sentiment</Link>
                    <Link to="/real-time-news-analysis" className='hover:scale-105 transition-all duration-300 text-center py-20 bg-black text-white font-bold text-xl rounded-xl'>Real Time News Analysis</Link>
                </div>

            </div>


        </div>

    )
}

export default Home