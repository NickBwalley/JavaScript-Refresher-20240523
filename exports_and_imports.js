const person = {
  name: "Nick",
};
// DEFAULT EXPORT
export default person;

// NAMED EXPORT
export const clean = () => {};

export const baseData = 10;

// in app.js
/**
 * DEFAULT EXPORT
 * import person from './person.js'
 * import prs from './person.js'
 *
 * NAMED EXPORT
 * import {baseData} from './utility.js'
 * import {clean} from './utility.js'
 *
 * ALIAS EXPORT
 * import * as bundled from './utility.js'
 */
