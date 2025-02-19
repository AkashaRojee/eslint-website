---
title: no-restricted-globals - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/rules/no-restricted-globals.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# no-restricted-globals

Disallows specific global variables.

Disallowing usage of specific global variables can be useful if you want to allow a set of global
variables by enabling an environment, but still want to disallow some of those.

For instance, early Internet Explorer versions exposed the current DOM event as a global variable
`event`, but using this variable has been considered as a bad practice for a long time. Restricting
this will make sure this variable isn't used in browser code.

## Rule Details

This rule allows you to specify global variable names that you don't want to use in your application.

## Options

This rule takes a list of strings, where each string is a global to be restricted:

```json
{
    "rules": {
        "no-restricted-globals": ["error", "event", "fdescribe"]
    }
}
```

Alternatively, the rule also accepts objects, where the global name and an optional custom message are specified:

```json
{
    "rules": {
        "no-restricted-globals": [
            "error",
            {
                "name": "event",
                "message": "Use local parameter instead."
            },
            {
                "name": "fdescribe",
                "message": "Do not commit fdescribe. Use describe instead."
            }
        ]
    }
}
```

Examples of **incorrect** code for sample `"event", "fdescribe"` global variable names:

```js
/*global event, fdescribe*/
/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/

function onClick() {
    console.log(event);
}

fdescribe("foo", function() {
});
```

Examples of **correct** code for a sample `"event"` global variable name:

```js
/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

import event from "event-module";
```

```js
/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

var event = 1;
```

Examples of **incorrect** code for a sample `"event"` global variable name, along with a custom error message:

```js
/*global event*/
/* eslint no-restricted-globals: ["error", { name: "event", message: "Use local parameter instead." }] */

function onClick() {
    console.log(event);    // Unexpected global variable 'event'. Use local parameter instead.
}
```

## Related Rules

* [no-restricted-properties](no-restricted-properties)
* [no-restricted-syntax](no-restricted-syntax)

## Version

This rule was introduced in ESLint 2.3.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-restricted-globals.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-restricted-globals.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/rules/no-restricted-globals.md)
