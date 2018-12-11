// lapin

import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';

const objectMap = (obj, fn, ctx) => {
  const ret = {};

  Object.keys(obj).forEach(k => {
    ret[k] = fn.call(ctx || null, k, obj[k]);
  });

  return ret;
};

const MESSAGES_PATTERN = '.persistent_cache/build/messages/**/*.json';
const LANG_DIR = 'src/intl/locales/';

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
const defaultMessages = globSync(MESSAGES_PATTERN)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    const finalCollection = collection;
    descriptors.forEach(({ id, defaultMessage }) => {
      // eslint-disable-next-line
      if (finalCollection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }

      finalCollection[id] = defaultMessage;
    });

    return finalCollection;
  }, {});

mkdirpSync(LANG_DIR);

const { locales } = require('../package.json');

const translateIds = Object.keys(defaultMessages).sort((a, b) => {
  if (a !== b) {
    return a < b ? -1 : 1;
  }
  return 0;
});

locales.forEach(locale => {
  const filename = `${LANG_DIR}${locale}.json`;
  let oldFile = '';
  let oldFileContent = {};

  if (fs.existsSync(filename)) {
    oldFile = fs.readFileSync(filename, 'utf-8');
    oldFileContent = JSON.parse(oldFile);
  }

  let mergedObj;

  // default locale
  if (locale === 'en') {
    mergedObj = defaultMessages;
  } else {
    mergedObj = Object.assign(
      {},
      objectMap(defaultMessages, (_, message) => message),
      oldFileContent,
    );
  }

  const objectToWrite = translateIds.reduce((acc, item) => {
    acc[item] = mergedObj[item];
    return acc;
  }, {});

  const fileToWrite = JSON.stringify(objectToWrite, null, 2);
  
  if (fileToWrite !== oldFile) {
    fs.writeFileSync(filename, fileToWrite);
  }
});
