---
title: no-const-assign - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-const-assign.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-const-assign

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

Disallows modifying variables that are declared using `const`.

We cannot modify variables that are declared using `const` keyword.
It will raise a runtime error.

Under non ES2015 environment, it might be ignored merely.

## Rule Details

This rule is aimed to flag modifying variables that are declared using `const` keyword.

Examples of **incorrect** code for this rule:

```js
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
a = 1;
```

```js
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
a += 1;
```

```js
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
++a;
```

Examples of **correct** code for this rule:

```js
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
console.log(a);
```

```js
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

for (const a in [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
    console.log(a);
}
```

```js
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

for (const a of [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
    console.log(a);
}
```

## When Not To Use It

If you don't want to be notified about modifying variables that are declared using `const` keyword, you can safely disable this rule.

## Version

This rule was introduced in ESLint 1.0.0-rc-1.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-const-assign.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-const-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-const-assign.md)
