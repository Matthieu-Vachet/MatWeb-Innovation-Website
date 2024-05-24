import Hero from "@/components/Hero";
// import PreLoader from "@/components/Preloader";
import Service from "@/components/Service";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            {/* <PreLoader /> */}
            <div className="max-w-7xl w-full">
                <FloatingNav
                    navItems={[
                        {
                            name: "Home",
                            link: "/",
                        },
                        {
                            name: "Service",
                            link: "#Service",
                        },
                    ]}
                />
                <Hero />
                <Service />
            </div>
        </main>
    );
}
