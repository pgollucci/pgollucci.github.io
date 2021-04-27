import 'tailwindcss/tailwind.css'
import React, { ReactElement } from "react"
import Layout from '../components/Layout';
import About from '../components/About';

const Index = (): ReactElement => (
  <Layout>
    <About />
  </Layout>
)

export default Index;
