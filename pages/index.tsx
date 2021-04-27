import 'tailwindcss/tailwind.css'
import React, { ReactElement } from "react"
import Layout from '../components/Layout';
import Home from '../components/Home';

const Index = (): ReactElement => (
  <Layout>
    <Home />
  </Layout>
)

export default Index;
