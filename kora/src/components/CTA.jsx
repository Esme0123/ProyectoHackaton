import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CTASection = styled.section`
  width: 100%;
  padding: 100px 5%;
  background: linear-gradient(135deg, var(--color-primary) 0%, #4A28A0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

// Círculos decorativos de fondo
const DecorCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  z-index: 0;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  color: var(--color-white);
`;

const Title = styled.h2`
  font-family: var(--font-subtitle);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-family: var(--font-text);
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
`;

const StartButton = styled(motion.button)`
  background-color: var(--color-secondary); /* Botón menta para resaltar sobre el morado */
  color: #0A3633; /* Texto oscuro para contraste */
  padding: 20px 50px;
  border-radius: 50px;
  font-family: var(--font-subtitle);
  font-size: 22px;
  border: none;
  box-shadow: 0 10px 30px rgba(62, 209, 198, 0.3);
  cursor: pointer;
`;

const CTA = () => {
  return (
    <CTASection>
      <DecorCircle style={{ width: 300, height: 300, top: -100, left: -100 }} />
      <DecorCircle style={{ width: 500, height: 500, bottom: -200, right: -150 }} />
      
      <Content
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <Title>¿Listo para empezar tu viaje?</Title>
        <Subtitle>
          Habla con Kora hoy mismo. Es gratis, privado y está disponible 24/7 para ti.
        </Subtitle>
        <StartButton
          onClick={() => window.chatbase && window.chatbase('open')}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(62, 209, 198, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Iniciar chat ahora
        </StartButton>
      </Content>
    </CTASection>
  );
};

export default CTA;