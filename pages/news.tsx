import 'tailwindcss/tailwind.css'

import React, { ReactElement } from "react"

import Layout from '../components/Layout';
import News from '../components/News';

const Index = (): ReactElement => (
  <Layout>
    <News />
  </Layout>
)

export default Index;

// export async function getStaticProps() {
//   const articles: ArticleProps[]  = [  ];

//   return { props: { articles } }
// }
