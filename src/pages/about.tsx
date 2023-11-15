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
      company: "Vizzn",
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
        <ul role="list" className="space-y-12">
          {people.map((person) => (
            <div
              key={person.name}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <img
                className="aspect-[4/5] max-w-xs flex-none rounded-2xl object-cover"
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
                    <span className="pt-10 text-2xl">
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
  );
}
