---
title: no-space-before-semi - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-space-before-semi.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-space-before-semi

Disallows spaces before semicolons.

(removed) This rule was **removed** in ESLint v1.0 and **replaced** by the [semi-spacing](semi-spacing) rule.

JavaScript allows for placing unnecessary spaces between an expression and the closing semicolon.

Space issues can also cause code to look inconsistent and harder to read.

```js
var thing = function () {
  var test = 12 ;
}  ;
```

## Rule Details

This rule prevents the use of spaces before a semicolon in expressions.

Examples of **incorrect** code for this rule:

```js
var foo = "bar" ;

var foo = function() {} ;

var foo = function() {
} ;

var foo = 1 + 2 ;
```

Examples of **correct** code for this rule:

```js
;(function(){}());

var foo = "bar";
```

## Related Rules

* [semi](semi)
* [no-extra-semi](no-extra-semi)

## Version

This rule was introduced in ESLint 0.4.3 and removed in 1.0.0-rc-1.

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-space-before-semi.md)
