import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logoImg from '../assets/images/PandaFeliz.png'; 


const HeaderContainer = styled.header`
  position: sticky; /* Se queda arriba al hacer scroll */
  top: 0;
  z-index: 1000;
  width: 100vw;
  background-color: rgba(25FA, 25FA, 25FA, 0.95); /* Fondo base sutilmente transparente */
  backdrop-filter: blur(10px); /* Efecto cristal profesional */
  box-shadow: 0 2px 15px rgba(0,0,0,0.03); /* Sombra muy sutil */
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%; /* Padding respirable, edge-to-edge */
  max-width: 1400px;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-title); /* Caveat */
  font-size: 34px;
  color: #1A1A1A;
`;

const LogoIcon = styled.img`
  width: 38px;
  height: 38px;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 35px;
  list-style: none;
  font-family: var(--font-text); /* Patrick Hand */
  font-size: 20px;

  @media (max-width: 850px) {
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  position: relative;
  cursor: pointer;
  a {
    color: #333333;
    padding: 5px 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-secondary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const HeaderCTAButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--color-primary) 0%, #5a3bc7 100%);
  color: var(--color-white);
  padding: 12px 28px;
  border-radius: 50px;
  font-family: var(--font-subtitle); /* Averia para botones premium */
  font-size: 18px;
  border: none;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoWrapper>
          <LogoIcon src={logoImg} alt="Kora Logo" />
          Kora
        </LogoWrapper>
        <NavLinks>
          <NavLink whileHover={{ y: -2 }}><a href="#inicio">Inicio</a></NavLink>
          <NavLink whileHover={{ y: -2 }}><a href="#caracteristicas">Características</a></NavLink>
          <NavLink whileHover={{ y: -2 }}><a href="#temas">Temas</a></NavLink>
          <NavLink whileHover={{ y: -2 }}><a href="#sobrekora">Sobre Kora</a></NavLink>
        </NavLinks>
        <HeaderCTAButton
          onClick={() => window.chatbase && window.chatbase('open')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hablar ahora
        </HeaderCTAButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;