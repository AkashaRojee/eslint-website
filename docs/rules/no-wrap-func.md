---
title: no-wrap-func - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-wrap-func.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-wrap-func

Disallows unnecessary parentheses around function expressions.

(removed) This rule was **removed** in ESLint v1.0 and **replaced** by the [no-extra-parens](no-extra-parens) rule. The `"functions"` option in the new rule is equivalent to the removed rule.

Although it's possible to wrap functions in parentheses, this can be confusing when the code also contains immediately-invoked function expressions (IIFEs) since parentheses are often used to make this distinction. For example:

```js
var foo = (function() {
    // IIFE
}());

var bar = (function() {
    // not an IIFE
});
```

## Rule Details

This rule will raise a warning when it encounters a function expression wrapped in parentheses with no following invoking parentheses.

Example of **incorrect** code for this rule:

```js
var a = (function() {/*...*/});
```

Examples of **correct** code for this rule:

```js
var a = function() {/*...*/};

(function() {/*...*/})();
```

## Version

This rule was introduced in ESLint 0.0.9 and removed in 1.0.0-rc-1.

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-wrap-func.md)
