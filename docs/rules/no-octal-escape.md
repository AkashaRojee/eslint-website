---
title: no-octal-escape - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-octal-escape.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-octal-escape

Disallows octal escape sequences in string literals.

As of the ECMAScript 5 specification, octal escape sequences in string literals are deprecated and should not be used. Unicode escape sequences should be used instead.

```js
var foo = "Copyright \251";
```

## Rule Details

This rule disallows octal escape sequences in string literals.

If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.

Examples of **incorrect** code for this rule:

```js
/*eslint no-octal-escape: "error"*/

var foo = "Copyright \251";
```

Examples of **correct** code for this rule:

```js
/*eslint no-octal-escape: "error"*/

var foo = "Copyright \u00A9";   // unicode

var foo = "Copyright \xA9";     // hexadecimal
```

## Version

This rule was introduced in ESLint 0.0.9.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-octal-escape.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-octal-escape.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-octal-escape.md)
