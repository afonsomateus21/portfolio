export function About() {
  return (
    <section className='w-full h-screen bg-glasses-sm md:bg-glasses bg-no-repeat bg-center'>
      <div className='my-0 mx-auto flex h-full md:h-3/4 justify-center items-center '>
        <div className='w-full md:w-3/4 lg:w-2/5 p-4'>
          <h1 className="text-white md:text-3xl text-lg font-bold overflow-hidden whitespace-nowrap animate-type">Prazer, me chamo Afonso Mateus.</h1>
          <hr className="my-5" />
          <p className="text-xl md:text-3xl text-justify text-white">
            Sou um desenvolvedor full stack com paixão por tecnologia e inovação. 
            Atualmente estudante de Sistemas e Mídias Digitais na Universidade Federal do Ceará, estou empenhado em aprender e crescer. 
            Minha experiência inclui trabalhar em projetos diversos e utilizar tecnologias como React, React Native, Java, Node, Django e bancos de dados como PostgreSQL, MySQL e MongoDB. 
            Além disso, estou familiarizado com Docker e Linux. 
            Estou entusiasmado para enfrentar desafios e colaborar em projetos que contribuam para meu crescimento como desenvolvedor.
          </p>
        </div>
      </div>
    </section>
  );
}