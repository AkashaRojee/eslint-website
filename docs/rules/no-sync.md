---
title: no-sync - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-sync.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-sync

Disallows synchronous methods.

This rule was **deprecated** in ESLint v7.0.0. Please use the corresponding rule in [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node).

In Node.js, most I/O is done through asynchronous methods. However, there are often synchronous versions of the asynchronous methods. For example, `fs.exists()` and `fs.existsSync()`. In some contexts, using synchronous operations is okay (if, as with ESLint, you are writing a command line utility). However, in other contexts the use of synchronous operations is considered a bad practice that should be avoided. For example, if you are running a high-travel web server on Node.js, you should consider carefully if you want to allow any synchronous operations that could lock up the server.

## Rule Details

This rule is aimed at preventing synchronous methods from being called in Node.js. It looks specifically for the method suffix "`Sync`" (as is the convention with Node.js operations).

## Options

This rule has an optional object option `{ allowAtRootLevel: <boolean> }`, which determines whether synchronous methods should be allowed at the top level of a file, outside of any functions. This option defaults to `false`.

Examples of **incorrect** code for this rule with the default `{ allowAtRootLevel: false }` option:

```js
/*eslint no-sync: "error"*/

fs.existsSync(somePath);

function foo() {
  var contents = fs.readFileSync(somePath).toString();
}
```

Examples of **correct** code for this rule with the default `{ allowAtRootLevel: false }` option:

```js
/*eslint no-sync: "error"*/

obj.sync();

async(function() {
    // ...
});
```

Examples of **incorrect** code for this rule with the `{ allowAtRootLevel: true }` option

```js
/*eslint no-sync: ["error", { allowAtRootLevel: true }]*/

function foo() {
  var contents = fs.readFileSync(somePath).toString();
}

var bar = baz => fs.readFileSync(qux);
```

Examples of **correct** code for this rule with the `{ allowAtRootLevel: true }` option

```js
/*eslint no-sync: ["error", { allowAtRootLevel: true }]*/

fs.readFileSync(somePath).toString();
```

## When Not To Use It

If you want to allow synchronous operations in your script, do not enable this rule.

## Version

This rule was introduced in ESLint 0.0.9.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-sync.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-sync.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-sync.md)
