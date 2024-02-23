import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { CV } from "../components/CV";
import { Description, Section, Title } from "../styles/styles";
import { PageSection } from "../styles/resume";
import { BsFileText } from "react-icons/bs";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Rahul </title>
        <meta
          name='description'
          content="This is rahul's resume, you can see or download it."
        />
        <meta property='og:title' content='Resume | Rahul' />
        <meta
          property='og:description'
          content=" This is rahul's resume, you can see or download it."
        />
      </Head>

      <Header />
      <ScrollTop />
      <Section>
        <Title>
          Curriculam Vitae
          <span>
            <BsFileText /> Resume
          </span>
        </Title>
        <Description
          style={{ width: "100%", textAlign: "center", marginBottom: "1px" }}>
          This is my updated resume, powered by Canva website.
          <br />
          You can download my professional resume by clicking on the download
          button below.
        </Description>

        <PageSection>
          <embed src='/pdf/Muppidi_Rahul_Reddy_Resume.pdf' />
          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  );
}
