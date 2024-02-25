import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import experiences from "../data/experiences";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollTop } from "../components/ScrollTop";
import { Section, Title, Description } from "../styles/styles";
import {
  TabButton,
  TabContent,
  TabsContainer,
  Leetcode,
} from "../styles/experience";
import { Briefcase } from "phosphor-react";
import works from "../data/experiences";
import { Education } from "../components/Education";

export default function Experience() {
  const [tabIndex, setTabIndex] = useState(0);
  let numbering = 0;

  return (
    <div>
      <Head>
        <title>Experience | Rahul </title>
        <meta name='description' content='My experience' />
        <meta property='og:title' content='Experience | Rahul' />
        <meta property='og:description' content='My experience' />
      </Head>

      <Header />
      <ScrollTop />
      <Section>
        <Title>
          Experience
          <span>
            <Briefcase /> Work
          </span>
        </Title>

        <Description>
          <p>
            I am passionate about designing websites and developing different ML
            models, I am dedicated to continuous skill enhancement and staying
            abreast of emerging technologies. Eager to tackle new challenges, I
            am enthusiastic about contributing to innovative projects and
            pushing the boundaries of my expertise.
          </p>
        </Description>

        <TabsContainer>
          <Tabs
            className='tabs'
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            selectedTabClassName={"is-active"}
            selectedTabPanelClassName={"is-active"}>
            <TabButton>
              <TabList className='tab__list'>
                {works.map((experience) => {
                  if (experience.id) {
                    numbering += 1;
                    return (
                      <>
                        <h2 key={experience.id}>
                          {numbering >= 0 && numbering <= 10
                            ? `0${numbering - 1}`
                            : `${numbering - 1}`}
                        </h2>
                        <Tab className='tab'>
                          <button>{experience.title}</button>
                        </Tab>
                      </>
                    );
                  }
                })}
              </TabList>
            </TabButton>

            <TabContent>
              {works.map((experience) => {
                return (
                  <TabPanel className='tab__panel' key={experience.id}>
                    <div className='title-container'>
                      <div className='title-content'>
                        <div className='title'>
                          <h1>{experience.title}</h1>
                          <div className='sub'></div>
                          <h2>{experience.subTitle}</h2>
                        </div>
                      </div>
                      <div className='office'>
                        <h3>{experience.office}</h3>
                        <h4>{experience.date}</h4>
                      </div>
                    </div>
                    <ul className='experience-description'>
                      {experience.description.map((des) => (
                        <li>{des}</li>
                      ))}
                    </ul>
                    <div className='techs'>
                      <h3>Tech:</h3>
                      <ul>
                        {experience.tags.map((tag) => (
                          <div className='tags' key={tag.name}>
                            <Image
                              width={50}
                              height={50}
                              src={tag.icon}
                              alt={tag.name}
                            />
                            <h4>{tag.name}</h4>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </TabPanel>
                );
              })}
            </TabContent>
          </Tabs>
        </TabsContainer>
        <Education />
        <Leetcode>
          <a href='https://leetcode.com/rahulreddy2036/' target='_blank'>
            <img
              src='https://leetcard.jacoblin.cool/rahulreddy2036?ext=heatmap&theme=dark&font=Poppins&border=0&radius=20&width=700&height=350'
              alt='LeetCode Stats'></img>
          </a>
        </Leetcode>
      </Section>
      <Footer />
    </div>
  );
}
