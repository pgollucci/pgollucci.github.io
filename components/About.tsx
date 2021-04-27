import React, { ReactElement } from "react"

const About = (): ReactElement =>(
  <>
    <div className="grid grid-flow-row gap-8 mt-8 ml-8 mr-8 lg:grid-cols-3 xl:grid-cols-4">
      <div>
        <div className="flex flex-col h-64">
          <div className="mx-auto"><img className="w-64 h-48 rounded-2xl" src="/animal.jpg" /></div>
          <div className="mx-auto"><img className="w-64 h-12 rounded-2xl" src="/ldar.png" /></div>
        </div>
        <div className="mt-2 prose">
            <h4>Fostered over 200 dogs.</h4>
          <ul>
            <li>Part of a volunteer team responsible for saving cats and dogs all over the world. Over 20k dogs and cats have been saved from over 10 states and 5 countries since 2009.</li>
            <li>Represented Lucky Dog Animal Rescue at AWS Worldwide Public Sector Summit in 2019.</li>
            <li>1st place national fund-raising team for Best Friends Society.</li>
            <li>National crisis response to all US hurricanes in 2018.</li>
            <li>Puerto Rico earthquake response in 2019: 14,000 pounds of food & water, and rescue of 78 dogs.</li>
            <li>Puerto Rico COVID-19 2020 foster & recuse of 62 dogs.</li>
            <li>Traveled to Puerto Rico, Thailand, and Hawaii (for Kauai Humane Society) rescuing animals from high kill shelters.</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="h-64">
          <img className="h-48 mx-auto w-96" src="/awscb.png" />
        </div>
        <div className="mt-2 prose">
          <h4 className="text-center">
            One of ~800 World Wide in this VIP AWS Program.
          </h4>
          <ul>
            <li>Lead winning (1st place) World Wide Public Sector Team, May 2020</li>
            <li>Placed in the top 0.001% of AWS Challenges at Worldwide Public Sector AWS Summit June 30, 2020</li>
            <li>AWS SysOps Associate Exam Contributor, November 2019</li>
            <li>AWS Security Specialty Exam Question Author,, May 2021</li>
            <li>CDK.dev member, AWS CDK, CDK8s, CDKtf, and projen contributor</li>
            <li>Member, AWS Worldwide Public Sector Partner Advisory Council</li>
            <li>Member, AWS IQ Experts (verified)</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="h-64">
          <img className="mx-auto h-38" src="/fbsd.jpg" />
        </div>
        <div className="mt-2 prose">
          <h4>18th most changes to FreeBSD ports World Wide.</h4>
          <ul>
            <li>Instrumental in Apache Software Foundation, ruby, and perl ports</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="h-64">
          <img className="mx-auto" src="/asf.png" />
        </div>
        <div className="mt-2 prose">
          <h4>Vice President of Apache Software Foundation Infrastructure (World Wide)</h4>
          <ul>
            <li className="prose-lg">THE WORLD'S LARGEST OPEN SOURCE FOUNDATION</li>
            <li>Held root@ for 4yrs</li>
            <li>Managed Global Infrastructure Budget, Data Centers, and Staff</li>
            <li>Project Management Committee: httpd, apr, apreq, mod_perl</li>
          </ul>
        </div>
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
