import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // 1. Configuramos el ID de tu bot
    window.chatbaseConfig = {
      chatbotId: "OxbyeChZ8MIra4B3Bvvjn",
    };

    // 2. Revisamos si el script ya existe para no cargarlo dos veces
    const existingScript = document.getElementById('chatbase-script');
    
    if (!existingScript) {
      // 3. Inyectamos el script mágicamente desde React
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script";
      script.setAttribute("chatbotId", "OxbyeChZ8MIra4B3Bvvjn");
      script.setAttribute("domain", "www.chatbase.co");
      script.defer = true;
      
      document.body.appendChild(script);
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez al cargar la página

  // Este componente es invisible, solo inyecta la inteligencia del bot
  return null; 
};

export default Chatbot;