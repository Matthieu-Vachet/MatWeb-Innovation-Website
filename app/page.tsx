import { navItems } from "@/data";
// import PreLoader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Competences from "@/components/Competences";
import Projets from "@/components/Projets";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
    return (
        <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
            {/* <PreLoader /> */}
            <div className="w-full">
                <Header />
                <Hero />
                <Service />
                <Competences />
                <Projets />
                <About />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
