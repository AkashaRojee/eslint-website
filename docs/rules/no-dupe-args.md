---
title: no-dupe-args - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-dupe-args.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-dupe-args

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

Disallows duplicate arguments in `function` definitions.

If more than one parameter has the same name in a function definition, the last occurrence "shadows" the preceding occurrences. A duplicated name might be a typing error.

## Rule Details

This rule disallows duplicate parameter names in function declarations or expressions. It does not apply to arrow functions or class methods, because the parser reports the error.

If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.

Examples of **incorrect** code for this rule:

```js
/*eslint no-dupe-args: "error"*/

function foo(a, b, a) {
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};
```

Examples of **correct** code for this rule:

```js
/*eslint no-dupe-args: "error"*/

function foo(a, b, c) {
    console.log(a, b, c);
}

var bar = function (a, b, c) {
    console.log(a, b, c);
};
```

## Version

This rule was introduced in ESLint 0.16.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-dupe-args.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-dupe-args.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-dupe-args.md)
