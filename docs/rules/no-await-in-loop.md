---
title: no-await-in-loop - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-await-in-loop.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-await-in-loop

Disallows `await` inside of loops.

Performing an operation on each element of an iterable is a common task. However, performing an
`await` as part of each operation is an indication that the program is not taking full advantage of
the parallelization benefits of `async`/`await`.

Usually, the code should be refactored to create all the promises at once, then get access to the
results using `Promise.all()`. Otherwise, each successive operation will not start until the
previous one has completed.

Concretely, the following function should be refactored as shown:

```js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return baz(results);
}
```

```js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Good: all asynchronous operations are immediately started.
    results.push(bar(thing));
  }
  // Now that all the asynchronous operations are running, here we wait until they all complete.
  return baz(await Promise.all(results));
}
```

## Rule Details

This rule disallows the use of `await` within loop bodies.

## Examples

Examples of **correct** code for this rule:

```js
/*eslint no-await-in-loop: "error"*/

async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Good: all asynchronous operations are immediately started.
    results.push(bar(thing));
  }
  // Now that all the asynchronous operations are running, here we wait until they all complete.
  return baz(await Promise.all(results));
}
```

Examples of **incorrect** code for this rule:

```js
/*eslint no-await-in-loop: "error"*/

async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return baz(results);
}
```

## When Not To Use It

In many cases the iterations of a loop are not actually independent of each-other. For example, the
output of one iteration might be used as the input to another. Or, loops may be used to retry
asynchronous operations that were unsuccessful. Or, loops may be used to prevent your code from sending
an excessive amount of requests in parallel. In such cases it makes sense to use `await` within a
loop and it is recommended to disable the rule via a standard ESLint disable comment.

## Version

This rule was introduced in ESLint 3.12.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-await-in-loop.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-await-in-loop.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-await-in-loop.md)
