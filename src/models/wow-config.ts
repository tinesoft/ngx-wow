/**
 * Configuration for the NgwWowService service.
 */
export class NgwWowConfig {

  /**
   * Class name that reveals the hidden box when user scrolls.
   */
  boxClass?= 'wow';

  /**
   * Class name that triggers the CSS animations ('animated' by default for the animate.css library)
   */
  animateClass?= 'animated';

  /**
   * Define the distance between the bottom of browser viewport and the top of hidden box.
   * When the user scrolls and reach this distance the hidden box is revealed.
   */
  offset?= 0;

  /**
   * Turn on/off WOW.js on mobile devices.
   */
  mobile?= true;

  /**
   * Consatantly check for new WOW elements on the page.
   */
  live?= true;

  /**
   * Callback called when the given box element is shown.
   */
  callback?: (box: HTMLElement) => void;

  scrollContainer?: string;
}
