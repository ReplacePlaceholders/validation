# @replace-params/validation

A lightweight validation utility for validating values against rules using registered validators.

## Features

- Validate values using registered validators.
- Select validators through the `type` property.
- Support validator-specific options.
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

You can choose any local name for the imported function:

```js
import validate from '@replace-params/validation';

validate('Hello', { type: 'string' }); // true
```

## Supported Validators

| Type | Description |
|---|---|
| `string` | Checks whether the value is a string. |
| `object` | Checks whether the value is an object or an array. |
| `non-empty-string` | Checks whether the value is a non-empty string. |

### Validator Options

The `object` validator supports the following option:

| Option | Type | Description |
|---|---|---|
| `allowNull` | `boolean` | Allows `null` as a valid value when set to `true`. |

## API

### `isValid(value, rule)`

Validates a value against a specified rule.

**Parameters:**

- `value` (`unknown`) — the value to validate.
- `rule` (`ValidationRule`) — an object containing a required `type` property and optional validator-specific options.

**Returns:** `boolean` — returns `true` if the selected validator accepts the value; otherwise, returns `false`.

Invalid rules and unknown validator types return `false`.

### TypeScript

The package provides TypeScript declarations.

```ts
export type ValidationRule = {
  type: string;
  [key: string]: unknown;
};
```

## Requirements

- Node.js >= 20

## License

MIT