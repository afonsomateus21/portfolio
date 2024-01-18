import { ImageLinks } from "../constants/links";

export function Technologies() {
  return (
    <section id="technologies" className="bg-blue-50 p-16 h-screen">
      <div className="w-full h-full lg:w-4/5 my-0 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">TECNOLOGIAS</h1>
        
        <div className='flex justify-center'>
          <div className='grid grid-rows-4 md:grid-rows-3 grid-flow-col gap-10 p-10'>
            {
              ImageLinks.map( (link, index) => 
                <div key={index} className="w-36 h-16 md:w-28 md:h-28 md:hover:w-32 hover:opacity-50">
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