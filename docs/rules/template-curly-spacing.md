---
title: template-curly-spacing - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/template-curly-spacing.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# template-curly-spacing

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Enforces usage of spacing in template strings.

We can embed expressions in template strings with using a pair of `${` and `}`.

This rule can force usage of spacing _within_ the curly brace pair according to style guides.

```js
let hello = `hello, ${people.name}!`;
```

## Rule Details

This rule aims to maintain consistency around the spacing inside of template literals.

## Options

```json
{
    "template-curly-spacing": ["error", "never"]
}
```

This rule has one option which has either `"never"` or `"always"` as value.

* `"never"` (by default) - Disallows spaces inside of the curly brace pair.
* `"always"` - Requires one or more spaces inside of the curly brace pair.

## Examples

### never

Examples of **incorrect** code for this rule with the default `"never"` option:

```js
/*eslint template-curly-spacing: "error"*/

`hello, ${ people.name}!`;
`hello, ${people.name }!`;

`hello, ${ people.name }!`;
```

Examples of **correct** code for this rule with the default `"never"` option:

```js
/*eslint template-curly-spacing: "error"*/

`hello, ${people.name}!`;

`hello, ${
    people.name
}!`;
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

```js
/*eslint template-curly-spacing: ["error", "always"]*/

`hello, ${ people.name}!`;
`hello, ${people.name }!`;

`hello, ${people.name}!`;
```

Examples of **correct** code for this rule with the `"always"` option:

```js
/*eslint template-curly-spacing: ["error", "always"]*/

`hello, ${ people.name }!`;

`hello, ${
    people.name
}!`;
```

## When Not To Use It

If you don't want to be notified about usage of spacing inside of template strings, then it's safe to disable this rule.

## Version

This rule was introduced in ESLint 2.0.0-rc.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/template-curly-spacing.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/template-curly-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/template-curly-spacing.md)
