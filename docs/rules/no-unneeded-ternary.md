---
title: no-unneeded-ternary - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-unneeded-ternary.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-unneeded-ternary

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Disallows ternary operators when simpler alternatives exist.

It's a common mistake in JavaScript to use a conditional expression to select between two Boolean values instead of using ! to convert the test to a Boolean.
Here are some examples:

```js
// Bad
var isYes = answer === 1 ? true : false;

// Good
var isYes = answer === 1;


// Bad
var isNo = answer === 1 ? false : true;

// Good
var isNo = answer !== 1;
```

Another common mistake is using a single variable as both the conditional test and the consequent. In such cases, the logical `OR` can be used to provide the same functionality.
Here is an example:

```js
// Bad
foo(bar ? bar : 1);

// Good
foo(bar || 1);
```

## Rule Details

This rule disallow ternary operators when simpler alternatives exist.

Examples of **incorrect** code for this rule:

```js
/*eslint no-unneeded-ternary: "error"*/

var a = x === 2 ? true : false;

var a = x ? true : false;
```

Examples of **correct** code for this rule:

```js
/*eslint no-unneeded-ternary: "error"*/

var a = x === 2 ? "Yes" : "No";

var a = x !== false;

var a = x ? "Yes" : "No";

var a = x ? y : x;

f(x ? x : 1); // default assignment - would be disallowed if defaultAssignment option set to false. See option details below.
```

## Options

This rule has an object option:

* `"defaultAssignment": true` (default) allows the conditional expression as a default assignment pattern
* `"defaultAssignment": false` disallows the conditional expression as a default assignment pattern

### defaultAssignment

When set to `true`, which it is by default, The defaultAssignment option allows expressions of the form `x ? x : expr` (where `x` is any identifier and `expr` is any expression).

Examples of additional **incorrect** code for this rule with the `{ "defaultAssignment": false }` option:

```js
/*eslint no-unneeded-ternary: ["error", { "defaultAssignment": false }]*/

var a = x ? x : 1;

f(x ? x : 1);
```

Note that `defaultAssignment: false` still allows expressions of the form `x ? expr : x` (where the identifier is on the right hand side of the ternary).

## When Not To Use It

You can turn this rule off if you are not concerned with unnecessary complexity in conditional expressions.

## Related Rules

* [no-ternary](no-ternary)
* [no-nested-ternary](no-nested-ternary)

## Version

This rule was introduced in ESLint 0.21.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-unneeded-ternary.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-unneeded-ternary.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-unneeded-ternary.md)
