
class Elementi {
    constructor(tipo, id, imgSrc, label1, label2, optionalLabel = "") {
        this.tipo = tipo
        this.id = id
        this.img = new Image
        this.img.src = imgSrc
        this.label1 = label1
        this.label2 = label2
        this.optionalLabel = optionalLabel
    }
}
let Figuritas = []



let Cuadrado = new Elementi("Figura Plana", "Cuadrado", "./src/cuadrado.png", "Lado", "Lado")
let Rectangulo = new Elementi("Figura Plana", "Rectangulo", "./src/Rectangulo.png", "Base", "Altura")
let Triangulo = new Elementi("Figura Plana", "Triangulo", "./src/Triangulo.png", "Base", "Altura")
let Rombo = new Elementi("Figura Plana", "Rombo", "./src/Rombo.png", "Dg Mayor", "Dg Menor")
let Trapecio = new Elementi("Figura Plana", "Trapecio", "./src/Trapecio.png", "Base Mayor", "Base Menor", "Altura")
let Circulo = new Elementi("Figura Plana", "Circulo", "./src/Circulo.png", "Radio", "Altura")
let Esfera = new Elementi("Solido", "Esfera", "./src/Esfera.png", "Radio", "Altura")
let Cubo = new Elementi("Solido", "Cubo", "./src/Cubo.png", "Lado", "Lado")
let Paralelepipedo = new Elementi("Solido", "Paralelepipedo", "./src/Paralelepipedo.png", "A : altura", "B :base ", "C: base menor")
let Cilindro = new Elementi("Solido", "Cilindro", "./src/Cilindro.png", "Radio", "Altura")
let Cono = new Elementi("Solido", "Cono", "./src/Cono.png", "Radio", "Altura")








Figuritas.push(Cuadrado, Rectangulo, Triangulo, Rombo, Trapecio, Circulo, Esfera, Cubo, Paralelepipedo, Cilindro, Cono)

Figuritas.forEach(element => {
    if (element.id === "Trapecio" || element.id === "Paralelepipedo") {
        document.getElementById("spanElements").innerHTML += `<div>
        <h2> ${element.tipo} </h2>
        <h3>${element.id} </h3>
        <img src="${element.img.src}" width="300px" alt="">
        <div>
          <form>
              <label for="label1${element.id}">${element.label1}:</label><br>
              <input type="number" id="label1${element.id}" ><br>
              <label for="label2${element.id}">${element.label2}:</label><br>
              <input type="number" id="label2${element.id}"> <br>
              <label for="label3${element.id}">${element.optionalLabel}</label><br>
              <input type="number" id="label3${element.id}"> <br>
              <button type="button" onclick="${element.id}Algoritmo()">Submit</button>
              <p id="spanResults${element.id}" > </p> 
          </form>
         </div>
      </div>`
    } else if (element.id === "Circulo" || element.id === "Esfera" || element.id === "Cubo") {
        document.getElementById("spanElements").innerHTML += `<div>
        <h2> ${element.tipo} </h2>
        <h3>${element.id} </h3>
        <img src="${element.img.src}" width="300px" alt="">
        <div>
          <form>
              <label for="label1${element.id}">${element.label1}:</label><br>
              <input type="number" id="label1${element.id}" ><br>
              <button type="button" onclick="${element.id}Algoritmo()">Submit</button>
              <p id="spanResults${element.id}" > </p> 
          </form>
         </div>
      </div>`
    } else
        document.getElementById("spanElements").innerHTML += `<div>
    <h2> ${element.tipo} </h2>
    <h3>${element.id} </h3>
    <img src="${element.img.src}" width="300px" alt="">
    <div>
      <form>
          <label for="label1${element.id}">${element.label1}:</label><br>
          <input type="number" id="label1${element.id}" ><br>
          <label for="label2${element.id}">${element.label2}:</label><br>
          <input type="number" id="label2${element.id}"> <br>
          <button type="button" onclick="${element.id}Algoritmo()">Submit</button>
          <p id="spanResults${element.id}" > </p> 
      </form>
     </div>
  </div>`

}
);

// ------------------------------------------------------------FUNCIONES MATEMATICAS FIGURAS PLANAS----------------------------

function CuadradoAlgoritmo(value1, value2) {
    value1 = document.getElementById("label1Cuadrado").valueAsNumber
    value2 = document.getElementById("label2Cuadrado").valueAsNumber
    document.getElementById("label1Cuadrado").value = ""
    document.getElementById("label2Cuadrado").value = ""
    return document.getElementById("spanResultsCuadrado").innerHTML = `Area = ${value1 * value2} <br> Perimetro = ${value1 + value1 + value2 + value2}`
}
function RectanguloAlgoritmo(value1, value2) {
    value1 = document.getElementById("label1Rectangulo").valueAsNumber
    value2 = document.getElementById("label2Rectangulo").valueAsNumber
    document.getElementById("label1Rectangulo").value = ""
    document.getElementById("label2Rectangulo").value = ""
    return document.getElementById("spanResultsRectangulo").innerHTML = `Area = ${value1 * value2} <br> Perimetro = ${value1 + value1 + value2 + value2}`
}
function TrianguloAlgoritmo(value1, value2) {
    value1 = document.getElementById("label1Triangulo").value
    value2 = document.getElementById("label2Triangulo").value
    document.getElementById("label1Triangulo").value = ""
    document.getElementById("label2Triangulo").value = ""
    return document.getElementById("spanResultsTriangulo").innerHTML = `Area = ${(value1 * value2) / 2}`
}
function RomboAlgoritmo(value1, value2) {
    value1 = document.getElementById("label1Rombo").value
    value2 = document.getElementById("label2Rombo").value
    document.getElementById("label1Rombo").value = ""
    document.getElementById("label2Rombo").value = ""
    return document.getElementById("spanResultsRombo").innerHTML = `Area = ${(value1 * value2) / 2}`
}
function TrapecioAlgoritmo(value1, value2, value3) {
    value1 = document.getElementById("label1Trapecio").valueAsNumber
    value2 = document.getElementById("label2Trapecio").valueAsNumber
    value3 = document.getElementById("label3Trapecio").valueAsNumber
    document.getElementById("label1Trapecio").value = ""
    document.getElementById("label2Trapecio").value = ""
    document.getElementById("label3Trapecio").value = ""
    return document.getElementById("spanResultsTrapecio").innerHTML = `Area = ${((value1 + value2) / 2) * value3}`
}
function CirculoAlgoritmo(value1) {
    let Pipi = Math.PI
    value1 = document.getElementById("label1Circulo").value
    document.getElementById("label1Circulo").value = ""
    return document.getElementById("spanResultsCirculo").innerHTML = `Area = ${(Pipi * Math.pow(value1, 2))} <br> Perimetro =${2 * Pipi * value1}`
}

// ------------------------------------------------------------FUNCIONES MATEMATICAS FIGURAS SOLIDAS----------------------------

function EsferaAlgoritmo(value1) {
    let Pipi = Math.PI
    value1 = document.getElementById("label1Esfera").value
    document.getElementById("label1Esfera").value = ""
    return document.getElementById("spanResultsEsfera").innerHTML = `Volumen = ${(4 * Pipi * Math.pow(value1, 3) / 3)} `
}

function CuboAlgoritmo(value1) {
    value1 = document.getElementById("label1Cubo").value
    document.getElementById("label1Cubo").value = ""
    return document.getElementById("spanResultsCubo").innerHTML = `Volumen = ${(value1, 3)} `
}


function ParalelepipedoAlgoritmo(value1, value2, value3) {
    value1 = document.getElementById("label1Paralelepipedo").valueAsNumber
    value2 = document.getElementById("label2Paralelepipedo").valueAsNumber
    value3 = document.getElementById("label3Paralelepipedo").valueAsNumber
    document.getElementById("label1Paralelepipedo").value = ""
    document.getElementById("label2Paralelepipedo").value = ""
    document.getElementById("label3Paralelepipedo").value = ""
    return document.getElementById("spanResultsParalelepipedo").innerHTML = `Volumen = ${value1 * value2 * value3}`
}


function CilindroAlgoritmo(value1, value2) {
    let Pipi = Math.PI
    value1 = document.getElementById("label1Cilindro").value
    value2 = document.getElementById("label2Cilindro").value
    document.getElementById("label1Cilindro").value = ""
    document.getElementById("label2Cilindro").value = ""
    return document.getElementById("spanResultsCilindro").innerHTML = `Area = ${(Pipi * Math.pow(value1, 2) * value2)}`
}


function ConoAlgoritmo(value1, value2) {
    let Pipi = Math.PI
    value1 = document.getElementById("label1Cono").value
    value2 = document.getElementById("label2Cono").value
    document.getElementById("label1Cono").value = ""
    document.getElementById("label2Cono").value = ""
    return document.getElementById("spanResultsCono").innerHTML = `Area = ${(Pipi * Math.pow(value1, 2) * value2) / 3}`
}


const person = {
    name: 'Lydia',
    age: 21,
  };
  
  for (const [x,y] of Object.entries(person)) {
    console.log(x,y); //🤔?
  }