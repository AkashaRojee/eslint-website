---
title: max-depth - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/max-depth.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# max-depth

Enforces a maximum depth that blocks can be nested.

Many developers consider code difficult to read if blocks are nested beyond a certain depth.

## Rule Details

This rule enforces a maximum depth that blocks can be nested to reduce code complexity.

## Options

This rule has a number or object option:

* `"max"` (default `4`) enforces a maximum depth that blocks can be nested

**Deprecated:** The object property `maximum` is deprecated; please use the object property `max` instead.

### max

Examples of **incorrect** code for this rule with the default `{ "max": 4 }` option:

```js
/*eslint max-depth: ["error", 4]*/

function foo() {
    for (;;) { // Nested 1 deep
        while (true) { // Nested 2 deep
            if (true) { // Nested 3 deep
                if (true) { // Nested 4 deep
                    if (true) { // Nested 5 deep
                    }
                }
            }
        }
    }
}
```

Examples of **correct** code for this rule with the default `{ "max": 4 }` option:

```js
/*eslint max-depth: ["error", 4]*/

function foo() {
    for (;;) { // Nested 1 deep
        while (true) { // Nested 2 deep
            if (true) { // Nested 3 deep
                if (true) { // Nested 4 deep
                }
            }
        }
    }
}
```

Note that class static blocks do not count as nested blocks, and that the depth in them is calculated separately from the enclosing context.

Examples of **incorrect** code for this rule with `{ "max": 2 }` option:

```js
/*eslint max-depth: ["error", 2]*/

function foo() {
    if (true) { // Nested 1 deep
        class C {
            static {
                if (true) { // Nested 1 deep
                    if (true) { // Nested 2 deep
                        if (true) { // Nested 3 deep
                        }
                    }
                }
            }
        }
    }
}
```

Examples of **correct** code for this rule with `{ "max": 2 }` option:

```js
/*eslint max-depth: ["error", 2]*/

function foo() {
    if (true) { // Nested 1 deep
        class C {
            static {
                if (true) { // Nested 1 deep
                    if (true) { // Nested 2 deep
                    }
                }
            }
        }
    }
}
```

## Related Rules

* [complexity](complexity)
* [max-len](max-len)
* [max-lines](max-lines)
* [max-lines-per-function](max-lines-per-function)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 0.0.9.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/max-depth.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/max-depth.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/max-depth.md)
