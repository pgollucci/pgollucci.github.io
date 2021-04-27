import React, { ReactElement } from "react";

// export async function getStaticProps() {
//   const articles: ArticleProps[] = [
//     { title: '', blurb: '', categories: [ 1 ], url: '#' }
//   ];

//   return { props: { articles } }
// }

export interface ArticleProps {
  url?: string,
  image?: string,
  alt?: string,
  title: string,
  blurb: string,
  categories: number[],
}

// const Article = (article: ArticleProps): ReactElement => {
//   return (
//     <div className="flex flex-col w-full overflow-hidden rounded-lg shadow-lg">
//       <div className="flex-shrink-0">
//         <a href={article.url}>
//           <div className="object-cover h-48 bg-gray-500"></div>
//         </a>
//       </div>
//       <div className="flex flex-col justify-between flex-1 p-6 bg-white">
//         <div className="flex-1">
//           <a href={article.url} className="block">
//             <h3 className="mt-2 text-sm font-semibold leading-7 text-gray-900">
//               {article.title}
//             </h3>
//             <p className="mt-3 text-base leading-6 text-gray-500">
//               {article.blurb}
//             </p>
//           </a>
//         </div>
//         {/* <div className="mt-4">
//             {
//                 article.categories.map(category =>
//                     <span key={category} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800 mr-2">
//                         {category}
//                     </span>
//                 )
//             }
//           </div> */}
//         </div>
//       </div>
//     )
// };

const News = (): ReactElement => (
  <div className="grid max-w-lg gap-5 mx-auto mt-0 lg:grid-cols-3 lg:max-w-none">
    { /*
      props.articles.map((article: ArticleProps) => (
      <Article title={article.title} blurb={article.blurb} categories={article.categories} />
      ))
      */}
  </div>
)

export default News;