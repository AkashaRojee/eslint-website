---
title: valid-typeof - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/valid-typeof.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# valid-typeof

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

Enforces comparing `typeof` expressions against valid strings.

For a vast majority of use cases, the result of the `typeof` operator is one of the following string literals: `"undefined"`, `"object"`, `"boolean"`, `"number"`, `"string"`, `"function"`, `"symbol"`, and `"bigint"`. It is usually a typing mistake to compare the result of a `typeof` operator to other string literals.

## Rule Details

This rule enforces comparing `typeof` expressions to valid string literals.

## Options

This rule has an object option:

* `"requireStringLiterals": true` requires `typeof` expressions to only be compared to string literals or other `typeof` expressions, and disallows comparisons to any other value.

Examples of **incorrect** code for this rule:

```js
/*eslint valid-typeof: "error"*/

typeof foo === "strnig"
typeof foo == "undefimed"
typeof bar != "nunber"
typeof bar !== "fucntion"
```

Examples of **correct** code for this rule:

```js
/*eslint valid-typeof: "error"*/

typeof foo === "string"
typeof bar == "undefined"
typeof foo === baz
typeof bar === typeof qux
```

Examples of **incorrect** code with the `{ "requireStringLiterals": true }` option:

```js
/*eslint valid-typeof: ["error", { "requireStringLiterals": true }]*/

typeof foo === undefined
typeof bar == Object
typeof baz === "strnig"
typeof qux === "some invalid type"
typeof baz === anotherVariable
typeof foo == 5
```

Examples of **correct** code with the `{ "requireStringLiterals": true }` option:

```js
/*eslint valid-typeof: ["error", { "requireStringLiterals": true }]*/

typeof foo === "undefined"
typeof bar == "object"
typeof baz === "string"
typeof bar === typeof qux
```

## When Not To Use It

You may want to turn this rule off if you will be using the `typeof` operator on host objects.

## Further Reading

* [MDN: `typeof` documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## Version

This rule was introduced in ESLint 0.5.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/valid-typeof.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/valid-typeof.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/valid-typeof.md)
