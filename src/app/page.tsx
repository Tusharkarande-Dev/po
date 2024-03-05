import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import ScrollToTop from "@/components/ScrollToTop"

const Home = () => {
  return (
    <div className="bg-gray-900/10 w-full  dark:bg-zinc-950/90 h-screen">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home