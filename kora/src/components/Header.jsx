import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Asumiendo que tienes un logo de panda pequeño en assets/images/header-logo.png
import logoImg from '../assets/images/PandaFeliz.png'; 


const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopBand = styled.div`
  background-color: #E6D9FF; /* Un lavanda suave, basado en el diseño original */
  height: 40px;
  width: 100%;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 8%;
  background-color: var(--color-white);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05); /* Sutil sombra para dar profundidad */
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-title); /* Caveat para el logo */
  font-size: 32px;
  color: #1A1A1A;
`;

const LogoIcon = styled.img`
  width: 35px;
  height: 35px;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  font-family: var(--font-text); /* Patrick Hand para enlaces */
  font-size: 18px;
`;

const NavLink = styled(motion.li)`
  position: relative;
  cursor: pointer;
  a {
    color: #4D4D4D;
  }

  /* Efecto hover: subrayado suave */
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
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

const CTAButton = styled(motion.button)`
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 12px 30px;
  border-radius: 50px;
  font-family: var(--font-text); /* Patrick Hand */
  font-size: 18px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TopBand />
      <NavContainer>
        <LogoWrapper>
          {/* Logo conceptual, usa el tuyo */}
          <LogoIcon src={logoImg} alt="Kora Panda Logo" />
          Kora
        </LogoWrapper>
        <NavLinks>
          <NavLink whileHover={{ scale: 1.05 }}><a href="#inicio">Inicio</a></NavLink>
          <NavLink whileHover={{ scale: 1.05 }}><a href="#caracteristicas">Características</a></NavLink>
          <NavLink whileHover={{ scale: 1.05 }}><a href="#temas">Temas</a></NavLink>
          <NavLink whileHover={{ scale: 1.05 }}><a href="#sobrekora">Sobre Kora</a></NavLink>
        </NavLinks>
        {/* Hover dinámico: se agranda ligeramente y cambia la opacidad */}
        <CTAButton
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(123, 92, 250, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Hablar ahora
        </CTAButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;