---
title: func-names - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/func-names.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# func-names

Requires or disallows named `function` expressions.

A pattern that's becoming more common is to give function expressions names to aid in debugging. For example:

```js
Foo.prototype.bar = function bar() {};
```

Adding the second `bar` in the above example is optional.  If you leave off the function name then when the function throws an exception you are likely to get something similar to `anonymous function` in the stack trace.  If you provide the optional name for a function expression then you will get the name of the function expression in the stack trace.

## Rule Details

This rule can enforce or disallow the use of named function expressions.

## Options

This rule has a string option:

* `"always"` (default) requires function expressions to have a name
* `"as-needed"` requires function expressions to have a name, if the name isn't assigned automatically per the ECMAScript specification.
* `"never"` disallows named function expressions, except in recursive functions, where a name is needed

This rule has an object option:

* `"generators": "always" | "as-needed" | "never"`
    * `"always"` require named generators
    * `"as-needed"` require named generators if the name isn't assigned automatically per the ECMAScript specification.
    * `"never"` disallow named generators where possible.

When a value for `generators` is not provided the behavior for generator functions falls back to the base option.

Please note that `"always"` and `"as-needed"` require function expressions and function declarations in `export default` declarations to have a name.

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

```js
/*eslint func-names: ["error", "always"]*/

Foo.prototype.bar = function() {};

const cat = {
  meow: function() {}
}

(function() {
    // ...
}())

export default function() {}
```

Examples of **correct** code for this rule with the default `"always"` option:

```js
/*eslint func-names: ["error", "always"]*/

Foo.prototype.bar = function bar() {};

const cat = {
  meow() {}
}

(function bar() {
    // ...
}())

export default function foo() {}
```

### as-needed

ECMAScript 6 introduced a `name` property on all functions. The value of `name` is determined by evaluating the code around the function to see if a name can be inferred. For example, a function assigned to a variable will automatically have a `name` property equal to the name of the variable. The value of `name` is then used in stack traces for easier debugging.

Examples of **incorrect** code for this rule with the `"as-needed"` option:

```js
/*eslint func-names: ["error", "as-needed"]*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())

export default function() {}
```

Examples of **correct** code for this rule with the `"as-needed"` option:

```js
/*eslint func-names: ["error", "as-needed"]*/

var bar = function() {};

const cat = {
  meow: function() {}
}

class C {
    #bar = function() {};
    baz = function() {};
}

quux ??= function() {};

(function bar() {
    // ...
}())

export default function foo() {}
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

```js
/*eslint func-names: ["error", "never"]*/

Foo.prototype.bar = function bar() {};

(function bar() {
    // ...
}())
```

Examples of **correct** code for this rule with the `"never"` option:

```js
/*eslint func-names: ["error", "never"]*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
```

### generators

Examples of **incorrect** code for this rule with the `"always", { "generators": "as-needed" }` options:

```js
/*eslint func-names: ["error", "always", { "generators": "as-needed" }]*/

(function*() {
    // ...
}())
```

Examples of **correct** code for this rule with the `"always", { "generators": "as-needed" }` options:

```js
/*eslint func-names: ["error", "always", { "generators": "as-needed" }]*/

var foo = function*() {};
```

Examples of **incorrect** code for this rule with the `"always", { "generators": "never" }` options:

```js
/*eslint func-names: ["error", "always", { "generators": "never" }]*/

var foo = bar(function *baz() {});
```

Examples of **correct** code for this rule with the `"always", { "generators": "never" }` options:

```js
/*eslint func-names: ["error", "always", { "generators": "never" }]*/

var foo = bar(function *() {});
```

Examples of **incorrect** code for this rule with the `"as-needed", { "generators": "never" }` options:

```js
/*eslint func-names: ["error", "as-needed", { "generators": "never" }]*/

var foo = bar(function *baz() {});
```

Examples of **correct** code for this rule with the `"as-needed", { "generators": "never" }` options:

```js
/*eslint func-names: ["error", "as-needed", { "generators": "never" }]*/

var foo = bar(function *() {});
```

Examples of **incorrect** code for this rule with the `"never", { "generators": "always" }` options:

```js
/*eslint func-names: ["error", "never", { "generators": "always" }]*/

var foo = bar(function *() {});
```

Examples of **correct** code for this rule with the `"never", { "generators": "always" }` options:

```js
/*eslint func-names: ["error", "never", { "generators": "always" }]*/

var foo = bar(function *baz() {});
```

## Compatibility

* **JSCS**: [requireAnonymousFunctions](https://jscs-dev.github.io/rule/requireAnonymousFunctions)
* **JSCS**: [disallowAnonymousFunctions](https://jscs-dev.github.io/rule/disallowAnonymousFunctions)

## Further Reading

* [Functions Explained](http://markdaggett.com/blog/2013/02/15/functions-explained/)
* [Function Names in ES6](http://2ality.com/2015/09/function-names-es6.html)

## Version

This rule was introduced in ESLint 0.4.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/func-names.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/func-names.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/func-names.md)
