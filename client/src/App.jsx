import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import FearGreedIndex from "./pages/FearGreedIndex"
import RealTimeNewsAnalysis from "./pages/RealTimeNewsAnalysis"
import MarketSentiment from "./pages/MarketSentiment"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/fear-greed-index" element={<FearGreedIndex />} />
          <Route path="/real-time-news-analysis" element={<RealTimeNewsAnalysis />} />
          <Route path="/market-sentiment" element={<MarketSentiment />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App