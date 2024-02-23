import Link from "next/link";
import Image from "next/image";
import { ButtonAlt, Section } from "../../styles/styles";
import { CardContactContainer, CardContactContent } from "./styles";
import { TelegramLogo } from "phosphor-react";

export function CardContact() {
  return (
    <Section>
      <CardContactContainer>
        <div className='ellipse'>
          <Image
            width={330}
            height={410}
            src='/vectors/circles.svg'
            alt='circles'
          />
        </div>
        <CardContactContent>
          <div className='description'>
            <h2>Lets talk!</h2>
            <p>
              Got a burning question, a brilliant idea, or just want to say
              hello? My inbox is as open as a 24/7 diner. Drop me a message, and
              let's create some magic together! 🚀✨
            </p>
          </div>

          <div className='contact'>
            <Image
              width={480}
              height={500}
              src='/contact.svg'
              alt='imagem de contato'
            />
          </div>
        </CardContactContent>

        <Link href={"/contact"} legacyBehavior>
          <ButtonAlt>
            Contact Me{" "}
            <TelegramLogo
              style={{
                marginBottom: "-0.1rem",
                marginLeft: "0.2rem",
              }}
              size={16}
              weight='bold'
            />
          </ButtonAlt>
        </Link>
      </CardContactContainer>
    </Section>
  );
}
