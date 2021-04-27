import React, { ReactElement } from "react";

const social = [
  { name: 'GitHub', href: 'https://github.com/pgollucci', icon: () => (<p>Github</p>), },
  { name: 'Twitter', href: 'https://github.com/p6m7g8', icon: () => (<p>Twitter</p>), },
  { name: 'Youtube', href: 'https://www.youtube.com/channel/UC6mOzHytcWLRJInP5B_Qg6g', icon: () => (<p>Youtube</p>), },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/pgollucci/', icon: () => (<p>LinkedIn</p>), },
  { name: 'Medium', href: 'https://medium.com/@pgollucci', icon: () => (<p>Medium</p>), },
  { name: 'Dev.to', href: 'https://dev.to/pgollucci', icon: () => (<p>Dev.to</p>), },
];

const Footer = (): ReactElement => (
    <>
      <footer className="w-full">
        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex justify-end space-x-6">
          {
            social.map((item) => (
              <span className="">{item.name}</span>
            ))
          }
          </div>
        </div>
      </footer>
    </>
)

export default Footer;
