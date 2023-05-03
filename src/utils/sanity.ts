// import SanityClient from 'next-sanity-client';
// import { env } from '~/env.mjs';



// const client = new SanityClient({
//   projectId:env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset:"production",
//   useCdn: process.env.NODE_ENV === 'production',
// })


// export const fetch = async (query:string) => {
//  return await client.fetch({
//     query,
//     config:{
//       cache:"force-cache",
//       next:{revalidate:60}
//     }
//   })
// }
