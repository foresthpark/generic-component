import Link from "next/link";
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
                       
               
                                                                                                                      ███╗   ██╗███████╗██╗  ██╗████████╗    ██╗ ██╗  
                                                                                                                      ████╗  ██║██╔════╝╚██╗██╔╝╚══██╔══╝    ╚██╗╚██╗ 
                                                                                                                      ██╔██╗ ██║█████╗   ╚███╔╝    ██║        ╚██╗╚██╗
                                                                                                                      ██║╚██╗██║██╔══╝   ██╔██╗    ██║        ██╔╝██╔╝
                                                                                                                      ██║ ╚████║███████╗██╔╝ ██╗   ██║       ██╔╝██╔╝ 
                                                                                                                      ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝   ╚═╝       ╚═╝ ╚═╝  
                                                               
`;

  const people = [
    {
      name: "Forest Park",
      role: "Chief Procrastination Officer",
      company: "Rocket Punch",
      imageUrl: "https://coffee.forestp.dev/images/image.png",
      bio: `"I watch cat videos all day"`,
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    // More people...
  ];

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
        {/* <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About the team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div> */}
        <ul role="list" className="space-y-12">
          {people.map((person) => (
            <div
              key={person.name}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <img
                className="aspect-[4/5] w-[450px] flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="max-w-3xl">
                <h3 className="text-4xl font-semibold leading-8 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="text-base font-bold leading-7 text-gray-900">
                  {person.company}
                </p>
                <p className="mt-10 text-base leading-7 text-gray-600">
                  <Link
                    href="/about2"
                    className="text-base font-semibold text-gray-900"
                  >
                    <span className="pt-10">
                      Next <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
    // <Link href="/about2">
    //   <div
    //     style={{ lineHeight: "normal" }}
    //     className="h-screen whitespace-pre-wrap bg-white text-gray-900"
    //     dangerouslySetInnerHTML={{ __html: name }}
    //   />
    // </Link>
  );
}
