---
title: no-dupe-class-members - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-dupe-class-members.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-dupe-class-members

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

Disallows duplicate name in class members.

If there are declarations of the same name in class members, the last declaration overwrites other declarations silently.
It can cause unexpected behaviors.

```js
/*eslint-env es6*/

class Foo {
  bar() { console.log("hello"); }
  bar() { console.log("goodbye"); }
}

var foo = new Foo();
foo.bar(); // goodbye
```

## Rule Details

This rule is aimed to flag the use of duplicate names in class members.

## Examples

Examples of **incorrect** code for this rule:

```js
/*eslint no-dupe-class-members: "error"*/

class Foo {
  bar() { }
  bar() { }
}

class Foo {
  bar() { }
  get bar() { }
}

class Foo {
  bar;
  bar;
}

class Foo {
  bar;
  bar() { }
}

class Foo {
  static bar() { }
  static bar() { }
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-dupe-class-members: "error"*/

class Foo {
  bar() { }
  qux() { }
}

class Foo {
  get bar() { }
  set bar(value) { }
}

class Foo {
  bar;
  qux;
}

class Foo {
  bar;
  qux() { }
}

class Foo {
  static bar() { }
  bar() { }
}
```

## When Not To Use It

This rule should not be used in ES3/5 environments.

In ES2015 (ES6) or later, if you don't want to be notified about duplicate names in class members, you can safely disable this rule.

It's also safe to disable this rule when using TypeScript because TypeScript's compiler already checks for duplicate function implementations.

## Version

This rule was introduced in ESLint 1.2.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-dupe-class-members.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-dupe-class-members.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-dupe-class-members.md)
