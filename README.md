# @replace-params/validation

A lightweight validation utility that validates values using rules and registered validators.

## Features

- Validate values using registered validators.
- Select validators through the `type` property.
- Support rule-specific options.
- Return a boolean result.
- Handle invalid rules and unknown validator types safely.
- No runtime dependencies.

## Installation

```bash
npm install @replace-params/validation
```

## Usage

```js
import isValid from '@replace-params/validation';

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

Invalid rules and unknown validator types return `false`.

## Requirements

- Node.js >= 20

## License

MIT