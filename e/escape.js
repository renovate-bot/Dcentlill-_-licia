/* Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to escape|
 * |return|string|Escaped string  |
 *
 * ```javascript
 * escape('You & Me'); -> // -> 'You &amp; Me'
 * ```
 */

_('keys');

function exports(str)
{
    return regTest.test(str) ? str.replace(regReplace, replaceFn) : str;
}

var MAP = exports.MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
};

var regSrc = '(?:' + keys(MAP).join('|') + ')',
    regTest = new RegExp(regSrc),
    regReplace = new RegExp(regSrc, 'g');

function replaceFn(match)
{
    return MAP[match];
}
