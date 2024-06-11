// import PreLoader from "@/components/Preloader";
import { Header } from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Service from "@/components/sections/Service";
import Competences from "@/components/sections/Competences";
import Projets from "@/components/sections/Projets";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
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
                <Toaster
                    richColors
                    position="top-right"
                    toastOptions={{
                        closeButton: true,
                        className: "my-toast",
                    }}
                />
            </div>
        </main>
    );
}
