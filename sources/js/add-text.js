export default function addText() {
  const textH1 = document.querySelector('h1');
  const text = textH1.textContent;
  textH1.textContent = text === 'text changed' ? 'TEXT' : 'text changed';

}
