const getQuery = (type: string, lang: string) => {
    switch (type) {
      case "products": {
        return `*[_type == "project"]{
          _id,
          title,
          subtitle,
          slug,
          overview,
          body,
          logo{"imageUrl":asset->url},
          images[]{"imageUrl":asset->url},
          technologies[]->{"imageUrl": image.asset->url, title}
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
  
  