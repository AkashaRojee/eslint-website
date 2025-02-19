---
title: no-with - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-with.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-with

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

Disallows `with` statements.

The `with` statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to.

## Rule Details

This rule disallows `with` statements.

If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.

Examples of **incorrect** code for this rule:

```js
/*eslint no-with: "error"*/

with (point) {
    r = Math.sqrt(x * x + y * y); // is r a member of point?
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-with: "error"*/
/*eslint-env es6*/

const r = ({x, y}) => Math.sqrt(x * x + y * y);
```

## When Not To Use It

If you intentionally use `with` statements then you can disable this rule.

## Further Reading

* [with Statement Considered Harmful](https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)

## Version

This rule was introduced in ESLint 0.0.2.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-with.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-with.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-with.md)
