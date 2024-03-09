
function editCar(index) {
    const car = carList[index];

    // Preencher o formulário de edição com os dados do carro selecionado
    document.getElementById('edit-client').value = car.client;
    document.getElementById('edit-telphone').value = car.telphone;
    document.getElementById('edit-doc').value = car.doc;
    document.getElementById('edit-andress').value = car.andress;
    document.getElementById('edit-date').value = car.date;
    document.getElementById('edit-brand').value = car.brand;
    document.getElementById('edit-model').value = car.model;
    document.getElementById('edit-plate').value = car.plate;
    document.getElementById('edit-year').value = car.year;
    document.getElementById('edit-color').value = car.color;
    document.getElementById('edit-fuel').value = car.fuel;
    document.getElementById('edit-problem').value = car.problem;

    // Adicionar um evento de clique para o botão de cancelar
    document.getElementById('cancel-edit').addEventListener('click', function() {
        // Esconder o formulário de edição
        document.getElementById('edit-form').reset(); // Resetar o formulário
        document.getElementById('edit-form').style.display = 'none';
    });

    // Remover o evento de submissão para evitar a duplicação
    document.getElementById('edit-form').removeEventListener('submit', editFormSubmit);

    // Definir um evento de submissão para o formulário de edição
    document.getElementById('edit-form').addEventListener('submit', editFormSubmit);

    // Exibir o formulário de edição
    document.getElementById('edit-form').style.display = 'block';
}

function editFormSubmit(e) {
    e.preventDefault();
    // Obter os dados do formulário
    const index = parseInt(this.getAttribute('data-index'));
    const editedClient = document.getElementById('edit-client').value;
    const editedTelphone = document.getElementById('edit-telphone').value;
    const editedDoc = document.getElementById('edit-doc').value;
    const editedAndress = document.getElementById('edit-andress').value;
    const editedDate = document.getElementById('edit-date').value;
    const editedBrand = document.getElementById('edit-brand').value;
    const editedModel = document.getElementById('edit-model').value;
    const editedPlate = document.getElementById('edit-plate').value.toUpperCase();
    const editedYear = document.getElementById('edit-year').value;
    const editedColor = document.getElementById('edit-color').value;
    const editedFuel = document.getElementById('edit-fuel').value;
    const editedProblem = document.getElementById('edit-problem').value;

    
    displayCars();
    // Esconder o formulário de edição
    document.getElementById('edit-car-form').reset(); // Resetar o formulário
    document.getElementById('edit-car-form').style.display = 'none';
}

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


