const dataModules = document.querySelectorAll('[data-module]');

dataModules.forEach((module) => {
  module.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
      const moduleName = module.getAttribute('data-module');
      const background = await import(
        /* webpackChunkName: "[request]" */ `./${moduleName}.js`
      );
      background.default();
    } catch (error) {
      console.error(error);
    }
  })
});
