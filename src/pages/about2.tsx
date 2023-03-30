import Link from "next/link";
import React from "react";

export default function AboutPage() {
  const name = `
   ██████╗ ███████╗███╗   ██╗███████╗██████╗ ██╗ ██████╗    ████████╗██╗   ██╗██████╗ ███████╗███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
  ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██║██╔════╝    ╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
  ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝██║██║            ██║    ╚████╔╝ ██████╔╝█████╗  ███████╗██║     ██████╔╝██║██████╔╝   ██║   
  ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██║██║            ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   
  ╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║╚██████╗       ██║      ██║   ██║     ███████╗███████║╚██████╗██║  ██║██║██║        ██║   
   ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝       ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   
                                                                                                                                                                                                             
                                                                                                                              
    ███████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗███████╗                                 
    ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝██╔════╝                                 
    ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   ███████╗                                 
    ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║                                 
    ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   ███████║                                 
     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝                                 
                                                                                                      
 

                                                                                                                        
                                                                                                                           
                 ██████╗ ███╗   ██╗███████╗     ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗          
                ██╔═══██╗████╗  ██║██╔════╝    ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝          
                ██║   ██║██╔██╗ ██║█████╗      ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║             
                ██║   ██║██║╚██╗██║██╔══╝      ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║             
                ╚██████╔╝██║ ╚████║███████╗    ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║             
                 ╚═════╝ ╚═╝  ╚═══╝╚══════╝     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝             
                                                                                                                                          
                ████████╗ ██████╗     ██████╗ ██╗   ██╗██╗     ███████╗    ████████╗██╗  ██╗███████╗███╗   ███╗     █████╗ ██╗     ██╗     
                ╚══██╔══╝██╔═══██╗    ██╔══██╗██║   ██║██║     ██╔════╝    ╚══██╔══╝██║  ██║██╔════╝████╗ ████║    ██╔══██╗██║     ██║     
                   ██║   ██║   ██║    ██████╔╝██║   ██║██║     █████╗         ██║   ███████║█████╗  ██╔████╔██║    ███████║██║     ██║     
                   ██║   ██║   ██║    ██╔══██╗██║   ██║██║     ██╔══╝         ██║   ██╔══██║██╔══╝  ██║╚██╔╝██║    ██╔══██║██║     ██║     
                   ██║   ╚██████╔╝    ██║  ██║╚██████╔╝███████╗███████╗       ██║   ██║  ██║███████╗██║ ╚═╝ ██║    ██║  ██║███████╗███████╗
                   ╚═╝    ╚═════╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝       ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝    ╚═╝  ╚═╝╚══════╝╚══════╝
  
   
                                                                        ███████╗████████╗ █████╗ ██████╗ ████████╗    ██╗ ██╗  
                                                                        ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ╚██╗╚██╗ 
                                                                        ███████╗   ██║   ███████║██████╔╝   ██║        ╚██╗╚██╗
                                                                        ╚════██║   ██║   ██╔══██║██╔══██╗   ██║        ██╔╝██╔╝
                                                                        ███████║   ██║   ██║  ██║██║  ██║   ██║       ██╔╝██╔╝ 
                                                                        ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝ ╚═╝  
                                                          

`;
  return (
    <Link href="/">
      <div
        style={{ lineHeight: "normal" }}
        className="h-screen whitespace-pre-wrap bg-gray-900 text-gray-300"
        dangerouslySetInnerHTML={{ __html: name }}
      />
    </Link>
  );
}
