import Cookie from './cookie';

const domain =
  location.hostname.indexOf('localhost') === 0
    ? location.hostname
    : location.hostname
        .split('.')
        .reverse()
        .reduceRight(
          (accumulator, currentValue, index) =>
            index < 2 ? `${accumulator}.${currentValue}` : '',
          ''
        );

export default new Cookie({ domain });
