import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Muppidi Rahul Reddy</h4>
      <div className='links'>
        <Link
          href={"https://github.com/RahulReddy20"}
          target='_blank'
          aria-label='Link para o Github'>
          <FiGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/muppidi-rahul-reddy/"}
          target='_blank'
          aria-label='Link para o Linkedin'>
          <FiLinkedin />
        </Link>
      </div>
    </FooterContainer>
  );
}
