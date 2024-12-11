interface ValidationOptions {
  allowedDomains?: string[];
  disallowedDomains?: string[];
  errorDisallowedDomainMessage?: string;
}

/**
 * Options for email validation.
 * @typedef {Object} ValidationOptions
 * @property {string[]} [allowedDomains] - List of allowed domains. If specified, only emails with these domains will be accepted.
 * @property {string[]} [disallowedDomains] - List of disallowed domains. Emails with these domains will be rejected.
 * @property {string} [errorDisallowedDomainMessage] - Custom error message for disallowed domains.
 */

/**
 * Validates an email address based on the specified domain restrictions.
 *
 * @param {string} email - The email address to validate.
 * @param {ValidationOptions} [options={}] - Validation options for domain restrictions.
 * @returns {Promise<string>} Resolves with a success message if the email is valid, otherwise rejects with an error message.
 *
 * @example
 * // Example 1: Validate an email with allowed domains
 * validateEmail('user@example.com', { allowedDomains: ['example.com'] })
 *   .then(console.log) // Output: "The email address is valid."
 *   .catch(console.error);
 *
 * @example
 * // Example 2: Reject an email with a disallowed domain
 * validateEmail('user@spam.com', { disallowedDomains: ['spam.com'] })
 *   .then(console.log)
 *   .catch(console.error); // Output: "The domain of this email is not authorized."
 *
 * @example
 * // Example 3: Reject an email not in the allowed domains
 * validateEmail('user@unknown.com', { allowedDomains: ['example.com'] })
 *   .then(console.log)
 *   .catch(console.error); // Output: "The domain of this email is not authorized."
 *
 * @example
 * // Example 4: Validate an email without domain restrictions
 * validateEmail('user@anydomain.com')
 *   .then(console.log) // Output: "The email address is valid."
 *   .catch(console.error);
 *
 * @example
 * // Example 5: Reject an email with invalid format
 * validateEmail('invalid-email')
 *   .then(console.log)
 *   .catch(console.error); // Output: "The email address is invalid."
 */

const validateEmail = (
  email: string,
  options: ValidationOptions = {}
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const {
      allowedDomains = [],
      disallowedDomains = [],
      errorDisallowedDomainMessage = "The domain of this email is not authorized.",
    } = options;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return reject("The email address is invalid.");
    }

    const [_, domain] = email.split("@");

    // Checking for banned domains
    if (disallowedDomains.includes(domain)) {
      return reject(
        options.errorDisallowedDomainMessage || errorDisallowedDomainMessage
      );
    }

    // Verifying authorized domains
    if (allowedDomains.length > 0 && !allowedDomains.includes(domain)) {
      return reject(
        options.errorDisallowedDomainMessage || errorDisallowedDomainMessage
      );
    }

    resolve("The email address is valid.");
  });
};

export default validateEmail;
