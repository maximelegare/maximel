export type Query = "projects" | "categories";

const getQuery = (query: Query, lang: string) => {
  switch (query) {
    case "projects": {
      return `*[_type == "project"] | order(position asc){
          _id,
          title,
          styles,
          headline{
            ${lang}[]{
              style,
              children[]{
                text,
                 marks
                },
                "imageUrl":asset->url
              }
            },
          "slug":slug.current,
          overview{
            ${lang}[]{
              style,
              children[]{
                text,
                 marks
                },
                "imageUrl":asset->url
              }
            },
            overviewCard{
              image{
                "imageUrl":asset->url,
                alt,
                imagePadding
              },
              text{
              fr[]{
                style,
                children[]{
                  text,
                   marks
                  },
                }
              }
            },
          body{
            ${lang}[]{
            style,
            children[]{
              text,
              marks
              },
              "imageUrl":asset->url
            }
          },
          logo{
            "imageUrl":asset->url,
             alt
            },
          images[]{
            "imageUrl":asset->url,
            alt,
            bigImage
          },
          technologies[]->{
            "imageUrl": image.asset->url,
             title
            }, 
          links[]{
            href,
            type
            },
        }`;
    }
    case "categories": {
      return `*[_type == "category"] | order(position asc){
        _id,
        styles,
        title,
        headline{
          ${lang}[]{
            style,
            children[]{
              text,
              marks
            }
          }
        },
        "slug":slug.current,
        image{"imageUrl":asset->url, alt},
        projects[]->{
          _id,
          title,
          styles,
          headline{
            ${lang}[]{
              style,
              children[]{
                text,
                marks
              }
            }
          },
          
        "slug":slug.current,
        overview{
          ${lang}[]{
                style,
                children[]{
                  text,
                  marks
                }
              }
          },
        body{
          ${lang}[]{
            style,
            children[]{
              text,
              marks
              }
            }
          },
        logo{
          "imageUrl":asset->url,
            alt
        },
        images[]{
          "imageUrl":asset->url,
          alt,
          bigImage
        },
        technologies[]->{
          "imageUrl": image.asset->url,
          title
        }, 
        links[]{
          href, type
          },
        },
        photographs[]->{
          "src":photography.asset->url,
           "alt":photography.alt,
           "height":photography.height,
           "width":photography.width
          },
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
