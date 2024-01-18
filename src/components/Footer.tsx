import LogoCompany from '../assets/logo-company.png';
import { ContactButton } from './ContactButton';

export function Footer() {
  return (
    <footer className="bg-black py-8 md:py-16">
      <div className='flex flex-wrap justify-center md:justify-evenly items-center'>
        <img src={LogoCompany} alt="Logo da empresa" className='w-28 h-28 mb-4 md:mb-0 md:mr-8'/>

        <div className='w-full md:w-60 mb-8 md:mb-0'>
          <h2 className='text-white text-lg font-bold text-center mb-4 md:mb-8'>Minhas redes sociais</h2>
          <div className='flex justify-center md:justify-between items-center'>
            <ContactButton
              image='https://img.icons8.com/color/48/whatsapp--v1.png'
              link='https://wa.me/+5585981977456'
            />
            <ContactButton
              image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
              link='https://www.linkedin.com/in/afonsomateus/'
            />
            <ContactButton
              image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
              link='https://github.com/afonsomateus21'
            />
          </div>
        </div>

        <div className='w-full md:w-56 mb-8 md:mb-0'>
          <h2 className='text-white text-lg font-bold text-center mb-4 md:mb-8'>Navegação</h2>
          <div className='flex flex-col items-center'>
            <a href="#banner"><span className='text-white'>INICIO</span></a>
            <a href="#about"><span className='text-white'>SOBRE</span></a>
            <a href="#technologies"><span className='text-white'>TECNOLOGIAS</span></a>
          </div>
        </div>

        <div className='w-full md:w-56 md:mt-8 lg:mt-0'>
          <h2 className='text-white text-lg font-bold text-center mb-4 md:mb-8'>Fontes</h2>
          <div className='flex flex-col items-center'>
            <a href="https://icons8.com"><span className='text-white'>Icons8</span></a>
            <a href="https://devicon.dev/"><span className='text-white'>Devicon</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}