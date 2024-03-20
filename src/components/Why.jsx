import { data } from "../data/why";

const Why = () => {
  return (
    <div className="mt-6 md:mt-0 bg-lightGrayishBlue">
        <div className="p-4 text-center md:w-4/5 mx-auto py-16 md:text-left">
            <article>
                <h2 className="text-3xl lg:text-3xl text-darkBlue mb-4 px-4 md:px-0">Why choose Easybank?</h2>
                <p className="lg:w-3/5">
                    We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
                </p>
            </article>

            <section className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-4">
                {
                    data.map((item) => {
                        const {title, text, icon} = item;
                        return (
                        <article className="flex flex-col gap-3 items-center md:items-start">
                            <img className="w-1/5" src={icon} alt="online banking" />
                            <h3 className="text-xl text-darkBlue">{title}</h3>
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