# EveryMail

EveryMail (eVery Mail) is a lightweight and configurable JavaScript library for validating email addresses. It allows for both basic and advanced validation based on your specific requirements.

## Features

- Simple email validation.
- Configurable domain restrictions.
- Customizable error messages.
- Works with both `import` and `require` syntax.

## Installation

To install EveryMail, use npm or yarn:

```bash
npm install everymail
```

## Usage

EveryMail can be used to validate email addresses either in a basic way or with advanced domain configuration. Below are usage examples for different scenarios.

### Basic Validation

```javascript
import validateEmail from "everymail";

const email = "test@example.com";

validateEmail(email)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// Output: "The email address is valid."
```

Or using `require`:

```javascript
const validateEmail = require("everymail").default;

const email = "test@example.com";

validateEmail(email)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// Output: "The email address is valid."
```

### Validation with Allowed Domains

```javascript
import validateEmail from "everymail";

const email = "user@allowed.com";
const options = {
  allowedDomains: ["allowed.com", "example.com"],
};

validateEmail(email, options)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// Output: "The email address is valid."
```

### Validation with Disallowed Domains

```javascript
import validateEmail from "everymail";

const email = "user@banned.com";
const options = {
  disallowedDomains: ["banned.com"],
};

validateEmail(email, options)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// Output: "The domain of this email is not authorized."
```

### Custom Error Message

```javascript
import validateEmail from "everymail";

const email = "user@notallowed.com";
const options = {
  allowedDomains: ["allowed.com"],
  errorDisallowedDomainMessage: "Custom error: Domain not allowed."
};

validateEmail(email, options)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// Output: "Custom error: Domain not allowed."
```

## API Reference

### `validateEmail(email: string, options?: ValidationOptions): Promise<string>`

#### Parameters

- `email` (string): The email address to validate.
- `options` (ValidationOptions): An optional configuration object.
  - `allowedDomains` (string[]): A list of domains that are explicitly allowed.
  - `disallowedDomains` (string[]): A list of domains that are explicitly disallowed.
  - `errorDisallowedDomainMessage` (string): A custom error message for disallowed domains.

#### Returns

A `Promise<string>` that resolves with a success message if the email is valid or rejects with an error message otherwise.

## License

EveryMail is licensed under the MIT License. Feel free to use it in your personal or commercial projects.

We welcome contributions and feedback! If you have suggestions or improvements, feel free to open an issue or submit a pull request on the project's GitHub repository.
