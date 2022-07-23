import { Typography } from "@mui/material";
import PageNav from "../../src/components/PageNav";
import Hero from "../../src/components/Hero";
import aboutHero from '../../public/about.hero.png';

const About = () => {
  
  return (
    <>
      <PageNav />
      <Hero image={aboutHero} title="About Us" />
      <div>
        <Typography variant='h1'>
                Dr. Kelly Chandler, DVM, CVA, CHPV
        </Typography>
      </div>
      <div>
        <image src: KellyChandler.jpg/>
      </div>
    </>
  )
}

export default About
