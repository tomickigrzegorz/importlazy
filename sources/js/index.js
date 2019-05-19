import 'core-js/modules/es.array.iterator';

const button = document.getElementById('background');

button.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    const background = await import(/* webpackChunkName: "background" */ `./${button.dataset.module}.js`);
    background.default();
  } catch (error) {
    console.log(error);
  }
})
