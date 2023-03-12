const formulario = document.getElementById('Formulario');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  const age = document.querySelector('.age').value;
  const describes = document.querySelector('.describes').value;
  const recommend = document.querySelector('input[name="yes"]:checked')?.value;
  const languages = [];

  const inputCValue = document.querySelector('#C').checked;
  const inputCppValue = document.querySelector('#C\\+\\+').checked;
  const inputCsharpValue = document.querySelector('#C\\#').checked;
  const inputJavaValue = document.querySelector('#Java').checked;
  const inputPythonValue = document.querySelector('#Python').checked;
  const inputJSValue = document.querySelector('#JavaScript').checked;
  const inputReactValue = document.querySelector('#React').checked;
  const inputAngularValue = document.querySelector('#Angular').checked;
  const inputDjangoValue = document.querySelector('#Django').checked;
  const inputSpringValue = document.querySelector('#Spring').checked;

  if (inputCValue) {
    languages.push('C');
  }
  if (inputCppValue) {
    languages.push('C++');
  }
  if (inputCsharpValue) {
    languages.push('C#');
  }
  if (inputJavaValue) {
    languages.push('Java');
  }
  if (inputPythonValue) {
    languages.push('Python');
  }
  if (inputJSValue) {
    languages.push('JavaScript');
  }
  if (inputReactValue) {
    languages.push('React');
  }
  if (inputAngularValue) {
    languages.push('Angular');
  }
  if (inputDjangoValue) {
    languages.push('Django');
  }
  if (inputSpringValue) {
    languages.push('Spring');
  }

  const suggestions = document.querySelector('#suggestions').value;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Age: ${age}`);
  console.log(`Which option best describes you?: ${describes}`);
  console.log(`Would you recommend GeekForGeeks to a friend?: ${recommend}`);
  console.log(`Languages and frameworks known: ${languages}`);
  console.log(`Any comments or suggestions: ${suggestions}`);
});
