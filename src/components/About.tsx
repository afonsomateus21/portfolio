import ProgrammerImage from '../assets/programmer-image.png';

export function About() {
  return (
    <section className='w-full lg:w-4/5 my-0 mx-auto p-5 lg:p-0 flex flex-col lg:flex-row '>
      <div className='h-auto w-full lg:w-6/12 px-0 lg:px-5 flex flex-col justify-center'>
        <h1 className="lg:text-2xl md:text-3xl text-xl font-bold text-black overflow-hidden whitespace-nowrap animate-type">Prazer, me chamo Afonso Mateus.</h1>
        <p className="mt-4 text-2xl text-justify text-black">
          Sou um desenvolvedor full stack com paixão por tecnologia e inovação. 
          Atualmente estudante de Sistemas e Mídias Digitais na Universidade Federal do Ceará, estou empenhado em aprender e crescer. 
          Minha experiência inclui trabalhar em projetos diversos e utilizar tecnologias como React, React Native, Java, Node, Django e bancos de dados como PostgreSQL, MySQL e MongoDB. 
          Além disso, estou familiarizado com Docker e Linux. 
          Estou entusiasmado para enfrentar desafios e colaborar em projetos que contribuam para meu crescimento como desenvolvedor.
        </p>
      </div>

      <div className="w-full lg:w-6/12 flex justify-center items-center">
        <img className='w-full h-full md:h-4/5 mt-10 lg:mt-0' src={ProgrammerImage} alt="Ilustração pessoa programando" />
      </div>
    </section>
  );
}