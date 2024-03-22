const heroContent = {
    title: 'HeroContent',
    name: 'heroContent',
    type: 'document',
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'string'
        }
    ]
}

const aboutHeader = {
    title: 'AboutHeader',
    name: 'aboutHeader',
    type: 'document',
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'string'
        }
    ]
}

const services = {
    title: 'Services',
    name: 'services',
    type: 'document',
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'string'
        },
        {
            title: 'Icon',
            name: 'icon',
            type: 'image',
            options: {hotspot:true},
            fields: [
                {
                    title: 'Alt',
                    name: 'alt',
                    type: 'string'
                }
            ]
        }
    ]
}

const articles = {
    title: 'Articles',
    name: 'articles',
    type: 'document',
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'string'
        },
        {
            title: 'Author',
            name: 'author',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    title: 'Alt',
                    name: 'alt',
                    type: 'string'
                }
            ]
        }
    ]
}

export const schemaTypes = [heroContent, aboutHeader, services, articles];
