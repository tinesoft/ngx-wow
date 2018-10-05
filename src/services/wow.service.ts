import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { NgwWowConfig } from '../models/index';
import { WindowService } from './window.service';

/**
 * Basic type to represent the `WOW` object from `WOW.js` library.
 */
export interface WOW {
  /**
     * Initializes the WOW.js library
     * @param config the custom configuration to use
     */
  init(config?: NgwWowConfig): void;
}
/**
 * Type definition for the `WOW` object from `WOW.js` library.
 */
declare var WOW: {
  new (config?: NgwWowConfig): WOW;
};

@Injectable()
export class NgwWowService {

  // Window Object
  private window: Window;

  // Observable  source that emits the box that is about to be shown by WOW
  private itemRevealedSource: Subject<HTMLElement>;
  // Observable users can subscribed to, in order to be notified when the box element is about to be shown by WOW
  itemRevealed$: Observable<HTMLElement>;

  constructor(windowService: WindowService) {
    // Observable  source
    this.itemRevealedSource = new Subject<HTMLElement>();
    // Observable  stream
    this.itemRevealed$ = this.itemRevealedSource.asObservable();

    this.window = windowService.nativeWindow;
  }

  init(config?: NgwWowConfig): void {
    // For Angular Universal support
    if (this.window) {
      let wowConfig = config || {};
      // Set callback hook:
      wowConfig.callback = () => this.itemRevealedSource.next();

      // Initializes the library
      new WOW(wowConfig).init();
    }
  }

}
