---
title: no-new-object - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-new-object.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-new-object

Disallows `new` operators with the `Object` object.

The `Object` constructor is used to create new generic objects in JavaScript, such as:

```js
var myObject = new Object();
```

However, this is no different from using the more concise object literal syntax:

```js
var myObject = {};
```

For this reason, many prefer to always use the object literal syntax and never use the `Object` constructor.

While there are no performance differences between the two approaches, the byte savings and conciseness of the object literal form is what has made it the de facto way of creating new objects.

## Rule Details

This rule disallows `Object` constructors.

Examples of **incorrect** code for this rule:

```js
/*eslint no-new-object: "error"*/

var myObject = new Object();

new Object();
```

Examples of **correct** code for this rule:

```js
/*eslint no-new-object: "error"*/

var myObject = new CustomObject();

var myObject = {};

var Object = function Object() {};
new Object();
```

## When Not To Use It

If you wish to allow the use of the `Object` constructor, you can safely turn this rule off.

## Related Rules

* [no-array-constructor](no-array-constructor)
* [no-new-wrappers](no-new-wrappers)

## Version

This rule was introduced in ESLint 0.0.9.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-new-object.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-new-object.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-new-object.md)
