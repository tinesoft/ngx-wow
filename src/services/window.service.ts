import { Injectable } from '@angular/core';

/**
 * Service to interact with the window object.
 */
@Injectable()
export class WindowService {

  get nativeWindow(): Window {
    return _window();
  }
}

function _window(): Window {
  // Return the global native browser window object
  return typeof window !== 'undefined' ? window : undefined;
}
