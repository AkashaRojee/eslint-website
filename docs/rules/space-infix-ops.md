---
title: space-infix-ops - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/space-infix-ops.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# space-infix-ops

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Requires spacing around infix operators.

While formatting preferences are very personal, a number of style guides require spaces around operators, such as:

```js
var sum = 1 + 2;
```

The proponents of these extra spaces believe it make the code easier to read and can more easily highlight potential errors, such as:

```js
var sum = i+++2;
```

While this is valid JavaScript syntax, it is hard to determine what the author intended.

## Rule Details

This rule is aimed at ensuring there are spaces around infix operators.

## Options

This rule accepts a single options argument with the following defaults:

```json
"space-infix-ops": ["error", { "int32Hint": false }]
```

### `int32Hint`

Set the `int32Hint` option to `true` (default is `false`) to allow write `a|0` without space.

```js
var foo = bar|0; // `foo` is forced to be signed 32 bit integer
```

Examples of **incorrect** code for this rule:

```js
/*eslint space-infix-ops: "error"*/
/*eslint-env es6*/

a+b

a+ b

a +b

a?b:c

const a={b:1};

var {a=0}=bar;

function foo(a=0) { }
```

Examples of **correct** code for this rule:

```js
/*eslint space-infix-ops: "error"*/
/*eslint-env es6*/

a + b

a       + b

a ? b : c

const a = {b:1};

var {a = 0} = bar;

function foo(a = 0) { }
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing around infix operators.

## Version

This rule was introduced in ESLint 0.2.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/space-infix-ops.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/space-infix-ops.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/space-infix-ops.md)
