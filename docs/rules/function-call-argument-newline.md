---
title: function-call-argument-newline - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/function-call-argument-newline.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# function-call-argument-newline

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Enforces line breaks between arguments of a function call.

A number of style guides require or disallow line breaks between arguments of a function call.

## Rule Details

This rule enforces line breaks between arguments of a function call.

## Options

This rule has a string option:

* `"always"` (default) requires line breaks between arguments
* `"never"` disallows line breaks between arguments
* `"consistent"` requires consistent usage of line breaks between arguments

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

```js
/*eslint function-call-argument-newline: ["error", "always"]*/

foo("one", "two", "three");

bar("one", "two", {
    one: 1,
    two: 2
});

baz("one", "two", (x) => {
    console.log(x);
});
```

Examples of **correct** code for this rule with the default `"always"` option:

```js
/*eslint function-call-argument-newline: ["error", "always"]*/

foo(
    "one",
    "two",
    "three"
);

bar(
    "one",
    "two",
    { one: 1, two: 2 }
);
// or
bar(
    "one",
    "two",
    {
        one: 1,
        two: 2
    }
);

baz(
    "one",
    "two",
    (x) => {
        console.log(x);
    }
);
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

```js
/*eslint function-call-argument-newline: ["error", "never"]*/

foo(
    "one",
    "two", "three"
);

bar(
    "one",
    "two", {
        one: 1,
        two: 2
    }
);

baz(
    "one",
    "two", (x) => {
        console.log(x);
    }
);
```

Examples of **correct** code for this rule with the `"never"` option:

```js
/*eslint function-call-argument-newline: ["error", "never"]*/

foo("one", "two", "three");
// or
foo(
    "one", "two", "three"
);

bar("one", "two", { one: 1, two: 2 });
// or
bar("one", "two", {
    one: 1,
    two: 2
});

baz("one", "two", (x) => {
    console.log(x);
});
```

### consistent

Examples of **incorrect** code for this rule with the `"consistent"` option:

```js
/*eslint function-call-argument-newline: ["error", "consistent"]*/

foo("one", "two",
    "three");
//or
foo("one",
    "two", "three");

bar("one", "two",
    { one: 1, two: 2}
);

baz("one", "two",
    (x) => { console.log(x); }
);
```

Examples of **correct** code for this rule with the `"consistent"` option:

```js
/*eslint function-call-argument-newline: ["error", "consistent"]*/

foo("one", "two", "three");
// or
foo(
    "one",
    "two",
    "three"
);

bar("one", "two", {
    one: 1,
    two: 2
});
// or
bar(
    "one",
    "two",
    { one: 1, two: 2 }
);
// or
bar(
    "one",
    "two",
    {
        one: 1,
        two: 2
    }
);

baz("one", "two", (x) => {
    console.log(x);
});
// or
baz(
    "one",
    "two",
    (x) => {
        console.log(x);
    }
);
```

## When Not To Use It

If you don't want to enforce line breaks between arguments, don't enable this rule.

## Related Rules

* [function-paren-newline](function-paren-newline)
* [func-call-spacing](func-call-spacing)
* [object-property-newline](object-property-newline)
* [array-element-newline](array-element-newline)

## Version

This rule was introduced in ESLint 6.2.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/function-call-argument-newline.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/function-call-argument-newline.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/function-call-argument-newline.md)
