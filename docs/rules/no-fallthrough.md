---
title: no-fallthrough - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-fallthrough.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-fallthrough

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

Disallows case statement fallthroughs.

The `switch` statement in JavaScript is one of the more error-prone constructs of the language thanks in part to the ability to "fall through" from one `case` to the next. For example:

```js
switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomethingElse();
}
```

In this example, if `foo` is `1`, then execution will flow through both cases, as the first falls through to the second. You can prevent this by using `break`, as in this example:

```js
switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomethingElse();
}
```

That works fine when you don't want a fallthrough, but what if the fallthrough is intentional, there is no way to indicate that in the language. It's considered a best practice to always indicate when a fallthrough is intentional using a comment which matches the `/falls?\s?through/i` regular expression:

```js
switch(foo) {
    case 1:
        doSomething();
        // falls through

    case 2:
        doSomethingElse();
}

switch(foo) {
    case 1:
        doSomething();
        // fall through

    case 2:
        doSomethingElse();
}

switch(foo) {
    case 1:
        doSomething();
        // fallsthrough

    case 2:
        doSomethingElse();
}

switch(foo) {
    case 1: {
        doSomething();
        // falls through
    }

    case 2: {
        doSomethingElse();
    }
}
```

In this example, there is no confusion as to the expected behavior. It is clear that the first case is meant to fall through to the second case.

## Rule Details

This rule is aimed at eliminating unintentional fallthrough of one case to the other. As such, it flags any fallthrough scenarios that are not marked by a comment.

Examples of **incorrect** code for this rule:

```js
/*eslint no-fallthrough: "error"*/

switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomething();
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-fallthrough: "error"*/

switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
}

function bar(foo) {
    switch(foo) {
        case 1:
            doSomething();
            return;

        case 2:
            doSomething();
    }
}

switch(foo) {
    case 1:
        doSomething();
        throw new Error("Boo!");

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
        // falls through

    case 2:
        doSomething();
}

switch(foo) {
    case 1: {
        doSomething();
        // falls through
    }

    case 2: {
        doSomethingElse();
    }
}
```

Note that the last `case` statement in these examples does not cause a warning because there is nothing to fall through into.

## Options

This rule accepts a single options argument:

* Set the `commentPattern` option to a regular expression string to change the test for intentional fallthrough comment

### commentPattern

Examples of **correct** code for the `{ "commentPattern": "break[\\s\\w]*omitted" }` option:

```js
/*eslint no-fallthrough: ["error", { "commentPattern": "break[\\s\\w]*omitted" }]*/

switch(foo) {
    case 1:
        doSomething();
        // break omitted

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
        // caution: break is omitted intentionally

    default:
        doSomething();
}
```

## When Not To Use It

If you don't want to enforce that each `case` statement should end with a `throw`, `return`, `break`, or comment, then you can safely turn this rule off.

## Related Rules

* [default-case](default-case)

## Version

This rule was introduced in ESLint 0.0.7.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-fallthrough.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-fallthrough.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-fallthrough.md)
