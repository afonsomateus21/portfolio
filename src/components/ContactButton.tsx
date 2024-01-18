interface ContactButtonInterface {
  image: string;
  link: string;
}

export function ContactButton({ image, link } : ContactButtonInterface) {
  return (
    <a href={link} target="_blank">
      <div className='flex justify-center items-center rounded-full w-14 h-14 bg-white'>
        {/* <i className={`${image} text-4xl`}></i> */}
        <img src={`${image}`} className="h-9 w-9" />
      </div>
    </a>
  );
}