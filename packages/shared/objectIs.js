/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x: any, y: any) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
  );
}

/**
 * 如果满足以下任意条件则两个值相等：
 * - 都是 undefined
 * - 都是 null
 * - 都是 true 或都是 false
 * - 都是相同长度、相同字符、按相同顺序排列的字符串
 * - 都是相同对象（意味着都是同一个对象的值引用）
 * - 都是数字且
 *   > - 都是 +0
 *   > - 都是 -0
 *   > - 都是 NaN
 *   > - 都是同一个值，非零且都不是 NaN
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
const objectIs: (x: any, y: any) => boolean =
  // $FlowFixMe[method-unbinding]
  typeof Object.is === 'function' ? Object.is : is;

export default objectIs;
