import Image from "next/image";
import Link from "next/link";
import { Button, Container, ButtonAlternatives } from "../../styles/styles";
import { AboutContainer } from "./styles";
import { ArrowRight, TelegramLogo } from "phosphor-react";

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className='AboutImg'>
          <Image
            width={200}
            height={200}
            className='AboutImg'
            src='/mypic3.jpg'
            alt="Rahul's Image"
          />
        </div>

        <div className='aboutContent'>
          <div className='aboutDescription'>
            <h2>Little About Me!!</h2>
            <li>
              A proud Master's graduate from University of Texas at Dallas in
              Computer Science, and a Bachelor's graduate from Indian Institute
              of Information Technology, Allahabad in Information Technology.
            </li>{" "}
            <li>
              I am an avid developer, data explorer, enthusiastic learner.
              Passionate and driven individual with a flair for technology and
              innovation. My journey is marked by a relentless pursuit of
              knowledge and a commitment to excellence.
            </li>
          </div>

          <div className='aboutButton'>
            <Link href={"/resume"}>
              <Button>
                Resume
                <TelegramLogo
                  style={{
                    marginBottom: "-0.1rem",
                    marginLeft: "0.2rem",
                  }}
                  size={16}
                  weight='bold'
                />
              </Button>
            </Link>
            <Link href={"/about"}>
              <ButtonAlternatives>
                Read more
                <ArrowRight
                  style={{
                    marginBottom: "-0.1rem",
                    marginLeft: "0.2rem",
                  }}
                  weight='bold'
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
