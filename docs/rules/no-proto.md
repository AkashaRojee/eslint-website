---
title: no-proto - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-proto.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-proto

Disallows the use of the `__proto__` property.

`__proto__` property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the code. Use `Object.getPrototypeOf` and `Object.setPrototypeOf` instead.

## Rule Details

When an object is created with the `new` operator, `__proto__` is set to the original "prototype" property of the object's constructor function. `Object.getPrototypeOf` is the preferred method of getting the object's prototype. To change an object's prototype, use `Object.setPrototypeOf`.

Examples of **incorrect** code for this rule:

```js
/*eslint no-proto: "error"*/

var a = obj.__proto__;

var a = obj["__proto__"];

obj.__proto__ = b;

obj["__proto__"] = b;
```

Examples of **correct** code for this rule:

```js
/*eslint no-proto: "error"*/

var a = Object.getPrototypeOf(obj);

Object.setPrototypeOf(obj, b);

var c = { __proto__: a };
```

## When Not To Use It

You might want to turn this rule off if you need to support legacy browsers which implement the
`__proto__` property but not `Object.getPrototypeOf` or `Object.setPrototypeOf`.

## Further Reading

* [Object.getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/)

## Version

This rule was introduced in ESLint 0.0.9.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-proto.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-proto.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-proto.md)
