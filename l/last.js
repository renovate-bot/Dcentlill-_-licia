/* Get the last element of array.
 *
 * |Name  |Type |Desc                     |
 * |------|-----|-------------------------|
 * |arr   |array|The array to query       |
 * |return|*    |The last element of array|
 *
 * ```javascript
 * last([1, 2]); // -> 2
 * ```
 */

exports = function (arr)
{
    var len = arr ? arr.length : 0;

    if (len) return arr[len - 1];
};