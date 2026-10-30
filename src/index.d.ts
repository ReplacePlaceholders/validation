export type ValidationRule = {
  type: string;
  [key: string]: unknown;
};

declare const isValid: (
  value: unknown,
  rule: ValidationRule,
) => boolean;

export default isValid;