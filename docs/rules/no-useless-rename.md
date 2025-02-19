---
title: no-useless-rename - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-useless-rename.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-useless-rename

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Disallows renaming import, export, and destructured assignments to the same name.

ES2015 allows for the renaming of references in import and export statements as well as destructuring assignments. This gives programmers a concise syntax for performing these operations while renaming these references:

```js
import { foo as bar } from "baz";
export { foo as bar };
let { foo: bar } = baz;
```

With this syntax, it is possible to rename a reference to the same name. This is a completely redundant operation, as this is the same as not renaming at all. For example, this:

```js
import { foo as foo } from "bar";
export { foo as foo };
let { foo: foo } = bar;
```

is the same as:

```js
import { foo } from "bar";
export { foo };
let { foo } = bar;
```

## Rule Details

This rule disallows the renaming of import, export, and destructured assignments to the same name.

## Options

This rule allows for more fine-grained control with the following options:

* `ignoreImport`: When set to `true`, this rule does not check imports
* `ignoreExport`: When set to `true`, this rule does not check exports
* `ignoreDestructuring`: When set to `true`, this rule does not check destructuring assignments

By default, all options are set to `false`:

```json
"no-useless-rename": ["error", {
    "ignoreDestructuring": false,
    "ignoreImport": false,
    "ignoreExport": false
}]
```

Examples of **incorrect** code for this rule by default:

```js
/*eslint no-useless-rename: "error"*/

import { foo as foo } from "bar";
import { "foo" as foo } from "bar";
export { foo as foo };
export { foo as "foo" };
export { foo as foo } from "bar";
export { "foo" as "foo" } from "bar";
let { foo: foo } = bar;
let { 'foo': foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}
```

Examples of **correct** code for this rule by default:

```js
/*eslint no-useless-rename: "error"*/

import * as foo from "foo";
import { foo } from "bar";
import { foo as bar } from "baz";
import { "foo" as bar } from "baz";

export { foo };
export { foo as bar };
export { foo as "bar" };
export { foo as bar } from "foo";
export { "foo" as "bar" } from "foo";

let { foo } = bar;
let { foo: bar } = baz;
let { [foo]: foo } = bar;

function foo({ bar }) {}
function foo({ bar: baz }) {}

({ foo }) => {}
({ foo: bar }) => {}
```

Examples of **correct** code for this rule with `{ ignoreImport: true }`:

```js
/*eslint no-useless-rename: ["error", { ignoreImport: true }]*/

import { foo as foo } from "bar";
```

Examples of **correct** code for this rule with `{ ignoreExport: true }`:

```js
/*eslint no-useless-rename: ["error", { ignoreExport: true }]*/

export { foo as foo };
export { foo as foo } from "bar";
```

Examples of **correct** code for this rule with `{ ignoreDestructuring: true }`:

```js
/*eslint no-useless-rename: ["error", { ignoreDestructuring: true }]*/

let { foo: foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}
```

## When Not To Use It

You can safely disable this rule if you do not care about redundantly renaming import, export, and destructuring assignments.

## Related Rules

* [`object-shorthand`](object-shorthand) which can enforce this behavior for properties in object literals.

## Compatibility

* **JSCS**: [disallowIdenticalDestructuringNames](https://jscs-dev.github.io/rule/disallowIdenticalDestructuringNames)

## Version

This rule was introduced in ESLint 2.11.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-useless-rename.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-useless-rename.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-useless-rename.md)
