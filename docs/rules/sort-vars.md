---
title: sort-vars - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/sort-vars.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# sort-vars

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Requires variables within the same declaration block to be sorted.

When declaring multiple variables within the same block, some developers prefer to sort variable names alphabetically to be able to find necessary variable easier at the later time. Others feel that it adds complexity and becomes burden to maintain.

## Rule Details

This rule checks all variable declaration blocks and verifies that all variables are sorted alphabetically.
The default configuration of the rule is case-sensitive.

Examples of **incorrect** code for this rule:

```js
/*eslint sort-vars: "error"*/

var b, a;

var a, B, c;

var a, A;
```

Examples of **correct** code for this rule:

```js
/*eslint sort-vars: "error"*/

var a, b, c, d;

var _a = 10;
var _b = 20;

var A, a;

var B, a, c;
```

Alphabetical list is maintained starting from the first variable and excluding any that are considered problems. So the following code will produce two problems:

```js
/*eslint sort-vars: "error"*/

var c, d, a, b;
```

But this one, will only produce one:

```js
/*eslint sort-vars: "error"*/

var c, d, a, e;
```

## Options

This rule has an object option:

* `"ignoreCase": true` (default `false`) ignores the case-sensitivity of the variables order

### ignoreCase

Examples of **correct** code for this rule with the `{ "ignoreCase": true }` option:

```js
/*eslint sort-vars: ["error", { "ignoreCase": true }]*/

var a, A;

var a, B, c;
```

## When Not To Use It

This rule is a formatting preference and not following it won't negatively affect the quality of your code. If you alphabetizing variables isn't a part of your coding standards, then you can leave this rule off.

## Related Rules

* [sort-keys](sort-keys)
* [sort-imports](sort-imports)

## Version

This rule was introduced in ESLint 0.2.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/sort-vars.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/sort-vars.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/sort-vars.md)
