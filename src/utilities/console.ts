// tslint:disable no-console
// A console debug utility

// const isProd = process.env.NODE_ENV === 'production';

class ConsoleLogger {
  log = (...attr: any[]): void => {
    // if (isProd) {
    //   return;
    // }

    console.log(...attr);
  };

  warn = (...attr: any[]): void => {
    // if (isProd) {
    //   return;
    // }

    console.warn(...attr);
  };
}

export default new ConsoleLogger();
