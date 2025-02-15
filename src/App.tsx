import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/howItWorks/HowItWorks"
import Benefits from "./components/benefits/Benefits"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="bg-gray-50">
            <Header />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Benefits />
                <CTA />
            </main>
            <Footer />
        </div>
    )
}
