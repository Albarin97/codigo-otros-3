// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

//se modificaron y corrigieron las refrencias a los elementos HTML
const li = document.getElementById("lista-de-productos");
const i = document.getElementById('input');

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  //img.src=productos[i].img;
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

//Se comento esta funcion que no existe
//displayProductos(productos)

//Se modifico la referencia al Boton
//const botonDeFiltro = document.getElementById("btn-filtrar");

//Se modifico la forma en que se filtra, ahora se hace solo escribiendo
i.addEventListener('input', ()=>{

  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = i.value;
  console.log(texto);
  //Se pasan los parametros en minusculas para mejorar el filtro
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
})

const filtrado = (productos = [], texto) => {
  //Se comparan los filtros en minusculas para mejorarlo
  return productos.filter(item => item.tipo.includes(texto.toLowerCase()) || item.color.includes(texto.toLowerCase()));
}  