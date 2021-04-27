import React, { ReactElement } from "react";

const social = [
  { name: 'Dev.to', href: 'https://dev.to/pgollucci', icon: () => (<p>Dev.to</p>), },
  { name: 'GitHub', href: 'https://github.com/pgollucci', icon: () => (<p>Github</p>), },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/pgollucci/', icon: () => (<p>LinkedIn</p>), },
  { name: 'Medium', href: 'https://medium.com/@pgollucci', icon: () => (<p>Medium</p>), },
  { name: 'Twitter', href: 'https://twitter/p6m7g8', icon: () => (<p>Twitter</p>), },
  { name: 'Youtube', href: 'https://www.youtube.com/channel/UC6mOzHytcWLRJInP5B_Qg6g', icon: () => (<p>Youtube</p>), },
];

const Footer = (): ReactElement => (
    <>
      <footer className="w-full">
        <div className="p-4 m-4 border-t border-gray-700">
          <div className="flex space-x-6 justify-begin">
          {
            social.map((item) => (
              <span>
                <a className="hover:text-blue-500" key={item.name} href={item.href}>{item.name}</a>
              </span>
            ))
          }
          </div>
        </div>
      </footer>
    </>
)

export default Footer;
