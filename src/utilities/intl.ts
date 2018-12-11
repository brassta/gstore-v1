// TODO@martins find a scalable-ier way of doing this :) perhaps by using https://github.com/yahoo/react-intl/wiki/Components#formattedplural
export const formatOrdinalNumber = (num: number) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = num % 100;
  return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};
