import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeaderContainer, MobileIcon, NavMenu, Icons } from "./styles";
import { List, X } from "phosphor-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <div className='mobile-content' style={{ display: "flex" }}>
        <Link href={"/"}>
          <div className='logo'>
            <Image
              className='logo'
              width={50}
              height={50}
              src='/Logo1.png'
              alt='logo'
            />
          </div>
          {"Rahul"}
        </Link>

        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight='bold' />
          ) : (
            <List size={25} weight='bold' />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={"/"}>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link href={"/about"}>
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link href={"/experience"}>
              <span>Experience</span>
            </Link>
          </li>
          <li>
            <Link href={"/projects"}>
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link href={"/resume"}>
              <span>Resume</span>
            </Link>
          </li>

          <li>
            <Link href={"/contact"}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        <Icons>
          <Link
            href={"https://github.com/RahulReddy20"}
            target='_blank'
            aria-label='Github'>
            <FiGithub />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/muppidi-rahul-reddy/"}
            target='_blank'
            aria-label='Linkedin'>
            <FiLinkedin />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}
