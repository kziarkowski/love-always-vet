import PageNav from "../../src/components/PageNav";
import Hero from "../../src/components/Hero";
import aboutHero from '../../public/about.hero.png';
import SectionTitles from "../../src/components/SectionTitles";
const About = () => {
  
  return (
    <>
      <PageNav />
      <Hero image={aboutHero} title="About Us" />
      <div>
        <h1>
        Dr. Kelly Chandler, DVM, CVA, CHPV
        </h1>
      </div>
    </>
  )
}

export default About
