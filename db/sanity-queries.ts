const getQuery = (type: string, lang: string) => {
    switch (type) {
      case "products": {
        return `*[_type == "project"]{
          _id,
          title,
          subtitle,
          "slug":slug.current,
          overview,
          body,
          logo{"imageUrl":asset->url},
          "images":myImage[]->{"imageUrl":asset->url, bigImage, alt},
          technologies[]->{"imageUrl": image.asset->url, "alt":image}
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
  
  