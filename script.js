class Car {
    constructor(
      client,
      telphone,
      doc,
      andress,
      date,
      brand,
      model,
      plate,
      year,
      color,
      fuel,
      problem
    ) {
      this.client = client;
      this.telphone = telphone;
      this.doc = doc;
      this.andress = andress;
      this.date = date;
      this.brand = brand;
      this.model = model;
      this.plate = plate;
      this.year = year;
      this.color = color;
      this.fuel = fuel;
      this.problem = problem;
    }
}
  
  let carList = [];


function handleFormSubmit(event){
    event.preventDefault();

const cliente = document.getElementById('nameClient').value;
const telefone = document.getElementById('telphone').value;
const cpf= document.getElementById('document').value;
const endereco = document.getElementById('andress').value;
const data = document.getElementById('date').value;
const marca = document.getElementById('brand').value;
const modelo = document.getElementById('model').value;
const placa = document.getElementById('plate').value.toUpperCase();
const ano = document.getElementById('year').value;
const cor= document.getElementById('color').value;
const problema = document.getElementById('problem').value;

    const car = new Car(cliente, telefone, cpf, endereco, data, marca, modelo, placa, ano, cor, problema);

    console.log("Dados do Veículo");
    console.log("Cliente:", car.cliente);
    console.log("Telefone:", car.telefone);
    console.log("CPF:", car.cpf);
    console.log("Endereço:", car.endereco);
    console.log("Data:", car.data);
    console.log("Marca:", car.marca);
    console.log("Modelo:", car.modelo);
    console.log("Placa:", car.placa);
    console.log("Ano:", car.ano);
    console.log("Cor:", car.cor);
    console.log("Problema:", car.problema);

}

let combustivel = document.getElementById('fuel');

combustivel.addEventListener('change', function () {
console.log("Combustivel:", combustivel.value)});

document.getElementById('carForm').addEventListener('submit', handleFormSubmit);


