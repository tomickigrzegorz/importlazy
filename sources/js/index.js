document.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.dataset.module) {
    try {
      const background = await import(
        /* webpackChunkName: "[request]" */ `./modules/${event.target.dataset.module}.js`
      );
      background.default();
    } catch (error) {
      console.error(error);
    }
  }
});
