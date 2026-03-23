import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Importamos los iconos de redes sociales desde react-icons
import { RiInstagramLine, RiTwitterXLine, RiTiktokLine, RiFacebookBoxLine } from 'react-icons/ri';
import logoImg from '../assets/images/PandaFeliz.png'; 

const FooterSection = styled.footer`
  background-color: #0B041C;
  color: rgba(255, 255, 255, 0.7);
  padding: 80px 5% 30px 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterGrid = styled.div`
  display: grid;
  /* Quitamos una columna, ahora son 3. La marca ocupa más espacio */
  grid-template-columns: 2fr 1fr 1fr; 
  gap: 50px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-title);
  font-size: 34px;
  color: var(--color-white);
  
  @media (max-width: 580px) {
    justify-content: center;
  }
`;

const BrandDesc = styled.p`
  font-family: var(--font-text);
  font-size: 16px;
  line-height: 1.6;
  max-width: 300px;
  
  @media (max-width: 580px) {
    margin: 0 auto;
  }
`;

/* ----- Redes Sociales ----- */
const SocialRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 580px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  background: rgba(255, 255, 255, 0.05);
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-white);
    background: var(--color-primary);
  }
`;

const LinkCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ColTitle = styled.h4`
  font-family: var(--font-subtitle);
  color: var(--color-white);
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  font-family: var(--font-text);
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-secondary);
  }
`;

const BottomBar = styled.div`
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-text);
  font-size: 14px;

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterGrid>
        <BrandCol>
          <LogoWrapper>
            <img src={logoImg} alt="Kora Logo" style={{width: 30}} />
            Kora
          </LogoWrapper>
          <BrandDesc>
            Tu compañero virtual de confianza para aprender y hablar sobre temas difíciles sin prejuicios.
          </BrandDesc>
          {/* Aquí puedes reemplazar "#" por los links de tus redes en el futuro */}
          <SocialRow>
            <SocialIcon href="#" whileHover={{ y: -5 }}><RiInstagramLine /></SocialIcon>
            <SocialIcon href="#" whileHover={{ y: -5 }}><RiTiktokLine /></SocialIcon>
            <SocialIcon href="#" whileHover={{ y: -5 }}><RiTwitterXLine /></SocialIcon>
            <SocialIcon href="#" whileHover={{ y: -5 }}><RiFacebookBoxLine /></SocialIcon>
          </SocialRow>
        </BrandCol>

        <LinkCol>
          <ColTitle>Navegación</ColTitle>
          <FooterLink href="#inicio">Inicio</FooterLink>
          <FooterLink href="#caracteristicas">Características</FooterLink>
          <FooterLink href="#temas">Temas</FooterLink>
          <FooterLink href="#sobrekora">Sobre nosotros</FooterLink>
        </LinkCol>

        <LinkCol>
          <ColTitle>Contacto</ColTitle>
          <FooterLink href="#">TikTok</FooterLink>
          <FooterLink href="https://www.instagram.com/entrenos.contigo?igsh=Zm81YmVzNWRjeGFl">Instagram</FooterLink>
          <FooterLink href="#comunidad">Facebook</FooterLink>
        </LinkCol>
      </FooterGrid>

      <BottomBar>
        <p>&copy; {new Date().getFullYear()} Kora App. Todos los derechos reservados.</p>
        <p>Diseñado con 💜 para el bienestar. ENTRE NOS</p>
      </BottomBar>
    </FooterSection>
  );
};

export default Footer;