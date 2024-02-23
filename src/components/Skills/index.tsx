/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import cardSkills from "../../data/skills";
import { Container, Title } from "../../styles/styles";
import { SkillsContainer, SkillsContent, Vector, Cubo } from "./styles";
import { BsCodeSquare } from "react-icons/bs";
// import { Cubo } from "./Blogs/styles";
interface Skills {
  title: string;
  color?: string;
  img?: string;
  id: number;
}

export function Skills() {
  return (
    <Container>
      <Cubo>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <Image width={72} height={72} src='/icons/HTML.png' alt='Html' />
            </div>
            <div className='face2'>
              <Image
                width={72}
                height={72}
                src='/icons/react.png'
                alt='React'
              />
            </div>
            <div className='face3'>
              <Image
                width={72}
                height={72}
                src='/icons/python.png'
                alt='Python'
              />
            </div>
            <div className='face4'>
              <Image
                width={72}
                height={72}
                src='/icons/opencv.png'
                alt='OpenCV'
              />
            </div>
            <div className='face5'>
              <Image
                width={72}
                height={72}
                src='/icons/Tensorflow.png'
                alt='Tensorflow'
              />
            </div>
            <div className='face6'>
              <Image
                width={72}
                height={72}
                src='/icons/mysql.png'
                alt='Mysql'
              />
            </div>
          </div>
        </div>
      </Cubo>
      <Vector>
        <div className='js'>
          <Image width={100} height={100} src='/vectors/js.svg' alt='' />
        </div>
        <div className='python'>
          <Image width={150} height={150} src='/vectors/python.svg' alt='' />
        </div>
      </Vector>
      <Title>
        Skills
        <span>
          <BsCodeSquare />
          Top
        </span>
      </Title>
      <SkillsContainer>
        {cardSkills.map((skill) => {
          return (
            <SkillsContent color={skill.color} key={skill.id}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                width={100}
                height={80}
                src={skill.img}
                alt={skill.title}
              />
              <h4>{skill.title}</h4>
              <span className='border'></span>
            </SkillsContent>
          );
        })}
      </SkillsContainer>
    </Container>
  );
}
