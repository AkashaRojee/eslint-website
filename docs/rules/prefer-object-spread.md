---
title: prefer-object-spread - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/prefer-object-spread.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# prefer-object-spread

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Prefer use of an object spread over `Object.assign`.

When Object.assign is called using an object literal as the first argument, this rule requires using the object spread syntax instead. This rule also warns on cases where an `Object.assign` call is made using a single argument that is an object literal, in this case, the `Object.assign` call is not needed.

Introduced in ES2018, object spread is a declarative alternative which may perform better than the more dynamic, imperative `Object.assign`.

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint prefer-object-spread: "error"*/

Object.assign({}, foo)

Object.assign({}, {foo: 'bar'})

Object.assign({ foo: 'bar'}, baz)

Object.assign({ foo: 'bar' }, Object.assign({ bar: 'foo' }))

Object.assign({}, { foo, bar, baz })

Object.assign({}, { ...baz })

// Object.assign with a single argument that is an object literal
Object.assign({});

Object.assign({ foo: bar });
```

Examples of **correct** code for this rule:

```js
/*eslint prefer-object-spread: "error"*/

Object.assign(...foo);

// Any Object.assign call without an object literal as the first argument
Object.assign(foo, { bar: baz });

Object.assign(foo, Object.assign(bar));

Object.assign(foo, { bar, baz })

Object.assign(foo, { ...baz });
```

## When Not To Use It

This rule should not be used unless ES2018 is supported in your codebase.

## Version

This rule was introduced in ESLint 5.0.0-alpha.3.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/prefer-object-spread.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/prefer-object-spread.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/prefer-object-spread.md)
