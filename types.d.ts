type Meta = {
    id: string,
    title: string,
    date: string,
    desc: string,
    tags: string[],
    img: string,
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}