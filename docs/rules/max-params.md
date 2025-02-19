---
title: max-params - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/max-params.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# max-params

Enforces a maximum number of parameters in function definitions.

Functions that take numerous parameters can be difficult to read and write because it requires the memorization of what each parameter is, its type, and the order they should appear in. As a result, many coders adhere to a convention that caps the number of parameters a function can take.

```js
function foo (bar, baz, qux, qxx) { // four parameters, may be too many
    doSomething();
}
```

## Rule Details

This rule enforces a maximum number of parameters allowed in function definitions.

## Options

This rule has a number or object option:

* `"max"` (default `3`) enforces a maximum number of parameters in function definitions

**Deprecated:** The object property `maximum` is deprecated; please use the object property `max` instead.

### max

Examples of **incorrect** code for this rule with the default `{ "max": 3 }` option:

```js
/*eslint max-params: ["error", 3]*/
/*eslint-env es6*/

function foo (bar, baz, qux, qxx) {
    doSomething();
}

let foo = (bar, baz, qux, qxx) => {
    doSomething();
};
```

Examples of **correct** code for this rule with the default `{ "max": 3 }` option:

```js
/*eslint max-params: ["error", 3]*/
/*eslint-env es6*/

function foo (bar, baz, qux) {
    doSomething();
}

let foo = (bar, baz, qux) => {
    doSomething();
};
```

## Related Rules

* [complexity](complexity)
* [max-depth](max-depth)
* [max-len](max-len)
* [max-lines](max-lines)
* [max-lines-per-function](max-lines-per-function)
* [max-nested-callbacks](max-nested-callbacks)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 0.0.9.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/max-params.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/max-params.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/max-params.md)
