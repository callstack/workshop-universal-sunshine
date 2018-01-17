/* eslint-env jasmine */
/* global element by */

/**
 * @flow
 */
describe('HomeView', () => {
  it('should be visible', async () => {
    const text = element(by.id('homeView'));
    await expect(text).toBeVisible();
  });
});
