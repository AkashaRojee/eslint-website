---
title: no-eval - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-eval.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-eval

Disallows eval().

JavaScript's `eval()` function is potentially dangerous and is often misused. Using `eval()` on untrusted code can open a program up to several different injection attacks. The use of `eval()` in most contexts can be substituted for a better, alternative approach to a problem.

```js
var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);
```

## Rule Details

This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by disallowing the use of the `eval()` function. As such, it will warn whenever the `eval()` function is used.

Examples of **incorrect** code for this rule:

```js
/*eslint no-eval: "error"*/

var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

// This `this` is the global object.
this.eval("var a = 0");
```

Example of additional **incorrect** code for this rule when `browser` environment is set to `true`:

```js
/*eslint no-eval: "error"*/
/*eslint-env browser*/

window.eval("var a = 0");
```

Example of additional **incorrect** code for this rule when `node` environment is set to `true`:

```js
/*eslint no-eval: "error"*/
/*eslint-env node*/

global.eval("var a = 0");
```

Examples of **correct** code for this rule:

```js
/*eslint no-eval: "error"*/
/*eslint-env es6*/

var obj = { x: "foo" },
    key = "x",
    value = obj[key];

class A {
    foo() {
        // This is a user-defined method.
        this.eval("var a = 0");
    }

    eval() {
    }

    static {
        // This is a user-defined static method.
        this.eval("var a = 0");
    }

    static eval() {
    }
}
```

## Options

This rule has an option to allow indirect calls to `eval`.
Indirect calls to `eval` are less dangerous than direct calls to `eval` because they cannot dynamically change the scope. Because of this, they also will not negatively impact performance to the degree of direct `eval`.

```js
{
    "no-eval": ["error", {"allowIndirect": true}] // default is false
}
```

Example of **incorrect** code for this rule with the `{"allowIndirect": true}` option:

```js
/*eslint no-eval: "error"*/

var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);
```

Examples of **correct** code for this rule with the `{"allowIndirect": true}` option:

```js
/*eslint no-eval: "error"*/

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

this.eval("var a = 0");
```

```js
/*eslint no-eval: "error"*/
/*eslint-env browser*/

window.eval("var a = 0");
```

```js
/*eslint no-eval: "error"*/
/*eslint-env node*/

global.eval("var a = 0");
```

## Known Limitations

* This rule is warning every `eval()` even if the `eval` is not global's.
  This behavior is in order to detect calls of direct `eval`. Such as:

  ```js
  module.exports = function(eval) {
      // If the value of this `eval` is built-in `eval` function, this is a
      // call of direct `eval`.
      eval("var a = 0");
  };
  ```

* This rule cannot catch renaming the global object. Such as:

  ```js
  var foo = window;
  foo.eval("var a = 0");
  ```

## Related Rules

* [no-implied-eval](no-implied-eval)

## Further Reading

* [Eval is Evil, Part One](https://ericlippert.com/2003/11/01/eval-is-evil-part-one/)
* [How evil is eval](https://javascriptweblog.wordpress.com/2010/04/19/how-evil-is-eval/)

## Version

This rule was introduced in ESLint 0.0.2.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-eval.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-eval.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-eval.md)
