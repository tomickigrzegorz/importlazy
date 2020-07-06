const button = document.getElementById('background');

button.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    const moduleName = button.getAttribute('data-module');
    const background = await import(/* webpackChunkName: "background" */ `./${moduleName}.js`);
    background.default();
  } catch (error) {
    console.log(error);
  }
})
