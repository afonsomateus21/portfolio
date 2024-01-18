export function Technologies() {
  const Links = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
  ]

  return (
    <section id="technologies" className="bg-blue-50 p-16 h-screen">
      <div className="w-full h-full lg:w-4/5 my-0 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">TECNOLOGIAS</h1>
        
        <div className='flex justify-center'>
          <div className='grid grid-rows-4 md:grid-rows-3 grid-flow-col gap-10 p-10'>
            {
              Links.map( (link, index) => 
                <div key={index} className="w-16 h-16 md:w-28 md:h-28">
                  <img src={link} />
                </div>  
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}