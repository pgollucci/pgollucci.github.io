const { web } = require('projen');

const project = new web.NextJsTypeScriptProject({
  name: 'pgollucci.github.io',

  tsconfig: {
    compilerOptions: {
      rootDir: '.',
    }
  },

  defaultReleaseBranch: 'main',

  deps: [
    "@headlessui/react",
    "@heroicons/react",
    "@tailwindcss/ui",
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "tailwindcss",
  ],
  devDeps: [
    "@types/js-yaml",
    "@types/geopattern",
    "js-yaml",
    "geopattern",
  ],

});

project.synth();
