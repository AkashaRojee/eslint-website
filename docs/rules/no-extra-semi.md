---
title: no-extra-semi - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-extra-semi.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-extra-semi

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Disallows unnecessary semicolons.

Typing mistakes and misunderstandings about where semicolons are required can lead to semicolons that are unnecessary. While not technically an error, extra semicolons can cause confusion when reading code.

## Rule Details

This rule disallows unnecessary semicolons.

Examples of **incorrect** code for this rule:

```js
/*eslint no-extra-semi: "error"*/

var x = 5;;

function foo() {
    // code
};

class C {
    field;;

    method() {
        // code
    };

    static {
        // code
    };
};
```

Examples of **correct** code for this rule:

```js
/*eslint no-extra-semi: "error"*/

var x = 5;

function foo() {
    // code
}

var bar = function() {
    // code
};

class C {
    field;

    method() {
        // code
    }

    static {
        // code
    }
}
```

## When Not To Use It

If you intentionally use extra semicolons then you can disable this rule.

## Related Rules

* [semi](semi)
* [semi-spacing](semi-spacing)

## Version

This rule was introduced in ESLint 0.0.9.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-extra-semi.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-extra-semi.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-extra-semi.md)
