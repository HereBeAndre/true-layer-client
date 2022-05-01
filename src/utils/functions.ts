// USAGE ~ responsible for creating an object of { key: value } pairs from the fields in the form that make up the query.
export const serializeFormQuery = (key: string, fieldValue: string) => ({ [key]: fieldValue });
