import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Education from "@/components/sections/education";
import Home from "@/components/sections/home";
import Projects from "@/components/sections/projects";
import Experiences from "@/components/sections/experiences";
import Skills from "@/components/sections/skills";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Home");
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col px-4 gap-10 pb-10 md:w-3/4">
          <Home />
          <Skills />
          <Experiences />
          <Projects />
          <Education />
        </div>
      </div>
      <Footer /> 
    </>
  );
}
