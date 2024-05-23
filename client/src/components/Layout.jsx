import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

import logo from "../assets/logo.jpg"

import SearchForm from "./SearchForm"

function Layout() {
    return (

        <div>
            <div className="header py-6 bg-black text-white ">
                <div className="nav flex justify-between items-center px-5  max-w-screen-xl mx-auto   ">
                    <div className="logo">
                        <Link className=" px-5 hover:scale-110 " to="/">
                            <img className="w-20" src={logo} alt="" />
                        </Link>

                    </div>

                    <div className="menu">
                        <NavLink activeClassName="active" className="py-3 px-5 transition-all duration-300 hover:scale-105" to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="py-3 px-5 hover:scale-110" to="/fear-greed-index">Fear Greed Index</NavLink>
                        <NavLink activeClassName="active" className="py-3 px-5 hover:scale-110" to="/market-sentiment">Market Sentiment</NavLink>
                        <NavLink activeClassName="active" className="py-3 px-5 hover:scale-110" to="/real-time-news-analysis">Real Time News Analysis</NavLink>

                    </div>
                    <div className="search ">
                        <SearchForm />
                    </div>
                </div>

            </div>
            <div className="px-5 min-h-screen">
                <Outlet />
            </div>
            <div className="footer py-20 bg-black">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-white text-center">Copyright © 2024 MarketBuzz by csabdulgaffar@gmail.com </div>

                </div>
            </div>
        </div>
    )
}

export default Layout