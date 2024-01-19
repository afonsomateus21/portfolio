import LogoCompany from '../assets/logo-company.png';
import { Links, SocialMediaLinks } from '../constants/links';
import { ContactButton } from './ContactButton';

export function Footer() {
  return (
    <footer className="bg-black py-8 md:py-16">
      <div className='flex flex-wrap justify-center md:justify-evenly items-center'>
        <img src={LogoCompany} alt="Logo da empresa" className='w-28 h-28 mb-4 md:mb-0 md:mr-8'/>

        <div className='w-full md:w-60 mb-8 md:mb-0 flex flex-col items-center'>
          <h2 className='text-white text-lg font-bold text-center mb-4 md:mb-8'>Minhas redes sociais</h2>
          <div className='flex justify-evenly md:justify-between items-center w-full md:w-80'>
            {
              SocialMediaLinks.map((item, index) => (
                <ContactButton
                  key={index}
                  image={item.image}
                  link={item.link}
                />
              ))
            }
          </div>
        </div>

        <div className='w-full md:w-56 mb-4 md:mb-0'>
          <h2 className='text-white text-lg font-bold text-center'>Navegação</h2>
          <div className='flex flex-col items-center'>
            {
              Links.map((item, index) => (
                <a key={index} href={item.link}><span className='text-white'>{item.name}</span></a>
              ))
            }
            
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