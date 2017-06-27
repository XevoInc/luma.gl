import {default as fp64} from '/math-fp64.glsl';

export default {
  name: 'fp64',
  vs: fp64,
  fs: null,
  getUniforms: () => ({})
};

// JS Utilities
export {fp64ify} from './fp64-utils';
