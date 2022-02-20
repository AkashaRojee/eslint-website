---
title: no-unsafe-negation - Fixes and Suggestions
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/user-guide/fixes-and-suggestions/no-unsafe-negation.md
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-unsafe-negation

This rule disallows negating the left operand of relational operators.

## Error Message

`Unexpected negating the left operand of [insert operator here] operator.`

This error message is displayed when there is an unexpected negating of the left operand of relational operators (`in`, `instanceof`).

Example of **incorrect** code for this rule:

```js
/*eslint no-unsafe-negation: "error"*/

!a in b

(!a in b)

!(a) in b

!a instanceof b

(!a instanceof b)

!(a) instanceof b
```

If the rule's `enforceForOrderingRelations` option is set to `true`, then the error message is also displayed for ordering relational operators (`<`, `>`, `<=`, `>=`).

Example of **incorrect** code for this rule, with the `{ "enforceForOrderingRelations": true }` option:

```js
/*eslint no-unsafe-negation: ["error", { "enforceForOrderingRelations": true }]*/

if (! a < b) {}

while (! a > b) {}

foo = ! a <= b;

foo = ! a >= b;

! a <= b
```

## Suggestions

The problem reported by this rule may be fixable by either of the following editor suggestions:

- `suggestNegatedExpression` negates the expression instead of its left operand
- `suggestParenthesisedNegation` wraps the negation in parenthesis to make the intention explicit

### suggestNegatedExpression

This suggestion negates the operator expression instead of its left operand.

This _changes_ the current behavior.

Examples of **correct** code for this rule, fixed with the `suggestNegatedExpression` suggestion:

```js
/*eslint no-unsafe-negation: "error"*/

!(a in b) //Originally: !a in b

(!(a in b)) //Originally: (!a in b)

!((a) in b) //Originally: !(a) in b

!(a instanceof b) //Originally: !a instanceof b

(!(a instanceof b)) //Originally (!a instanceof b)

!((a) instanceof b) //Originally: !(a) instanceof b
```

Examples of **correct** code for this rule, with the `{ "enforceForOrderingRelations": true }` option, fixed with the `suggestNegatedExpression` suggestion:

```js
/*eslint no-unsafe-negation: ["error", { "enforceForOrderingRelations": true }]*/

if (!( a < b)) {} //Originally: if (! a < b) {}

while (!( a > b)) {} //Originally: while (! a > b) {}

foo = !( a <= b); //Originally: foo = ! a <= b;

foo = !( a >= b); //Originally: foo = ! a >= b;

!( a <= b) //Originally: ! a <= b
```

### suggestParenthesisedNegation

This suggestion wraps the negation in paranthesis to make the intention explicit.

This _preserves_ the current behavior.

Examples of **correct** code, fixed with the `suggestParenthesisedNegation` suggestion:

```js
/*eslint no-unsafe-negation: "error"]*/

(!a) in b //Originally: !a in b

((!a) in b) //Originally: (!a in b)

(!(a)) in b //Originally: !(a) in b

(!a) instanceof b //Originally: !a instanceof b

((!a) instanceof b) //Originally: (!a instanceof b)

(!(a)) instanceof b //Originally: !(a) instanceof b
```

Examples of **correct** code for this rule, with the `{ "enforceForOrderingRelations": true }` option, fixed with the `suggestParenthesisedNegation` suggestion:

```js
/*eslint no-unsafe-negation: ["error", { "enforceForOrderingRelations": true }]*/

if ((! a) < b) {} //Originally: if (! a < b) {}

while ((! a) > b) {} //Originally: while (! a > b) {}

foo = (! a) <= b; //Originally: foo = ! a <= b;

foo = (! a) >= b; //Originally: foo = ! a >= b;

(! a) <= b //Originally: ! a <= b
```

## Version

These suggestions were introduced in ESLint 6.8.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-unsafe-negation.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-unsafe-negation.js)
* [Documentation source - Rule](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-unsafe-negation.md)
* [Documentation source - Fixes and Suggestions](https://github.com/eslint/eslint/tree/HEAD/docs/user-guide/fixes-and-suggestions/no-unsafe-negation.md)