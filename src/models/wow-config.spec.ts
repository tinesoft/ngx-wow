import { NgwWowConfig } from './wow-config';

describe('wow-config', () => {
  it('should have sensible default values', () => {
    const config = new NgwWowConfig();

    expect(config.boxClass).toBe('wow');
    expect(config.animateClass).toBe('animated');
    expect(config.offset).toBe(0);
    expect(config.mobile).toBe(true);
    expect(config.live).toBe(true);
    expect(config.callback).toBeUndefined();
    expect(config.scrollContainer).toBeUndefined();
  });
});
