const { web } = require('projen');

const project = new web.NextJsTypeScriptProject({
  name: 'pgollucci.github.io',

  tsconfig: {
    compilerOptions: {
      rootDir: '.',
    }
  },

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
    "next-compose-plugins",
    "next-optimized-images",
  ]
});

project.synth();
