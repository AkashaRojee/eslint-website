---
title: function-paren-newline - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/function-paren-newline.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# function-paren-newline

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Enforces consistent line breaks inside function parentheses.

Many style guides require or disallow newlines inside of function parentheses.

## Rule Details

This rule enforces consistent line breaks inside parentheses of function parameters or arguments.

### Options

This rule has a single option, which can either be a string or an object.

* `"always"` requires line breaks inside all function parentheses.
* `"never"` disallows line breaks inside all function parentheses.
* `"multiline"` (default) requires linebreaks inside function parentheses if any of the parameters/arguments have a line break between them. Otherwise, it disallows linebreaks.
* `"multiline-arguments"` works like `multiline` but allows linebreaks inside function parentheses if there is only one parameter/argument.
* `"consistent"` requires consistent usage of linebreaks for each pair of parentheses. It reports an error if one parenthesis in the pair has a linebreak inside it and the other parenthesis does not.
* `{ "minItems": value }` requires linebreaks inside function parentheses if the number of parameters/arguments is at least `value`. Otherwise, it disallows linebreaks.

Example configurations:

```json
{
  "rules": {
    "function-paren-newline": ["error", "never"]
  }
}
```

```json
{
  "rules": {
    "function-paren-newline": ["error", { "minItems": 3 }]
  }
}
```

Examples of **incorrect** code for this rule with the `"always"` option:

```js
/* eslint function-paren-newline: ["error", "always"] */

function foo(bar, baz) {}

var foo = function(bar, baz) {};

var foo = (bar, baz) => {};

foo(bar, baz);
```

Examples of **correct** code for this rule with the `"always"` option:

```js
/* eslint function-paren-newline: ["error", "always"] */

function foo(
  bar,
  baz
) {}

var foo = function(
  bar, baz
) {};

var foo = (
  bar,
  baz
) => {};

foo(
  bar,
  baz
);
```

Examples of **incorrect** code for this rule with the `"never"` option:

```js
/* eslint function-paren-newline: ["error", "never"] */

function foo(
  bar,
  baz
) {}

var foo = function(
  bar, baz
) {};

var foo = (
  bar,
  baz
) => {};

foo(
  bar,
  baz
);
```

Examples of **correct** code for this rule with the `"never"` option:

```js
/* eslint function-paren-newline: ["error", "never"] */

function foo(bar, baz) {}

function foo(bar,
             baz) {}

var foo = function(bar, baz) {};

var foo = (bar, baz) => {};

foo(bar, baz);

foo(bar,
  baz);
```

Examples of **incorrect** code for this rule with the default `"multiline"` option:

```js
/* eslint function-paren-newline: ["error", "multiline"] */

function foo(bar,
  baz
) {}

var foo = function(
  bar, baz
) {};

var foo = (
  bar,
  baz) => {};

foo(bar,
  baz);

foo(
  function() {
    return baz;
  }
);
```

Examples of **correct** code for this rule with the default `"multiline"` option:

```js
/* eslint function-paren-newline: ["error", "multiline"] */

function foo(bar, baz) {}

var foo = function(
  bar,
  baz
) {};

var foo = (bar, baz) => {};

foo(bar, baz, qux);

foo(
  bar,
  baz,
  qux
);

foo(function() {
  return baz;
});
```

Examples of **incorrect** code for this rule with the `"consistent"` option:

```js
/* eslint function-paren-newline: ["error", "consistent"] */

function foo(bar,
  baz
) {}

var foo = function(bar,
  baz
) {};

var foo = (
  bar,
  baz) => {};

foo(
  bar,
  baz);

foo(
  function() {
    return baz;
  });
```

Examples of **correct** code for this rule with the `"consistent"` option:

```js
/* eslint function-paren-newline: ["error", "consistent"] */

function foo(bar,
  baz) {}

var foo = function(bar, baz) {};

var foo = (
  bar,
  baz
) => {};

foo(
  bar, baz
);

foo(
  function() {
    return baz;
  }
);
```

Examples of **incorrect** code for this rule with the `"multiline-arguments"` option:

```js
/* eslint function-paren-newline: ["error", "multiline-arguments"] */

function foo(bar,
  baz
) {}

var foo = function(bar,
  baz
) {};

var foo = (
  bar,
  baz) => {};

foo(
  bar,
  baz);

foo(
  bar, qux,
  baz
);
```

Examples of **correct** code for this rule with the consistent `"multiline-arguments"` option:

```js
/* eslint function-paren-newline: ["error", "multiline-arguments"] */

function foo(
  bar,
  baz
) {}

var foo = function(bar, baz) {};

var foo = (
  bar
) => {};

foo(
  function() {
    return baz;
  }
);
```

Examples of **incorrect** code for this rule with the `{ "minItems": 3 }` option:

```js
/* eslint function-paren-newline: ["error", { "minItems": 3 }] */

function foo(
  bar,
  baz
) {}

function foo(bar, baz, qux) {}

var foo = function(
  bar, baz
) {};

var foo = (bar,
  baz) => {};

foo(bar,
  baz);
```

Examples of **correct** code for this rule with the `{ "minItems": 3 }` option:

```js
/* eslint function-paren-newline: ["error", { "minItems": 3 }] */

function foo(bar, baz) {}

var foo = function(
  bar,
  baz,
  qux
) {};

var foo = (
  bar, baz, qux
) => {};

foo(bar, baz);

foo(
  bar, baz, qux
);
```

## When Not To Use It

If don't want to enforce consistent linebreaks inside function parentheses, do not turn on this rule.

## Version

This rule was introduced in ESLint 4.6.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/function-paren-newline.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/function-paren-newline.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/function-paren-newline.md)
