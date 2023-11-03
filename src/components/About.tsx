import ProgrammerImage from '../assets/programmer-image.png';

export function About() {
  return (
    <section className='md:w-9/12 my-0 mx-auto p-8 flex flex-col lg:flex-row lg:items-start items-center'>
      <div className='w-full md:w-4/5'>
        <h1 className="md:text-6xl text-3xl text-black">Prazer, me chamo Afonso Mateus.</h1>
        <p className="mt-4 text-lg text-justify text-black">
          Sou um desenvolvedor full stack com paixão por tecnologia e inovação. 
          Atualmente estudante de Sistemas e Mídias Digitais na Universidade Federal do Ceará, estou empenhado em aprender e crescer. 
          Minha experiência inclui trabalhar em projetos diversos e utilizar tecnologias como React, React Native, Java, Node, Django e bancos de dados como PostgreSQL, MySQL e MongoDB. 
          Além disso, estou familiarizado com Docker e Linux. 
          Estou entusiasmado para enfrentar desafios e colaborar em projetos que contribuam para meu crescimento como desenvolvedor.
        </p>
      </div>

      <img className='w-full h-72 md:w-5/6 md:h-3/6 mt-10 lg:mt-0' src={ProgrammerImage} alt="Ilustração pessoa programando" />
    </section>
  );
}