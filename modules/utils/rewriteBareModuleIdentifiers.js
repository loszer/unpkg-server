import babel from '@babel/core';

import unpkgRewrite from '../plugins/unpkgRewrite.js';

// const origin = process.env.ORIGIN || 'https://unpkg.com';
const origin = process.env.ORIGIN;

export default function rewriteBareModuleIdentifiers(code, packageConfig) {
  const dependencies = Object.assign(
    {},
    packageConfig.peerDependencies,
    packageConfig.dependencies
  );

  const options = {
    // Ignore .babelrc and package.json babel config
    // because we haven't installed dependencies so
    // we can't load plugins; see #84
    babelrc: false,
    // Make a reasonable attempt to preserve whitespace
    // from the original file. This ensures minified
    // .mjs stays minified; see #149
    retainLines: true,
    plugins: [unpkgRewrite(origin, dependencies)]
  };

  return babel.transform(code, options).code;
}
