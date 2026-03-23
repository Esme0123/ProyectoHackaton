import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Asumiendo que has renombrado el archivo como 'PandaAbrazando.png'
import pandaHeroImg from '../assets/images/PandaAbrazando.png';

const HeroContainer = styled.section`
  position: relative;
  width: 100vw; /* Abarca el 100% del ancho visible de la pantalla */
  min-height: calc(100vh - 80px); /* Ocupa casi toda la pantalla visible */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-white); /* Fondo blanco para resaltar los colores de las manchas */
  padding: 0; /* Sin padding global para que llegue al borde */
`;

/* ----- Efectos de Fondo Modernos (Blurred Blobs) ----- */
const BlobShape = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px); /* Difuminado extremo */
  z-index: 0;
  opacity: 0.6;
`;

const PurpleBlob = styled(BlobShape)`
  top: -10%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: var(--color-primary);
`;

const MintBlob = styled(BlobShape)`
  bottom: -10%;
  right: -5%;
  width: 600px;
  height: 600px;
  background: var(--color-secondary);
`;

const PinkBlob = styled(BlobShape)`
  top: 20%;
  left: 50%;
  width: 400px;
  height: 400px;
  background: var(--color-accent);
  transform: translateX(-50%);
`;

/* ----- Contenedor Principal ----- */
const ContentWrapper = styled.div`
  position: relative;
  z-index: 1; /* Para que esté por encima de las manchas de color */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px; 
  margin: 0 auto; /* Súper ancho para pantallas grandes, sin límites a los costados */
  padding: 0 5%; /* Pequeño padding interno para que el contenido no pegue a los bordes */
  gap: 50px;

  @media (max-width: 968px) {
    flex-direction: column-reverse; /* En móvil, el panda va arriba y el texto abajo */
    text-align: center;
    margin-top: 40px;
  }
`;

/* ----- Textos ----- */
const TextSection = styled(motion.div)`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 968px) {
    align-items: center;
  }
`;

const Badge = styled(motion.div)`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px); /* Efecto cristal */
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 8px 20px;
  border-radius: 30px;
  font-family: var(--font-subtitle);
  color: var(--color-primary);
  font-size: 16px;
  display: inline-block;
  width: fit-content;
  margin-bottom: 25px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.02);
`;

const Title = styled.h1`
  font-family: var(--font-subtitle);
  font-size: clamp(3rem, 5vw, 4.5rem); /* Tipografía fluida: se adapta al tamaño de pantalla */
  line-height: 1.1;
  color: #1A1A1A;
  margin-bottom: 25px;

  /* Resaltamos palabras clave con color */
  span {
    color: var(--color-primary);
    position: relative;
    white-space: nowrap;
    
    /* Subrayado de diseño */
    &::after {
      content: '';
      position: absolute;
      bottom: 10%;
      left: 0;
      width: 100%;
      height: 15px;
      background-color: var(--color-secondary);
      opacity: 0.3;
      z-index: -1;
      border-radius: 10px;
    }
  }
`;

const Subtitle = styled.p`
  font-family: var(--font-text);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #555;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 600px;
`;

/* ----- Botones ----- */
const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--color-primary) 0%, #5a3bc7 100%);
  color: var(--color-white);
  padding: 18px 40px;
  border-radius: 50px;
  font-family: var(--font-subtitle);
  font-size: 20px;
  box-shadow: 0 10px 25px rgba(123, 92, 250, 0.3);
  border: none;
`;

const SecondaryButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  color: var(--color-primary);
  padding: 18px 40px;
  border-radius: 50px;
  font-family: var(--font-subtitle);
  font-size: 20px;
  border: 2px solid var(--color-primary);
`;

/* ----- Imagen del Panda ----- */
const ImageSection = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PandaImage = styled(motion.img)`
  width: 100%;
  max-width: 550px;
  z-index: 2;
  filter: drop-shadow(0px 20px 30px rgba(0,0,0,0.15)); /* Sombra a la imagen en sí, no a una caja */
  mix-blend-mode: multiply;
`;

const Hero = () => {
  return (
    <HeroContainer id="inicio">
      {/* Fondos abstractos para darle vida profesional */}
      <PurpleBlob />
      <MintBlob />
      <PinkBlob />

      <ContentWrapper>
        <TextSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tu espacio seguro y confidencial 🔒
          </Badge>

          <Title>
            Habla, aprende y <br />
            sana <span>sin prejuicios</span>
          </Title>

          <Subtitle>
            Kora no es solo un chat. Es tu compañero virtual diseñado para escuchar y brindarte información validada sobre temas sensibles, 100% en privado.
          </Subtitle>

          <ButtonGroup>
            <PrimaryButton
              onClick={() => window.chatbase && window.chatbase('open')}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(123, 92, 250, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar a hablar
            </PrimaryButton>
            <SecondaryButton
              onClick={() => window.chatbase && window.chatbase('open')}
              whileHover={{ scale: 1.05, background: "var(--color-primary)", color: "var(--color-white)" }}
              whileTap={{ scale: 0.95 }}
            >
              Conocer más
            </SecondaryButton>
          </ButtonGroup>
        </TextSection>

        <ImageSection>
          <PandaImage 
            src={pandaHeroImg} 
            alt="Kora Panda"
            // Esta es la animación continua para que el panda flote sutilmente
            animate={{ y: ["-3%", "3%", "-3%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />
        </ImageSection>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;