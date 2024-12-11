import { describe, it, expect } from 'vitest';
import validateEmail from './index';

describe('validateEmail', () => {
    it('should validate a correct email with an allowed domain', async () => {
      const result = await validateEmail('user@example.com', {
        allowedDomains: ['example.com'],
      });
      expect(result).toBe('The email address is valid.');
    });
  
    it('should reject an email with a disallowed domain', async () => {
      await expect(
        validateEmail('user@spam.com', {
          disallowedDomains: ['spam.com'],
        })
      ).rejects.toBe('The domain of this email is not authorized.');
    });
  
    it('should reject an email with a domain not in the allowed list', async () => {
      await expect(
        validateEmail('user@unknown.com', {
          allowedDomains: ['example.com'],
        })
      ).rejects.toBe('The domain of this email is not authorized.');
    });
  
    it('should validate an email when no domain restrictions are provided', async () => {
      const result = await validateEmail('user@anydomain.com');
      expect(result).toBe('The email address is valid.');
    });
  
    it('should reject an invalid email format', async () => {
      await expect(validateEmail('invalid-email')).rejects.toBe('The email address is invalid.');
    });
  });
  