---
title: max-statements-per-line - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/max-statements-per-line.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# max-statements-per-line

Enforces a maximum number of statements allowed per line.

A line of code containing too many statements can be difficult to read. Code is generally read from the top down, especially when scanning, so limiting the number of statements allowed on a single line can be very beneficial for readability and maintainability.

```js
function foo () { var bar; if (condition) { bar = 1; } else { bar = 2; } return true; } // too many statements
```

## Rule Details

This rule enforces a maximum number of statements allowed per line.

## Options

### max

The "max" object property is optional (default: 1).

Examples of **incorrect** code for this rule with the default `{ "max": 1 }` option:

```js
/*eslint max-statements-per-line: ["error", { "max": 1 }]*/

var bar; var baz;
if (condition) { bar = 1; }
for (var i = 0; i < length; ++i) { bar = 1; }
switch (discriminant) { default: break; }
function foo() { bar = 1; }
var foo = function foo() { bar = 1; };
(function foo() { bar = 1; })();
```

Examples of **correct** code for this rule with the default `{ "max": 1 }` option:

```js
/*eslint max-statements-per-line: ["error", { "max": 1 }]*/

var bar, baz;
if (condition) bar = 1;
for (var i = 0; i < length; ++i);
switch (discriminant) { default: }
function foo() { }
var foo = function foo() { };
(function foo() { })();
```

Examples of **incorrect** code for this rule with the `{ "max": 2 }` option:

```js
/*eslint max-statements-per-line: ["error", { "max": 2 }]*/

var bar; var baz; var qux;
if (condition) { bar = 1; } else { baz = 2; }
for (var i = 0; i < length; ++i) { bar = 1; baz = 2; }
switch (discriminant) { case 'test': break; default: break; }
function foo() { bar = 1; baz = 2; }
var foo = function foo() { bar = 1; };
(function foo() { bar = 1; baz = 2; })();
```

Examples of **correct** code for this rule with the `{ "max": 2 }` option:

```js
/*eslint max-statements-per-line: ["error", { "max": 2 }]*/

var bar; var baz;
if (condition) bar = 1; if (condition) baz = 2;
for (var i = 0; i < length; ++i) { bar = 1; }
switch (discriminant) { default: break; }
function foo() { bar = 1; }
var foo = function foo() { bar = 1; };
(function foo() { var bar = 1; })();
```

## When Not To Use It

You can turn this rule off if you are not concerned with the number of statements on each line.

## Related Rules

* [max-depth](max-depth)
* [max-len](max-len)
* [max-lines](max-lines)
* [max-lines-per-function](max-lines-per-function)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 2.5.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/max-statements-per-line.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/max-statements-per-line.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/max-statements-per-line.md)
