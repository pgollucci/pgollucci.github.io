const { web } = require('projen');

const project = new web.NextJsTypeScriptProject({
  name: 'pgollucci.github.io',

  defaultReleaseBranch: 'main',

  devDeps: [
    "@headlessui/react",
    "@heroicons/react",
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "@tailwindcss/ui",
    "geopattern",
    "js-yaml",
    "tailwindcss",
    "tailwindcss-intellisense",
    "next-compose-plugins",
    "next-optimized-images",
  ]
});

project.synth();
