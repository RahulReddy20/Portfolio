import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { BiUserPin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  ArrowLeft,
  ChatCenteredText,
  Image as IconImage,
  YoutubeLogo,
  Hash,
} from "phosphor-react";
import * as S from "../styles/about";
import { ButtonAlt, Section, Title, ButtonSecondary } from "../styles/styles";

interface DashboardPageProps {
  fallback: any;
}
export default function About() {
  return (
    <>
      <Head>
        <title>About | Rahul </title>
        <meta
          name='description'
          content="I am Rahul Reddy, a dynamic Machine Learning enthusiast with a 🎓Master's in Computer Science from the University of Texas at Dallas."
        />
        <meta property='og:title' content='About | Rahul' />
        <meta
          property='og:description'
          content="I am Rahul Reddy, a dynamic Machine Learning enthusiast with a 🎓Master's in Computer Science from the University of Texas at Dallas."
        />
      </Head>

      <Header />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            About Myself!!
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img className='AboutImg' src='/casual_mypic.jpg' alt='Rahul' />

              <div className='links'>
                <ul>
                  <Link
                    href={"https://github.com/RahulReddy20"}
                    target='_blank'
                    aria-label='Github'>
                    <AiFillGithub size={25} />
                    @RahulReddy20
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/muppidi-rahul-reddy/"}
                    target='_blank'
                    aria-label='Linkedin'>
                    <BsLinkedin size={25} />
                    @Rahul Reddy
                  </Link>
                  <Link
                    href={"mailto:rahulreddy2036@gmail.com"}
                    className='email'
                    target='_blank'
                    aria-label='email'>
                    <GrMail size={25} />
                    @rahulreddy2036@gmail.com
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>Lets talk, maybe create an amazing project together?</h3>
                <p>Send me a message! 😉</p>
                <Link href={"/contact"}>
                  <ButtonAlt>Contact</ButtonAlt>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p style={{ textAlign: "justify" }}>
                👋 Hey there! I am Rahul Reddy, a dynamic Machine Learning
                enthusiast with a 🎓Master's in Computer Science from the
                University of Texas at Dallas.🌐My journey is marked by hands-on
                experiences, including the development of a Meter Board reader
                with a stellar 78% prediction accuracy during my tenure as a
                Machine Learning Intern at Coral Innovations.💡
              </p>
              <p style={{ textAlign: "justify" }}>
                🧩 All of us face challenges while moving from one phase to
                another. Our ability to confront such challenges in the
                workspace is largely determined by our attitudes towards these
                challenges. I am a person who has always had a profound passion
                and fascination for areas requiring an analytical approach. 💡💼
              </p>
              <p style={{ textAlign: "justify" }}>
                🚀 Embarking on a journey from a profound fascination for
                analytical challenges to pursuing a Bachelor's in Information
                Technology at the esteemed Indian Institute of Information
                Technology, Allahabad. Throughout my undergraduate studies, I've
                cultivated a strong foundation in core subjects such as Data
                Structures, Object-oriented Programming, Operating Systems, and
                Database Management Systems. 💻📚
              </p>
              <p style={{ textAlign: "justify" }}>
                🎓 Elevating my academic journey, I pursued a Master of Science
                in Computer Science at the University of Texas at Dallas.
                Specializing in cutting-edge technologies, I immersed myself in
                courses that expanded my knowledge and honed my skills,
                including Statistical Methods for Data Science, Machine
                Learning, Computer Vision, Big Data Analytics, Design and
                Analysis of Algorithms, Web Programming Languages, and Database
                Design. 📊💻These comprehensive courses not only solidified my
                expertise but also fueled my passion for creating innovative
                solutions in the dynamic realm of computer science. 🚀
              </p>
              <p style={{ textAlign: "justify" }}>
                🔧 My diverse project portfolio spans a spectrum of
                applications, showcasing expertise in safety prediction 🚦,
                real-time face detection 👥, text summarization 📝, and semantic
                segmentation of satellite imagery 🛰️. Notably, I've delved into
                the realm of web development through projects like my personal
                portfolio website and a fully functional grocery store website.
                These experiences underscore my adaptability, emphasizing
                proficiency not only in machine learning technologies like
                YOLOv5, TensorFlow, and PyTorch but also in crafting interactive
                and user-friendly web solutions. 💻
              </p>

              <p style={{ textAlign: "justify" }}>
                🙌 Beyond my dedication to technology, I bring a vibrant and
                creative dimension to my life. Passionate about dance, I
                actively engaged in the art form during my undergraduate years.
                As the Dance Coordinator for Geneticx Crew, I took charge of
                managing social media platforms, crafting announcements, and
                fostering a dynamic environment for the dance crew. 🕺💃 This
                dual commitment to both technology and the arts not only
                reflects my versatility but also underscores my belief in a
                well-rounded life. I find joy and inspiration in expressing
                myself through dance, demonstrating that innovation extends
                beyond the realms of technology. 🌟💻🎶
              </p>
              <p style={{ textAlign: "justify" }}>
                💪 Thanks for joining my journey! 💻 From unraveling the
                mysteries of Machine Learning to conquering the dance floor,
                I've embraced the rhythm of technology and creativity. Let's not
                just code, but dance through the algorithms of life! If you're
                looking for a tech-savvy dance enthusiast with a knack for
                innovation, let's connect and groove into the future together.
                🕺💡 Feel free to reach out—I promise our conversation will be
                as dynamic as my projects! 🤝✨ #TechAndDanceInHarmony 🌟 .
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>

        <Link href={"/#home"} legacyBehavior>
          <ButtonSecondary>
            <a>
              <ArrowLeft
                style={{ marginBottom: "-0.2rem" }}
                weight='bold'
                size={18}
              />{" "}
              Back
            </a>
          </ButtonSecondary>
        </Link>
      </Section>
      <Footer />
    </>
  );
}
