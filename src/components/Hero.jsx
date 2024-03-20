import mobileMockUp from '../assets/image-mockups.png';

const Hero = () => {
  return (
    <div className='w-full hero'>
        <section className=" md:flex md:h-[85vh] md:gap-8 mx-auto flex-row-reverse">
            <div className="w-[100vw] aspect-[1/.8] md:w-auto md:aspect-[0/0] mb-8 md:flex-1 md:h-auto relative ">
                <img className='hidden md:block mock-desktop' src={mobileMockUp} alt="mobile mock up" />
                <img className='md:hidden mock-mobile'  src={mobileMockUp} alt="mobile mock up" />
            </div>
            <div className="p-4 md:p-0 flex-1 flex items-center  md:ml-[10vw]">
                <article className='md:max-w-[80%] text-center md:text-left'>
                    <h2 className="text-darkBlue text-3xl md:text-4xl lg:text-5xl">Next generation digital banking</h2>
                    <p className="text-grayishBlue my-4">
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                    </p>
                    <button className="px-8 rounded-full text-base font-bold text-white">Request Invite</button>
                </article>
            </div>
        </section>
    </div>
  )
}

export default Hero