const browserPrefixes = ['webkit', 'moz', 'ms', ''];

const addBrowserPrefix = (field: string) =>
  browserPrefixes
    .map(
      prefix =>
        prefix
          ? `${prefix}${field.charAt(0).toUpperCase() + field.slice(1)}`
          : field
    )
    .filter(Boolean)[0];

class FullScreenApi {
  isFullScreenMode = () =>
    document[addBrowserPrefix('fullscreenElement')] != null;
  isFullScreenEnabled = (): boolean =>
    document[addBrowserPrefix('fullscreenEnabled')];
  exitFullScreen = (): void => document[addBrowserPrefix('exitFullscreen')]();
  requestFullScreen = (element: Element): void =>
    element[addBrowserPrefix('requestFullScreen')]();
  addFullScreenChangeListener = (
    element: Element,
    callback: () => void
  ): void => {
    element.addEventListener(
      addBrowserPrefix('fullscreenchange').toLowerCase(),
      callback
    );
  };
  removeFullScreenChangeListener = (
    element: Element,
    callback: () => void
  ): void => {
    element.removeEventListener(
      addBrowserPrefix('fullscreenchange').toLowerCase(),
      callback
    );
  };
}

export default new FullScreenApi();
