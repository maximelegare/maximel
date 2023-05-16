export type Query = "products" 

const getQuery = (query: Query, lang: string) => {
    switch (query) {
      case "products": {
        return `*[_type == "project"] | order(position asc){
          _id,
          title,
          styles,
          headline{text{fr[]{
            style, children[]{text, marks}
          }}, hasBoldText},
          "slug":slug.current,
          overview,
          body,
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
  