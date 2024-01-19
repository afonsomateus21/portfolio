import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "/assets/logo-company.png";
import { Links } from "../constants/links";
import { Link } from "react-scroll";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='shadow-md w-full h-24 fixed top-0 left-0 bg-black'>
      <div className='lg:w-9/12 lg:my-0 lg:mx-auto md:flex items-center justify-between  py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Roboto] text-white'> 
          <img className="w-16 h-16 md:w-20 md:h-20" src={Logo} alt="Logo do portfolio" />
        </div>
        
        <div onClick={ () => setOpen(!open) } className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <IconContext.Provider value={{ color: 'white', className: 'global-class-name' }}>
            <AiOutlineMenu />
          </IconContext.Provider>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 bg-black':'top-[-490px]'}`}>
          {
            Links.map((item, index)=>(
              <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
                <Link 
                  to={item.link} 
                  smooth={true}
                  duration={1200}
                  className='text-white font-[Roboto] hover:text-gray-400 duration-500 cursor-pointer'>
                    {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  );
}