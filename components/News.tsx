import React, { ReactElement } from "react";

const articles: ArticleProps[] = [
    { url: 'https://dev.to/aws-builders/projen-the-next-cdk-suprise-13b2', src: '/pj.png', title: 'Projen: The Next CDK Surprise!', blurb: 'State of the Union Why projen That\'s a really good question, isn\'t it? After all, there is a new templator or scaffolder practically daily.', categories: [ 1, 5, 34 ] },
    { src: '/pj.png', title: 'Est elit et irure ullamco aliqua anim anim commodo irure id sint fugiat quis ea.', blurb: 'Exercitation cupidatat dolore et occaecat proident.', categories: [ 19 ] },
    { src: '/pj.png', title: 'Id laborum ex qui dolor voluptate sint in pariatur ea.', blurb: 'Quis ullamco pariatur laborum non occaecat.', categories: [ 80, 81, 82 ] },
    { src: '/pj.png', title: 'Id laborum ex qui dolor voluptate sint in pariatur ea.', blurb: 'Quis ullamco pariatur laborum non occaecat.', categories: [ 80, 81, 82 ] },
];

export interface ArticleProps {
  url?: string,
  src?: string,
  alt?: string,
  title: string,
  blurb: string,
  categories: number[],
}

const Article = (article: ArticleProps): ReactElement => {
  return (
    <div className="flex flex-col w-full overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0 h-48 ml-20">
        <a href={article.url}><img className="h-48" src={article.src} /></a>
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <a href={article.url} className="block">
            <h3 className="prose-lg">{article.title}</h3>
            <p className="mt-3 text-base leading-6 text-gray-500">{article.blurb}</p>
          </a>
        </div>
        {<div className="mt-4">
            {article.categories.map(category =>
              <span key={category} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800 mr-2">
                {category}
              </span>)}
          </div>}
        </div>
      </div>
    )
};

const News = (): ReactElement => (
  <div className="grid max-w-lg gap-5 mx-auto mt-0 lg:grid-cols-4 lg:max-w-none">
    {
      articles.map((article: ArticleProps) => (
        <Article key={article.title} src={article.src} title={article.title} blurb={article.blurb} url={article.url} categories={article.categories} />
      ))
      }
  </div>
)

export default News;