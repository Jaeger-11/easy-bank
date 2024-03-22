import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}

export const fetchHeroContent = () => {
    return client.fetch(
        `
        *[_type == "heroContent"]{
            _id,
            heading,
            text
        }
        `
    )
}

export const fetchAboutHeaderContent = () => {
    return client.fetch(
        `
        *[_type == "aboutHeader"]{
            _id,
            heading,
            text
        }
        `
    )
}

export const fetchServices = () => {
    return client.fetch(
        `
        *[_type == "services"]{
            _id,
            heading,
            text,
            icon{
                asset->{
                _id,
                url
                }
            }
        }
        `
    )
}

export const fetchArticles = () => {
    return client.fetch(
        `
        *[_type == "articles"]{
            _id,
            heading,
            text,
            author,
            image{
                asset->{
                    _id,
                    url
                }
            }
        }
        `
    )
}