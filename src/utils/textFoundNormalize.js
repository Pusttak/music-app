export const textFoundNormalize = text => {
  return text
    .split(' ')
    .filter(item => item)
    .join(' ')
    .toLowerCase();
};
