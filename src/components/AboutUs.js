const AboutUs = () => {
  return (
    <section className='flex flex-col items-center h-[100vh]'>
      <section className='max-w-[80.313em] mx-auto flex flex-col gap-3 text-center'>
        <span className='uppercase tracking-[4px] text-[#DFBF76] text-[1.125rem] font-light'>
          About us
        </span>
        <h2 className='text-[2rem] font-semibold'>
          Welcome to Implant Art Dental Clinic
        </h2>
        <p className='max-w-[40rem]'>
          At our clinic, we combine experience and knowledge to deliver
          exceptional, patient-focused care. We offer top-quality services at
          reasonable prices because we believe that every patient is unique.
          That&apos;s why we customize treatment plans tailored to individual
          needs, ensuring the best possible care for every patient who walks
          through our doors.
        </p>
      </section>
    </section>
  );
};

export default AboutUs;
