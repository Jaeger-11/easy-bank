import {createClient} from "@sanity/client";

export const client =  createClient({
    projectId: 'li3dccow',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-03-21'
})