const content = [
  {
    offer_name: 'Free Consultation',
    description:
      'Let us start your journey to that perfect smile you deserve when you call Dentistry on Solent now!',
    price_quote: 'Braces starts at',
    price: '$5999',
  },
  {
    offer_name: 'Free Dental Implant Consultation',
    description: 'Get the dazzling smile you have always dreamed of!',
    price_quote: 'Implant and Crown complete package starts at',
    price: '$3999',
  },
  {
    offer_name: 'Want a Whiter Brighter Smile?',
    description:
      'For a limited time only, enjoy an affordable ZOOM teeth whitening. We offer you the latest cosmetic whitening technology.',
    price_quote: 'starts at',
    price: '$699',
  },
  {
    offer_name: 'Special Promo!',
    description: 'Check-up and Clean Scale, Polish Flouride Cancer Screening',
    price_quote: 'starts at',
    price: '$199',
  },
];

const Offers = () => {
  return (
    <section className='max-w-[80.313em] mx-auto text-center py-[2rem] gap-[2rem] flex flex-col'>
      <h2 className='text-[2rem] font-semibold'>Offers</h2>
      <section className='flex gap-4 flex-1'>
        {content.map(desc => {
          return (
            <div
              key={desc.offer_name}
              className='flex flex-col flex-1 rounded-[1.25rem] bg-[#FFF2EE] text-[#333] overflow-clip gap-[1.5rem] pb-[1.5rem] '
            >
              <div className='flex flex-col gap-[1.5rem] flex-1'>
                <div className='bg-[#33353D] text-[#fff] py-[1.5rem] px-[1.5rem] flex items-center justify-center min-h-[7.125rem]'>
                  <span className='uppercase text-center font-semibold text-[1.25rem]'>
                    {desc.offer_name}
                  </span>
                </div>
                <div className='flex flex-col justify-between flex-1'>
                  <div className='px-[1.5rem]'>
                    <p className='text-[1.125rem]'>{desc.description}</p>
                  </div>
                  <div className='flex flex-col items-end'>
                    <div className='pr-[1.5rem] max-w-[173px]'>
                      <p className='text-end'>{desc.price_quote}</p>
                    </div>
                    <div className='px-[1.5rem] py-[0.75rem] bg-[#d89b8b] text-[#fff] rounded-l-full'>
                      <p className='text-end font-bold text-[2rem]'>
                        {desc.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-[1.5rem] '>
                <button className='bg-[#33353D] text-[#fff] rounded-full py-[1rem] uppercase w-full'>
                  Book Online Today!
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <div>
        <button className='bg-[#33353D] text-[#fff] rounded-full px-[2rem] py-[1rem] uppercase '>
          View More Offers
        </button>
      </div>
    </section>
  );
};

export default Offers;
