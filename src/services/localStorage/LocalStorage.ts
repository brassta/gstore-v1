const MODULE_NAME = '[LocalStorage]';

class LocalStorage {
  localStorage = window.localStorage;

  get(key: string): object | null {
    if (typeof key !== 'string') {
      // tslint:disable-next-line
      console.error(
        `${MODULE_NAME} Cannot get non string key from storage. Got: ${key}`
      );

      return null;
    }

    return JSON.parse(this.localStorage.getItem(key) || '{}')[key];
  }

  set(key: string, value: any): void {
    if (typeof key !== 'string') {
      // tslint:disable-next-line
      console.error(
        `${MODULE_NAME} Cannot set non string key to storage. Got: ${key}`
      );

      return;
    }

    return this.localStorage.setItem(
      key,
      JSON.stringify({ [key]: value }, null, 2)
    );
  }

  remove(key: string) {
    if (typeof key !== 'string') {
      // tslint:disable-next-line
      console.error(
        `${MODULE_NAME} Cannot remove non string key from storage. Got: ${key}`
      );

      return;
    }

    return this.localStorage.removeItem(key);
  }

  clear() {
    this.localStorage.clear();
  }
}

const instance = new LocalStorage();
export { instance as LocalStorage };
