import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
  MobileSubTitle,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import styled, { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOutToTop = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 9998;
  opacity: 0;
  visibility: hidden;
  transition: opacity 2s, visibility 2s;
  &.open {
    animation: ${slideInFromBottom} 1s ease-in-out;
    opacity: 1;
    visibility: visible;
  }
  &.close {
    animation: ${slideOutToTop} 3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
`;

const ResumeModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  padding: 0 0 0 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 2s, visibility 2s;
  &.open {
    animation: ${slideInFromBottom} 1s ease-in-out;
    opacity: 1;
    visibility: visible;
  }
  &.close {
    animation: ${slideOutToTop} 3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const ResumeModalContent = styled.div`
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  max-width: 90%;
  max-height: 95%;
  overflow: auto;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ResumeModalImage = styled.img`
  max-width: 95%;
  max-height: 95%;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
  object-fit: contain;
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: -15px;
  text-decoration: none;
  padding: 6px 14px;
  color: ${({ theme }) => theme.white};
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s ease-in-out !important;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  &:hover {
    transform: scale(1.5);
    transition: all 0.4s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    right: 10px;
    font-size: 25px;
    top: 55px;
    z-index: 1;
  }
`;

const ResumeDownloadButton = styled.a`
  position: absolute;
  top: 50px;
  right: -18px;
  text-decoration: none;
  padding: 6px 14px;
  color: ${({ theme }) => theme.white};
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s ease-in-out !important;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  &:hover {
    transform: scale(1.5);
    transition: all 0.4s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    right: 10px;
    font-size: 20px;
    left: 280px;
    top: 55px;
    z-index: 0;
  }
`;

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="about" style={{ height: "100vh" }}>
      <h1>ABOUT</h1>
      <HeroContainer>
        {/* <HeroBg>
          <HeroBgAnimation />
        </HeroBg> */}
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <SocialMediaIcons>
              <SocialMediaIcon
                title="Email"
                href="mailto:ysankarmukesh@gmail.com"
                target="display"
              >
                <EmailIcon />
              </SocialMediaIcon>
              <SocialMediaIcon
                title="mobile"
                href="tel:+91 9912114088"
                target="display"
              >
                <PhoneIcon />
              </SocialMediaIcon>
              

              <SocialMediaIcon
                href="https://www.instagram.com/sanmuk25/?hl=en"
                target="display"
                title="Instagram"
              >
                <InstagramIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href="https://wa.me/+919912114088" target="display" title="Whatsapp">
                <WhatsAppIcon />
              </SocialMediaIcon>
            </SocialMediaIcons>
            {/* <ResumeButton  onClick={openResumeModal}  >Check Resume</ResumeButton> */}
            <ResumeButton href="https://www.linkedin.com/in/sankar-mukesh-yalamandla-2b0946199/">
              <span
                style={{ position: "absolute", left: "50px", bottom: "5px" }}
              >
                <LinkedInIcon />
              </span>
              <span style={{ marginLeft: "40px" }}>LinkedIn</span>
            </ResumeButton>

            <MobileSubTitle>{Bio.description}</MobileSubTitle>



          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>

      {/* Resume Modal */}
      {/* <BlurOverlay className={isResumeModalOpen ? 'open' : 'close'} />
      <ResumeModalContainer className={isResumeModalOpen ? 'open' : 'close'}>
        <ResumeModalContent >
          <ResumeModalImage src="Shiva Shankar Goddumarri_Resume.png" alt="Resume" />
        </ResumeModalContent>
        <CloseButton onClick={closeResumeModal}>  <FontAwesomeIcon icon={faTimes} /></CloseButton>
        <ResumeDownloadButton href="https://github.com/ShivaShankarGoddumarri/User-Images/blob/main/Shiva%20Shankar%20Goddumarri_Resume.pdf" download>
          <FontAwesomeIcon icon={faDownload} />
          </ResumeDownloadButton>
      </ResumeModalContainer> */}
    </div>
  );
};
export default HeroSection;
