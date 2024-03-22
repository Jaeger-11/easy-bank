import { data } from "../data/why";
import { fetchServices, fetchAboutHeaderContent, urlFor } from "../sanity/sanity-utils";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 

const Why = () => {
    const [header, setHeader] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetchAboutHeaderContent()
        .then((data) => setHeader(data))
        .catch(console.error())

      fetchServices()
        .then((data) => setServices(data))
        .catch(console.error())
    }, [])
    
    return (
    <div className="mt-6 md:mt-0 bg-lightGrayishBlue">
        <div className="p-4 text-center md:w-4/5 mx-auto py-16 md:text-left">
            <article>
                <h2 className="text-3xl lg:text-3xl text-darkBlue mb-4 px-4 md:px-0">
                    {/* Why choose Easybank? */}
                    {header.length > 0 && header[0].heading}
                </h2>
                <p className="lg:w-3/5">
                    {/* We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before. */}
                    {header.length > 0 && header[0].text}
                </p>
            </article>

            <section className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-4">
                {
                    services.length > 0 &&
                    services.map((item) => {
                        const {heading, text, icon, _id} = item;
                        return (
                        <article key={_id} className="flex flex-col gap-3 items-center md:items-start">
                            <img className="w-1/5" src={urlFor(icon).url()} alt={heading} />
                            <h3 className="text-xl text-darkBlue">{heading}</h3>
                            <p className="text-sm">{text}</p>
                        </article>
                        )
                    })
                }
            </section>
        </div>
    </div>
  )
}

export default Why;