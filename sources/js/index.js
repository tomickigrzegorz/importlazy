const dataModules = document.querySelectorAll('[data-module]');


for (let i = 0; i < dataModules.length; i++) {
  dataModules[i].addEventListener('click', async (event) => {
    event.preventDefault();
    try {
      const moduleName = dataModules[i].getAttribute('data-module');
      const background = await import(
        /* webpackChunkName: "[request]" */ `./${moduleName}.js`
      );
      background.default();
    } catch (error) {
      console.error(error);
    }
  });
}
