# @replace-params/validation-core

A lightweight validation engine that selects validators by rule type.

## Features

- Validate values using registered validators.
- Select validators through the `type` property.
- Support rule-specific options.
- Return a boolean result.
- Handle invalid and unknown rules safely.
- No runtime dependencies.

## Installation

```bash
npm install @replace-params/validation-core
```

## Usage

```js
import isValid from '@replace-params/validation-core';

isValid('Hello', { type: 'string' }); // true

isValid('', { type: 'non-empty-string' }); // false

isValid(null, { type: 'object', allowNull: true }); // true

isValid('Hello', { type: 'unknown' }); // false
```

## Supported Validators

| Type | Description |
|---|---|
| `string` | Checks whether the value is a string. |
| `object` | Checks whether the value is an object or an array. |
| `non-empty-string` | Checks whether the value is a non-empty string. |

The `object` validator accepts `allowNull: true` to allow `null`.

## API

### `isValid(value, rule)`

- `value` — the value to validate.
- `rule` — an object with a required string property `type`.
- Returns `true` if the selected validator accepts the value; otherwise, returns `false`.

Unknown validator types and invalid rules return `false`.

## Requirements

- Node.js >= 20

## License

MIT