---
title: no-new-require - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-new-require.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-new-require

Disallows `new` operators with calls to `require`.

This rule was **deprecated** in ESLint v7.0.0. Please use the corresponding rule in [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node).

The `require` function is used to include modules that exist in separate files, such as:

```js
var appHeader = require('app-header');
```

Some modules return a constructor which can potentially lead to code such as:

```js
var appHeader = new require('app-header');
```

Unfortunately, this introduces a high potential for confusion since the code author likely meant to write:

```js
var appHeader = new (require('app-header'));
```

For this reason, it is usually best to disallow this particular expression.

## Rule Details

This rule aims to eliminate use of the `new require` expression.

Examples of **incorrect** code for this rule:

```js
/*eslint no-new-require: "error"*/

var appHeader = new require('app-header');
```

Examples of **correct** code for this rule:

```js
/*eslint no-new-require: "error"*/

var AppHeader = require('app-header');
var appHeader = new AppHeader();
```

## When Not To Use It

If you are using a custom implementation of `require` and your code will never be used in projects where a standard `require` (CommonJS, Node.js, AMD) is expected, you can safely turn this rule off.

## Version

This rule was introduced in ESLint 0.6.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-new-require.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-new-require.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-new-require.md)
