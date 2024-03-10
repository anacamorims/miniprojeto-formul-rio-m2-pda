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
};


let carList = [];


document.getElementById("carForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const client = document.getElementById("client").value;
  const telphone = document.getElementById("telphone").value;
  const doc = document.getElementById("doc").value;
  const andress = document.getElementById("andress").value;
  const date = document.getElementById("date").value;
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const plate = document.getElementById("plate").value.toUpperCase();
  const year = document.getElementById("year").value;
  const color = document.getElementById("color").value;
  const fuel = document.getElementById("fuel").value;
  const problem = document.getElementById("problem").value;



    if (!client || !telphone || !doc || !andress || !date || !brand || !model || !plate || !year || !color || fuel === "Selecione" || !problem) {
    
    alert("Por favor, preencha todos os campos.");
    return;
    } 


    const car = new Car(
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
    );

  carList.push(car);
  displayCars();

});


function displayCars() {
  const carListDiv = document.getElementById("car-list");

  carListDiv.innerHTML = "";
  carList.forEach((car, index) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
            <h2>ID ${index + 1}<h2>
            <br>
            <p>Cliente: ${car.client}<p>
            <p>Telefone: ${car.telphone}<p>
            <p>CPF: ${car.doc}<p>
            <p>Endereço: ${car.andress}<p>
            <p>Data: ${car.date}<p>
            <p>Marca: ${car.brand}<p>
            <p>Modelo: ${car.model}<p>
            <p>Placa: ${car.plate}<p>
            <p>Ano: ${car.year}<p>
            <p>Cor: ${car.color}<p>
            <p>Combustível: ${car.fuel}
            <p>Problema: ${car.problem}
            <button class="edit-button" data-index="${index}">Editar</buton>
            <button class="remove-car" data-index="${index}">Remover</button>
            `;

    carCard.querySelector(".remove-car").addEventListener("click", function () {
      removeCar(index);
    });

    carCard.querySelector(".edit-button").addEventListener("click", function () {
        editCar(index);
    });

    carListDiv.appendChild(carCard);
    });
}


function removeCar(index) {
  carList.splice(index, 1);
  displayCars();
}


function editCar(index) {
  const car = carList[index];
  
  document.getElementById("edit-client").value = car.client;
  document.getElementById("edit-telphone").value = car.telphone;
  document.getElementById("edit-doc").value = car.doc;
  document.getElementById("edit-andress").value = car.andress;
  document.getElementById("edit-date").value = car.date;
  document.getElementById("edit-brand").value = car.brand;
  document.getElementById("edit-model").value = car.model;
  document.getElementById("edit-plate").value = car.plate;
  document.getElementById("edit-year").value = car.year;
  document.getElementById("edit-color").value = car.color;
  document.getElementById("edit-fuel").value = car.fuel;
  document.getElementById("edit-problem").value = car.problem;


    document.getElementById("edit-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const editedClient = document.getElementById("edit-client").value;
    const editedTelphone = document.getElementById("edit-telphone").value;
    const editedDoc = document.getElementById("edit-doc").value;
    const editedAndress = document.getElementById("edit-andress").value;
    const editedDate = document.getElementById("edit-date").value;
    const editedBrand = document.getElementById("edit-brand").value;
    const editedModel = document.getElementById("edit-model").value;
    const editedPlate = document.getElementById("edit-plate").value.toUpperCase();
    const editedYear = document.getElementById("edit-year").value;
    const editedColor = document.getElementById("edit-color").value;
    const editedFuel = document.getElementById("edit-fuel").value;
    const editedProblem = document.getElementById("edit-problem").value;

    if (
      editedClient === car.client &&
      editedTelphone === car.telphone &&
      editedDoc === car.doc &&
      editedAndress === car.andress &&
      editedDate === car.date &&
      editedBrand === car.brand &&
      editedModel === car.model &&
      editedPlate === car.plate &&
      editedYear === car.year &&
      editedColor === car.color &&
      editedFuel === car.fuel &&
      editedProblem === car.problem
    ) {
      return;
    };


    const updatedCar = {
        ...car,
        client: editedClient,
        telphone: editedTelphone,
        doc: editedDoc,
        andress: editedAndress,
        date: editedDate,
        brand: editedBrand,
        model: editedModel,
        plate: editedPlate,
        year: editedYear,
        color: editedColor,
        fuel: editedFuel,
        problem: editedProblem,
    };
      
    const index = carList.findIndex((c) => c === car);
    carList[index] = updatedCar;

    displayCars();
    
    document.getElementById("edit-form").style.display = "none";
    
});

  
document.getElementById('cancel-edit').addEventListener('click', function() {
    document.getElementById('edit-car-form').reset(); 
    document.getElementById('edit-form').style.display = 'none';
    });

    document.getElementById('edit-form').style.display = "block";
    
}


















