// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

// Código del triángulo.
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const inputL1 = document.getElementById("InputTrianguloL1");
  const inputL2 = document.getElementById("InputTrianguloL2");
  const inputB = document.getElementById("InputTrianguloB");
  const valueL1 = inputL1.value;
  const valueL2 = inputL2.value;
  const valueB = inputB.value;

  const perimetro = perimetroTriangulo(valueL1, valueL2, valueB);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const inputAlt = document.getElementById("InputTrianguloAlt");
  const inputB = document.getElementById("InputTrianguloB");
  const valueAlt = inputAlt.value;
  const valueB = inputB.value;

  const area = areaTriangulo(valueB, valueAlt);
  alert(area);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}