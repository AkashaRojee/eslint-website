---
title: no-constructor-return - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-constructor-return.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-constructor-return

Disallows returning values in constructor.

In JavaScript, returning a value in the constructor of a class may be a mistake. Forbidding this pattern prevents mistakes resulting from unfamiliarity with the language or a copy-paste error.

## Rule Details

This rule disallows return statements in the constructor of a class. Note that returning nothing with flow control is allowed.

Examples of **incorrect** code for this rule:

```js
/*eslint no-constructor-return: "error"*/

class A {
    constructor(a) {
        this.a = a;
        return a;
    }
}

class B {
    constructor(f) {
        if (!f) {
            return 'falsy';
        }
    }
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-constructor-return: "error"*/

class C {
    constructor(c) {
        this.c = c;
    }
}

class D {
    constructor(f) {
        if (!f) {
            return;  // Flow control.
        }

        f();
    }
}
```

## Version

This rule was introduced in ESLint 6.7.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-constructor-return.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-constructor-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-constructor-return.md)
