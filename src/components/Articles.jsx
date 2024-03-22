import {data} from "../data/articles.js";
import { fetchArticles, urlFor } from "../sanity/sanity-utils.js";
import {useEffect, useState} from "react";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles()
        .then((data) => setArticles(data))
        .catch(console.error())
    }, [])
    

    return (
    <div className="py-12 lg:py-16">
        <div className="p-6 md:p-0 md:w-4/5 mx-auto">
            <h2 className="text-darkBlue text-3xl mb-8">Latest Articles</h2>

            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-4">
                {
                    articles.length > 0 &&
                    articles.map((article) => {
                        const {heading, text, author, image, _id} = article;
                        return (
                            <div key={_id} className="bg-white rounded-sm shadow-sm overflow-hidden">
                                <img className="w-full aspect-[1/.7] md:aspect-[1/.8]" src={urlFor(image).url()} alt={heading} />
                                <section className=" p-6 md:p-4">
                                    <p className="text-xs opacity-90">By {author}</p>
                                    <h3 className="text-darkBlue text-lg line100 my-2 cursor-pointer hover:text-limeGreen transition-all">{heading}</h3>
                                    <p className="text-sm">{text}</p>
                                </section>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    </div>
  )
}

export default Articles