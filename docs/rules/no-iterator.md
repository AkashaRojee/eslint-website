---
title: no-iterator - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-iterator.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-iterator

Disallows the use of the `__iterator__` property.

The `__iterator__` property was a SpiderMonkey extension to JavaScript that could be used to create custom iterators that are compatible with JavaScript's `for in` and `for each` constructs. However, this property is now obsolete, so it should not be used. Here's an example of how this used to work:

```js
Foo.prototype.__iterator__ = function() {
    return new FooIterator(this);
}
```

You should use ECMAScript 6 iterators and generators instead.

## Rule Details

This rule is aimed at preventing errors that may arise from using the `__iterator__` property, which is not implemented in several browsers. As such, it will warn whenever it encounters the `__iterator__` property.

Examples of **incorrect** code for this rule:

```js
/*eslint no-iterator: "error"*/

Foo.prototype.__iterator__ = function() {
    return new FooIterator(this);
};

foo.__iterator__ = function () {};

foo["__iterator__"] = function () {};

```

Examples of **correct** code for this rule:

```js
/*eslint no-iterator: "error"*/

var __iterator__ = foo; // Not using the `__iterator__` property.
```

## Further Reading

* [MDN - Iterators and Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
* [ECMAScript 6 compatibility table - Iterators](https://kangax.github.io/es5-compat-table/es6/#Iterators)
* [Deprecated and Obsolete Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#Object_methods)

## Version

This rule was introduced in ESLint 0.0.9.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-iterator.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-iterator.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-iterator.md)
