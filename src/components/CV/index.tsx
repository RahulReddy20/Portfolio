/* eslint-disable @next/next/no-img-element */
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles";
import { FiDownload } from "react-icons/fi";

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title style={{ marginBottom: "3rem" }}>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className='aspas'>&ldquo;</div>
            <p>
              Embark on a journey through the tech symphony of my career - where
              pixels meet innovation and creativity dances with code. 🚀✨ Hit
              the download button and join me in unleashing the extraordinary!
              📥💻 #CodeAndCreativityInOneClick
            </p>
            <div className='profile'>
              <img src='/mypic3.jpg' alt='Profile Pic' />
              <div className='name'>
                <h3>Rahul Reddy</h3>
                <span>Software Developer | Data Scientist</span>
              </div>
            </div>
          </CVDescription>

          <Curriculum>
            <img src='/cv_download.png' alt='Resume' />
            <a href='/pdf/Muppidi_Rahul_Reddy_Resume.pdf' download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20} />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>
      </CVContainer>
    </Container>
  );
}
