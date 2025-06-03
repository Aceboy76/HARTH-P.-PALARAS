import FadeInSection from "@/components/fade-in-section";
import About from "./about/page";
import MainLayout from "./layout";
import Project from "./project/page";
import Tech from "./tech/page";

export default function Main() {

    return (
        <MainLayout>
            <FadeInSection>
                <div id="welcome" className="flex items-center justify-center w-full h-fit lg:h-screen text-3xl lg:text-5xl font-medium leading-relaxed text-center font-syne py-20 lg:py-0">
                    <p>Hi, I&apos;m <strong className="text-[var(--destructive)]">Harth P. Palaras</strong>, a Full-Stack Developer specializing in both Frontend and Backend development</p>
                </div>
            </FadeInSection>

            <FadeInSection> <About /></FadeInSection>
            <FadeInSection> <Tech /></FadeInSection>
            <FadeInSection> <Project /></FadeInSection>




        </MainLayout>
    )
}

