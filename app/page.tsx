import { navItems } from "@/data";
// import PreLoader from "@/components/Preloader";
import { FloatingNav } from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Competences from "@/components/Competences";
import Projets from "@/components/Projets";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5">
            {/* <PreLoader /> */}
            <div className="w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Service />
                <Competences />
                <Projets />
                <About />
                <Contact />
            </div>
        </main>
    );
}
