export function Banner() {
  return (
    <section id="banner" className='w-full h-screen bg-glasses-sm md:bg-glasses bg-no-repeat bg-center flex items-center'>
      <div className='my-0 mx-auto flex lg:w-9/12 h-full md:h-3/5 justify-center md:justify-start items-center md:items-start'>
        <div className='w-full md:w-4/5 h-4/5 lg:3/5 p-6 md:p-4 flex flex-col justify-evenly items-start'>
          <div className="">
            <h1 className="text-white text-4xl md:text-4xl font-bold overflow-hidden whitespace-nowrap animate-type">
              Prazer,<br className="md:hidden"/> me chamo<br className="md:hidden"/> Afonso Mateus.
            </h1>
            <p className="text-lg mt-4 md:mt-6 md:text-xl text-justify text-white">
              Minha experiência inclui trabalhar em projetos diversos e utilizar tecnologias como React, React Native, Java, 
              Node, Django e bancos de dados como PostgreSQL, MySQL e MongoDB, 
              além de familiaridade com Docker e Linux.
            </p>
          </div>

          <button className="flex justify-between p-6 rounded-3xl items-center h-9 w-60 bg-white">
            <img className="h-7 w-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            <span className="text-lg">Entre em contato</span>
          </button>
        </div>
      </div>
    </section>
  );
}