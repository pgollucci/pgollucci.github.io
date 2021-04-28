import React, { ReactElement } from "react"

const Profile = (): ReactElement =>(
  <>
    <div className="flex flex-row w-full">
      <div className="w-1/2 mt-2">
        <h1 className="italic font-extrabold prose prose-2xl text-center">Philip M. Gollucci</h1>
        <h2 className="p-1 font-bold prose prose-xl text-center">CEO | CTO | CIO | CDO</h2>
        <h3 className="p-2 prose prose-xl text-center">Amazon Community Builder</h3>
        <h4 className="p-2 prose text-center underline">pgollucci@p6m7g8.com</h4>
        <h4 className="p-2 text-base prose-sm prose text-center underline"><a href="https://calendly.com/pgollucci">Schedule a chat</a></h4>
      </div>
      <div className="w-1/2 mt-2">
        <img className="rounded-full shadow-2xl max-h-72" src="/me.jpg" alt="Philip M. Gollucci" />
      </div>
    </div>
  </>
)

export default Profile;