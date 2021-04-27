import React, { ReactElement } from "react"

import News from './News';
import Profile from './Profile';
import Pitch from './Pitch';
import Banner from './Banner';

const Home = (): ReactElement =>(
  <>
    <main>
      <div className="flex flex-col">
        <div>
          <Banner />
        </div>
        <div className="flex flex-col m-8">
          <div className="flex flex-row">
            <div className="flex w-1/2 m-4 h-72">
              <Profile />
            </div>
            <div className="flex w-1/2 m-4">
              <Pitch />
            </div>
          </div>
          <div className="mt-8">
            <News />
          </div>
        </div>
      </div>
    </main>
  </>
)

export default Home;
