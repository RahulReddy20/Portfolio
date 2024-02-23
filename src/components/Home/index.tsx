/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { ButtonPrimary, Container } from "../../styles/styles";
import { Content, ImgHome2, HomeText } from "./styles";
import { FiArrowRight } from "react-icons/fi";

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello, my name is
          </p>
          <h1>
            Rahul Reddy
            <span className='animation'>
              <Image
                width={200}
                height={200}
                src='/vectors/triangle.svg'
                alt='triangle'
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Data Scientist",
                  "Machine Learning Specialist",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          {/* change later */}
          <div className='button'>
            <Link href={"#projects"}>
              <ButtonPrimary>
                <b>See my Portfolio</b>
                <FiArrowRight style={{ marginBottom: "-0.3rem" }} size={20} />
              </ButtonPrimary>
            </Link>
          </div>
        </HomeText>
        <ImgHome2>
          <img className='home-img2' src='/home.png' alt='Home Image' />

          <div className='code'>
            <Image
              width={150}
              height={150}
              src='/vectors/dino.svg'
              alt='dinossauro'
            />
          </div>
        </ImgHome2>
      </Content>
    </Container>
  );
}
