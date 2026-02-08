import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ContactSection from "../components/Contact";
import EducationSection from "../components/Education";
import Skills from "../components/Skills"
import InternshipSection from "../components/IntershipSection"
import Certificates from "../components/Certificates";
import About from "../components/About";
export default function Home() {
    return (
        <>
            <Hero />
            <About/>
            {/* <Features /> */}
            <Skills/>
            <InternshipSection/>
            <Projects/>
            <EducationSection/>
            <Certificates/>
            <ContactSection/>
          
        </>
    )
}