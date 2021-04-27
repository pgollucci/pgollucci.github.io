import React, { ReactElement } from "react"

const About = (): ReactElement =>(
  <>
    <div className="grid grid-flow-row gap-4 mt-8 ml-8 mr-8 lg:grid-rows-2 lg:grid-cols-2">
      <div className="flex flex-col">
        <div className="flex flex-row gap-8 mx-auto">
          <div className=""><img className="h-52 w-52 rounded-2xl" src="/animal.jpg" /></div>
          <div className="my-auto"><img className="h-20" src="/ldar.png" /></div>
        </div>
        <div>
          <div className="mx-auto mt-8 prose-sm prose">
            <h4>Part of a mixed paid/volunteer team responsible for saving cats and dogs all over the world. Over 20k dogs and cats have been saved from over 10 states and 5 countries since 2009.</h4>
            <ul>
              <li>Fostered over 200 dogs.</li>
              <li>Represented Lucky Dog Animal Rescue at AWS Worldwide Public Sector Summit in 2019.</li>
              <li>1st place national fund-raising team for Best Friends Society.</li>
              <li>National crisis response to all US hurricanes in 2018.</li>
              <li>Puerto Rico earthquake response in 2019: 14,000 pounds of food & water, and rescue of 78 dogs.</li>
              <li>Puerto Rico COVID-19 2020 foster & recuse of 62 dogs.</li>
              <li>Traveled to Puerto Rico, Thailand, and Hawaii (for Kauai Humane Society) rescuing animals from high kill shelters.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-96">
        2
      </div>
      <div className="h-96">
        3
      </div>
      <div className="h-96">
        4
      </div>
    </div>
  </>
)

export default About;

    {/* 
      <div className="max-w-full mt-12 ml-12 mr-12 prose prose-lg">
      <h1>Animal Rescuer</h1>
      <h2>Part of a mixed paid/volunteer team responsible for saving cats and dogs all over the world. Over 20k dogs and cats have been saved from over 10 states and 5 countries since 2009.</h2>
      <ul>
        <li>Fostered over 200 dogs.</li>
        <li>Represented Lucky Dog Animal Rescue at AWS Worldwide Public Sector Summit in 2019.</li>
        <li>1st place national fund-raising team for Best Friends Society.</li>
        <li>National crisis response to all US hurricanes in 2018.</li>
        <li>Puerto Rico earthquake response in 2019: 14,000 pounds of food & water, and rescue of 78 dogs.</li>
        <li>Puerto Rico COVID-19 2020 foster & recuse of 62 dogs.</li>
        <li>Traveled to Puerto Rico, Thailand, and Hawaii (for Kauai Humane Society) rescuing animals from high kill shelters.</li>
      </ul>
</div>
      <h1>Music</h1>
      <h1>Open Source</h1>
      <h2>Amazon Web Services</h2>
      <h3>AWS Community Builder (800 world-wide) 71 are in Management/Governance & Migration</h3>
      <ul>
<li>Member, AWS Worldwide Public Sector Partner Advisory Council</li>
<li>Member, AWS IQ Experts</li>
<li>Member, CDK.dev</li>
<li>Led Winning (1st Place) Team at the Worldwide Public Sector AWS Gameday May 21, 2020</li>
<li>Placed in the top 0.001% of AWS Challenges at Worldwide Public Sector AWS Summit June 30, 2020</li>
      </ul>
<h2>Other</h2>

- GitHub Artic Code Vault Contributor, July 2020
- GitHub Developer Program
- Foundation Member, Apache Software Foundation (ASF)
- Linked In Mentor

<h2>Prior</h2>

- Past Board Officer, Apache Software Foundation (ASF) 
  - VP of Infrastructure (World Wide) 2009-2011
- Past Apache Software Foundation (ASF) projects: apr, httpd, mod_perl, apreq, infra
- Past Member, Qubole Customer Advisory Council
- Past Mentor, FreeBSD Foundation
- Past FreeBSD ports committer
  - Most Enhancements to the FreeBSD Ports Tree in The World, 2010
- Past P5P Member and CPAN Module author
- NPMJS, PYPI, Nuget, Maven Central Module author

      <h1>Professional</h1>
    </div> */}
