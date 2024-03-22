import mobileMockUp from '../assets/image-mockups.png';
import { fetchHeroContent } from '../sanity/sanity-utils';
import { useEffect, useState } from 'react';
import { easeIn, motion } from "framer-motion";

const Hero = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetchHeroContent()
        .then((data) => setContent(data))
        .catch(console.error())
    }, [])

    return (
    <div className='w-full hero'>
        <motion.section 
        initial={{y:200}}
        animate={{y:0}}
        transition={{ease: easeIn, duration: 1.2}
        }
        className=" md:flex md:h-[85vh] md:gap-8 mx-auto flex-row-reverse">
            <div className="w-[100vw] aspect-[1/.8] md:w-auto md:aspect-[0/0] mb-8 md:flex-1 md:h-auto relative ">
                <img className='hidden md:block mock-desktop' src={mobileMockUp} alt="mobile mock up" />
                <img className='md:hidden mock-mobile'  src={mobileMockUp} alt="mobile mock up" />
            </div>
            <div className="p-4 md:p-0 flex-1 flex items-center  md:ml-[10vw]">
                <article className='md:max-w-[80%] text-center md:text-left'>
                    <h2 className="text-darkBlue text-3xl md:text-4xl lg:text-5xl">
                        {/* Next generation digital banking */}
                        {content.length > 0 && content[0].heading}
                    </h2>
                    <p className="text-grayishBlue my-4">
                    {/* Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more. */}
                    {content.length > 0 && content[0].text}
                    </p>
                    <button className="px-8 rounded-full text-base font-bold text-white">Request Invite</button>
                </article>
            </div>
        </motion.section>
    </div>
  )
}

export default Hero