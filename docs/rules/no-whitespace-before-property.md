---
title: no-whitespace-before-property - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-whitespace-before-property.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-whitespace-before-property

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Disallows whitespace before properties.

JavaScript allows whitespace between objects and their properties. However, inconsistent spacing can make code harder to read and can lead to errors.

```js
foo. bar .baz . quz
```

## Rule Details

This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line. This rule allows whitespace when the object and property are on separate lines, as it is common to add newlines to longer chains of properties:

```js
foo
  .bar()
  .baz()
  .qux()
```

Examples of **incorrect** code for this rule:

```js
/*eslint no-whitespace-before-property: "error"*/

foo [bar]

foo. bar

foo .bar

foo. bar. baz

foo. bar()
  .baz()

foo
  .bar(). baz()
```

Examples of **correct** code for this rule:

```js
/*eslint no-whitespace-before-property: "error"*/

foo.bar

foo[bar]

foo[ bar ]

foo.bar.baz

foo
  .bar().baz()

foo
  .bar()
  .baz()

foo.
  bar().
  baz()
```

## When Not To Use It

Turn this rule off if you do not care about allowing whitespace around the dot or before the opening bracket before properties of objects if they are on the same line.

## Version

This rule was introduced in ESLint 2.0.0-beta.1.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-whitespace-before-property.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-whitespace-before-property.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-whitespace-before-property.md)
