/* eslint-env jasmine */
/* global element by */

describe('HomeScreen', () => {
  it('should render', async () => {
    await expect(element(by.id('homeView'))).toBeVisible();
  });
});
