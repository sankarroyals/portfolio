import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { skills } from '../../data/constants';
import "./skills.css";
import AOS from 'aos';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 200px 0 0 30px; 
  }

  
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 800px; 
  gap: 12px;
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
  
`;

const Title = styled.div`
  font-size: 42px; 
  text-align: center;
  font-weight: 600;
  padding: 20px 0 20px 0;
  margin-top: 70px; 
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    ${'' /* margin-top: -80px;  */}
    font-size: 32px; 
    padding: 10px 0 0px 0;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
  margin-top: 20px;
 
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 20px 18px 8px 8px;
    grid-template-columns: repeat(1, 1fr); 
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 16px 34px 6px 8px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 25px; 
    text-align: center;
   
  }
`;

const spinInAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinOutAnimation = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  transition: transform 0.2s;
  &:not(:hover) {
    animation: ${spinOutAnimation} 1s linear forwards;
  }
`;

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 10px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px; 
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
  }
  @media (max-width: 500px) {
    font-size: 12px; 
    padding: 4px 10px; 
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 400px; 
  background: ${({ theme }) => theme.card};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 12px; 
  padding: 16px 24px; 
  transition: transform 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    border: 1.2px solid ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.card_hover_bg};
    ${SkillTitle}{
      color: ${({ theme }) => theme.text_primary};
    }
    ${SkillImage}{
      transform: scale(1.2) rotate(360deg);
      animation: ${spinInAnimation} 1s linear forwards;
    }
    ${SkillItem}{
      background: ${({ theme }) => theme.primary};
      border-color: rgb(133, 76, 230);
      color: white;
    }
  }
  @media (max-width: 768px) {
    max-width: 350px; 
    padding: 10px 24px; 
    border: 1px solid #854CE6; 
    background-color: rgba(133, 76, 230, 0.02);

  }
  @media (max-width: 500px) {
    max-width: 300px; 
    padding: 10px 20px; 
    border: 1px solid #854CE6;
    background-color: rgba(133, 76, 230, 0.02);

  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px; 
  margin-bottom: 16px; 
`;

const Skills = () => {
  useEffect(() => {
    AOS.init();
}, []);

  return (
    <Container id="skills">
      <Wrapper>
        <Title data-aos="zoom-in-down">SKILLS</Title>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem className='sItem'>
                    <SkillImage className="sImage" src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};
export default Skills;
