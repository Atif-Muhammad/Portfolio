// import Navbar from "./components/Navbar"
import { useSelector } from "react-redux"
import Footer from "./components/Footer"
import type { CompChildren } from "./types/types"
import Ticker from "./components/ui/Ticker"

function Layout({ children }: CompChildren) {

  const ticker = useSelector((state: { tickerReducer: { value: string | null } }) => state.tickerReducer.value)
  return (
    <div className="w-full h-full min-h-screen relative">
      {/* <Navbar/> */}
      {ticker && (
        <Ticker ticker={ticker} />
      )}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout