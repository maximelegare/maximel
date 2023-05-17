export type Query = "products";

const getQuery = (query: Query, lang: string) => {
  switch (query) {
    case "products": {
      return `*[_type == "project"] | order(position asc){
          _id,
          title,
          styles,
          headline{${lang}[]{
            style, children[]{text, marks}
          }},
          "slug":slug.current,
          overview{${lang}[]{
            style, children[]{text, marks}
          }},
          body{${lang}[]{
            style, children[]{text, marks}
          }},
          logo{"imageUrl":asset->url, alt},
          images[]{"imageUrl":asset->url, alt, bigImage},
          technologies[]->{"imageUrl": image.asset->url, title}, 
          links[]{href, type},
        }`;
    }
    default: {
      return `*[_type == "product" ]{
              _id, 
            }`;
    }
  }
};

export { getQuery };
