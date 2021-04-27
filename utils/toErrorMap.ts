export type FieldError = {
  __typename?: "FieldError";
  field: string;
  message: string;
};

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};

  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};
