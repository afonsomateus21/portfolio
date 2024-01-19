interface ContactButtonInterface {
  image: string;
  link: string;
}

export function ContactButton({ image, link } : ContactButtonInterface) {
  return (
    <a href={link} target="_blank">
      <div className='flex justify-center items-center rounded-full w-16 h-16 bg-white hover:opacity-75'>
        <img src={`${image}`} className="h-9 w-9" />
      </div>
    </a>
  );
}