import { navItems } from "@/data";
// import PreLoader from "@/components/Preloader";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Competences from "@/components/Competences";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5">
            {/* <PreLoader /> */}
            <div className="w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Service />
                <Competences />
            </div>
        </main>
    );
}
