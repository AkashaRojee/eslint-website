---
title: space-before-blocks - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/space-before-blocks.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# space-before-blocks

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Requires Or disallows space before blocks.

Consistency is an important part of any style guide.
While it is a personal preference where to put the opening brace of blocks,
it should be consistent across a whole project.
Having an inconsistent style distracts the reader from seeing the important parts of the code.

## Rule Details

This rule will enforce consistency of spacing before blocks. It is only applied on blocks that don’t begin on a new line.

* This rule ignores spacing which is between `=>` and a block. The spacing is handled by the `arrow-spacing` rule.
* This rule ignores spacing which is between a keyword and a block. The spacing is handled by the `keyword-spacing` rule.
* This rule ignores spacing which is between `:` of a switch case and a block. The spacing is handled by the `switch-colon-spacing` rule.

## Options

This rule takes one argument. If it is `"always"` then blocks must always have at least one preceding space. If `"never"`
then all blocks should never have any preceding space. If different spacing is desired for function
blocks, keyword blocks and classes, an optional configuration object can be passed as the rule argument to
configure the cases separately. If any value in the configuration object is `"off"`, then neither style will be enforced for blocks of that kind.

( e.g. `{ "functions": "never", "keywords": "always", "classes": "always" }` )

The default is `"always"`.

### "always"

Examples of **incorrect** code for this rule with the "always" option:

```js
/*eslint space-before-blocks: "error"*/

if (a){
    b();
}

function a(){}

for (;;){
    b();
}

try {} catch(a){}

class Foo{
  constructor(){}
}
```

Examples of **correct** code for this rule with the `"always"` option:

```js
/*eslint space-before-blocks: "error"*/

if (a) {
    b();
}

if (a) {
    b();
} else{ /*no error. this is checked by `keyword-spacing` rule.*/
    c();
}

class C {
    static{} /*no error. this is checked by `keyword-spacing` rule.*/
}

function a() {}

for (;;) {
    b();
}

try {} catch(a) {}
```

### "never"

Examples of **incorrect** code for this rule with the `"never"` option:

```js
/*eslint space-before-blocks: ["error", "never"]*/

if (a) {
    b();
}

function a() {}

for (;;) {
    b();
}

try {} catch(a) {}
```

Examples of **correct** code for this rule with the `"never"` option:

```js
/*eslint space-before-blocks: ["error", "never"]*/

if (a){
    b();
}

function a(){}

for (;;){
    b();
}

try{} catch(a){}

class Foo{
  constructor(){}
}
```

Examples of **incorrect** code for this rule when configured `{ "functions": "never", "keywords": "always", "classes": "never" }`:

```js
/*eslint space-before-blocks: ["error", { "functions": "never", "keywords": "always", "classes": "never" }]*/
/*eslint-env es6*/

function a() {}

try {} catch(a){}

class Foo{
  constructor() {}
}
```

Examples of **correct** code for this rule when configured `{ "functions": "never", "keywords": "always", "classes": "never" }`:

```js
/*eslint space-before-blocks: ["error", { "functions": "never", "keywords": "always", "classes": "never" }]*/
/*eslint-env es6*/

for (;;) {
  // ...
}

describe(function(){
  // ...
});

class Foo{
  constructor(){}
}
```

Examples of **incorrect** code for this rule when configured `{ "functions": "always", "keywords": "never", "classes": "never" }`:

```js
/*eslint space-before-blocks: ["error", { "functions": "always", "keywords": "never", "classes": "never" }]*/
/*eslint-env es6*/

function a(){}

try {} catch(a) {}

class Foo {
  constructor(){}
}
```

Examples of **correct** code for this rule when configured `{ "functions": "always", "keywords": "never", "classes": "never" }`:

```js
/*eslint space-before-blocks: ["error", { "functions": "always", "keywords": "never", "classes": "never" }]*/
/*eslint-env es6*/

if (a){
  b();
}

var a = function() {}

class Foo{
  constructor() {}
}
```

Examples of **incorrect** code for this rule when configured `{ "functions": "never", "keywords": "never", "classes": "always" }`:

```js
/*eslint space-before-blocks: ["error", { "functions": "never", "keywords": "never", "classes": "always" }]*/
/*eslint-env es6*/

class Foo{
  constructor(){}
}
```

Examples of **correct** code for this rule when configured `{ "functions": "never", "keywords": "never", "classes": "always" }`:

```js
/*eslint space-before-blocks: ["error", { "functions": "never", "keywords": "never", "classes": "always" }]*/
/*eslint-env es6*/

class Foo {
  constructor(){}
}
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing before blocks.

## Related Rules

* [keyword-spacing](keyword-spacing)
* [arrow-spacing](arrow-spacing)
* [switch-colon-spacing](switch-colon-spacing)
* [brace-style](brace-style)

## Version

This rule was introduced in ESLint 0.9.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/space-before-blocks.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/space-before-blocks.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/space-before-blocks.md)
