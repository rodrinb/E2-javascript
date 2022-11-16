const pizzas = [
    {
        id:'1',
        nombre: 'Napolitana',
        precio: '1500',
        ingredientes:['pure de tomate, muzzarella, albahaca, oliva'],

    },


    {
        id:'2',
        nombre:'Muzzarella',
        precio: '500',
        ingredientes: ['pure de tomate, muzzarella, aceitunas']
    },



    {
        id: '3',
        nombre: 'Fugazzeta',
        precio: '1300',
        ingredientes: ['pure de tomate, cebolla, oregano']
    },



    {
        id: '4',
        nombre: 'Pepperoni',
        precio: '1600',
        ingredientes: ['pure de tomate, muzzarella, pepperonis']
    },



    {
        id: '5',
        nombre: 'Especial',
        precio: '1500',
        ingredientes: ['pure de tomate, muzzarella, aceitunas, oregano,']
    },



    {
        id: '6',
        nombre: 'Rucula y Jamon',
        precio: '1600',
        ingredientes: ['pure de tomate, muzzarella, rucula, jamon crudo']
    },
    
]

const resultContainer = document.getElementById("result-container");
const form = document.getElementById('form');
const input = document.querySelector(".form__input");





const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value);

const showEmptyError = () => {
    resultContainer.innerHTML = `
    <div class="pizza-container">

            <h2 class="error-title">Por favor, ingrese un numero para que podamos buscar su pizza en el menu.</h2>

    </div>
    
    `;
};

const renderResult = (pizza) => {
    if(!pizza){
resultContainer.innerHTML = `
<div class="pizza-container">

            <h2 class="error-title">No existe una pizza con el id ingresado.</h2>

        </div>

`;
    }else{
        resultContainer.innerHTML = `
        <div class="pizza-container">

            <h2 class="result-title">${pizza.nombre}</h2>
            <h3 class="result-price">$${pizza.precio}</h3>
            
        </div>
        `;
    };
};


const submitSearch = (e) => {
e.preventDefault();

const searchedValue = input.value
if(!searchedValue){
    showEmptyError();
    return;
}
const searchedPizza = searchPizza(Number(searchedValue));
renderResult(searchedPizza);
form.reset(); 
};

const init = () =>{
    form.addEventListener("submit", submitSearch);

};

init();