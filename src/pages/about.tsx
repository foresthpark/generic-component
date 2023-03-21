import React from "react";

export default function AboutPage() {
  const name = `
  ███████╗ ██████╗ ██████╗ ███████╗███████╗████████╗    ██████╗  █████╗ ██████╗ ██╗  ██╗                         
  ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝    ██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝                         
  █████╗  ██║   ██║██████╔╝█████╗  ███████╗   ██║       ██████╔╝███████║██████╔╝█████╔╝                          
  ██╔══╝  ██║   ██║██╔══██╗██╔══╝  ╚════██║   ██║       ██╔═══╝ ██╔══██║██╔══██╗██╔═██╗                          
  ██║     ╚██████╔╝██║  ██║███████╗███████║   ██║       ██║     ██║  ██║██║  ██║██║  ██╗                         
  ╚═╝      ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝       ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝                         
                                                                                                                 
              ██████╗ ██████╗  ██████╗ ███████╗███████╗███████╗███████╗██╗ ██████╗ ███╗   ██╗ █████╗ ██╗         
              ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██╔════╝██╔════╝██╔════╝██║██╔═══██╗████╗  ██║██╔══██╗██║         
              ██████╔╝██████╔╝██║   ██║█████╗  █████╗  ███████╗███████╗██║██║   ██║██╔██╗ ██║███████║██║         
              ██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██╔══╝  ╚════██║╚════██║██║██║   ██║██║╚██╗██║██╔══██║██║         
              ██║     ██║  ██║╚██████╔╝██║     ███████╗███████║███████║██║╚██████╔╝██║ ╚████║██║  ██║███████╗    
              ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝    
                                                                                                                 
              ███╗   ███╗███████╗███╗   ███╗███████╗    ██████╗  ██████╗ ███████╗████████╗███████╗██████╗        
              ████╗ ████║██╔════╝████╗ ████║██╔════╝    ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗       
              ██╔████╔██║█████╗  ██╔████╔██║█████╗      ██████╔╝██║   ██║███████╗   ██║   █████╗  ██████╔╝       
              ██║╚██╔╝██║██╔══╝  ██║╚██╔╝██║██╔══╝      ██╔═══╝ ██║   ██║╚════██║   ██║   ██╔══╝  ██╔══██╗       
              ██║ ╚═╝ ██║███████╗██║ ╚═╝ ██║███████╗    ██║     ╚██████╔╝███████║   ██║   ███████╗██║  ██║       
              ╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝    ╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝    
              
              

               ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄ 
              ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
              ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌ ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀      ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌
              ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌▐░▌  ▐░▌               ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌          ▐░▌       ▐░▌
              ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌          ▐░▌░▌   ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌ ▐░▌   ▐░▌▐░▌          ▐░█▄▄▄▄▄▄▄█░▌
              ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░░▌    ▐░░░░░░░░░░░▌     ▐░▌          ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░▌          ▐░░░░░░░░░░░▌
              ▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌▐░▌          ▐░▌░▌   ▐░█▀▀▀▀▀▀▀▀▀      ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░▌   ▐░▌ ▐░▌▐░▌          ▐░█▀▀▀▀▀▀▀█░▌
              ▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌          ▐░▌▐░▌  ▐░▌               ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌▐░▌          ▐░▌       ▐░▌
              ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌          ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌
              ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌▐░░░░░░░░░░░▌     ▐░▌          ▐░▌          ▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
               ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀    ▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀            ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ 
                                                                                                                                                             
`;
  return (
    <div
      style={{ lineHeight: "normal" }}
      className="whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: name }}
    />
  );
}
