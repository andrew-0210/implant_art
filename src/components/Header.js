import { AiFillPhone } from 'react-icons/ai';
const Header = () => {
  return (
    <header className='flex flex-col justify-center  h-[100vh]'>
      <section className='min-w-[80.313em] mx-auto flex flex-col gap-[2rem]'>
        <div className='flex flex-col gap-4'>
          <span className='uppercase tracking-[4px] text-[#DFBF76] text-[1.25rem] font-medium'>
            Revolutionising Implantology
          </span>
          <h1 className='text-[3rem] font-semibold w-[40rem] leading-tight'>
            Personalised Solutions for All Your Oral Health Needs
          </h1>
          <p className='w-[29rem]'>
            At Implant Art Clinic, our commitment lies in offering a dental
            experience that stands apart from the rest.
          </p>
        </div>
        <section className='flex gap-3'>
          <button className='py-[0.75rem] px-[2rem] bg-[#DFBF76] text-[#000] font-semibold hover:bg-[#fff] hover:text-[#000] min-w-[12rem]'>
            Book now
          </button>
          <button className='py-[0.75rem] px-[2rem] border flex items-center gap-2 hover:bg-[#DFBF76] hover:text-[#000] font-semibold min-w-[12rem]'>
            <AiFillPhone className='rotate-90' />
            0423 416 016
          </button>
        </section>
      </section>
    </header>
  );
};

export default Header;
