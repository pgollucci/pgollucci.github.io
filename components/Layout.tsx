import React, { ReactNode } from "react"
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) =>(
  <>
    <Header />
    <div className="flex min-h-screen lg:flex-col sm:flex-row">
      <div>
        <Nav />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex-grow mt-4 ml-4">
          {children}
        </div>
        <div className="flex w-full h-28">
          <Footer />
        </div>
      </div>
    </div>
  </>
)

export default Layout;