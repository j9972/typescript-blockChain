// myPackage를 installl했다 마치 node_module같다고 생각해보기
// @ts-check
/**
 * Initialize the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns
 */

export function init(config) {
  return true;
}

/**
 *  Exits the program
 * @param {number} code
 * @returns{number}
 */

export function exit(code) {
  return code + 1;
}
