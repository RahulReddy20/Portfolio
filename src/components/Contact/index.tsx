/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from "next/link";
import { Form } from "./Form";
import { Description, Section, Title } from "../../styles/styles";
import { ContainerContact, ContactContent } from "./styles";
import { BsWhatsapp } from "react-icons/bs";
import { Envelope, TelegramLogo } from "phosphor-react";

export function Contact() {
  return (
    <Section>
      <Title>
        Contact Form
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        Feel free to hit me up – whether it's for a tech talk, collaboration, or
        just to debate whether pineapple belongs on pizza. Let's keep the
        conversation spicy and the code even spicier! 🔥📬
      </Description>

      <ContainerContact>
        <Form />
        <Title style={{ textAlign: "center" }}> Schedule a Meeting </Title>
        <Description style={{ textAlign: "center", marginTop: "3px" }}>
          This is powered by Calendy. Hence, it may take some time for loading.
          (Note: You have to accept the cookies by Calendy in order to Schedule
          a meet)
        </Description>
        <iframe
          src='https://calendly.com/rahulreddy20/30min'
          width='100%'
          height='800px'
          frameBorder='0'
          title='Calendly'></iframe>
      </ContainerContact>
    </Section>
  );
}
