const { StepHelpers } = require('./stepHelpers');

module.exports = {
  Hooks: {
    beforeAllHook: async function() {
      beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await StepHelpers.elementsCommands.loadEnvironment(page);
      }, 120000)
    },
    afterAllHook: async function() {
      afterAll(() => {
        browser.close(3000);
      });
    }
  }
};
