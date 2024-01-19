import ProgrammerImage from '/assets/programmer.png';

export function About() {
  return (
    <section id="about" className='w-full h-screen flex md:justify-center md:items-center bg-gray-50'>
      <div className='my-0 mx-auto flex flex-col lg:flex-row items-center h-full md:h-3/4 md:justify-evenly md:items-center '>
        <div className='w-full md:w-3/4 lg:w-2/5 p-4'>
          <h1 className='text-xl md:text-3xl font-bold mb-2'>Sou um desenvolvedor full stack apaixonado por tecnologia e inovação. Sou uma pessoa proativa, 
            esforçada e organizada.</h1>
          <p className="text-base md:text-2xl md:text-1xl text-justify text-black">
            Com habilidades sólidas de trabalho em equipe, reconheço a importância 
            da colaboração e estou sempre pronto para contribuir de forma eficaz, buscando constantemente desafios 
            que impulsionem meu crescimento profissional. Atualmente estudante de Sistemas e Mídias Digitais na 
            Universidade Federal do Ceará, estou empenhado em aprender e crescer.
          </p>
        </div>

        <div className='w-3/4 lg:w-1/3'>
          <img src={ProgrammerImage} alt="programador pensando com códigos ao fundo" />
        </div>
      </div>
    </section>
  );
}