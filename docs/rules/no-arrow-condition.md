---
title: no-arrow-condition - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-arrow-condition.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-arrow-condition

Disallows arrow functions where test conditions are expected.

(removed) This rule was **removed** in ESLint v2.0 and **replaced** by a combination of the [no-confusing-arrow](no-confusing-arrow) and [no-constant-condition](no-constant-condition) rules.

Arrow functions (`=>`) are similar in syntax to some comparison operators (`>`, `<`, `<=`, and `>=`). This rule warns against using the arrow function syntax in places where a condition is expected. Even if the arguments of the arrow function are wrapped with parens, this rule still warns about it.

Here's an example where the usage of `=>` is most likely a typo:

```js
// This is probably a typo
if (a => 1) {}
// And should instead be
if (a >= 1) {}
```

There are also cases where the usage of `=>` can be ambiguous and should be rewritten to more clearly show the author's intent:

```js
// The intent is not clear
var x = a => 1 ? 2 : 3
// Did the author mean this
var x = function (a) { return a >= 1 ? 2 : 3 }
// Or this
var x = a <= 1 ? 2 : 3
```

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-arrow-condition: "error"*/
/*eslint-env es6*/

if (a => 1) {}
while (a => 1) {}
for (var a = 1; a => 10; a++) {}
a => 1 ? 2 : 3
(a => 1) ? 2 : 3
var x = a => 1 ? 2 : 3
var x = (a) => 1 ? 2 : 3
```

## Related Rules

* [arrow-parens](arrow-parens)
* [no-confusing-arrow](no-confusing-arrow)
* [no-constant-condition](no-constant-condition)

## Version

This rule was introduced in ESLint 1.8.0 and removed in 2.0.0-beta.3.

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-arrow-condition.md)
