import Head from "next/head";
import { About } from "../components/CardAbout";
import { Header } from "../components/Header";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Experience";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { Education } from "../components/Education";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rahul's Portfolio</title>
      </Head>

      <Header />
      <ScrollTop />
      <Section>
        <Section>
          <HomeHero />
        </Section>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <CardContact />
      </Section>

      <Footer />
    </>
  );
}
