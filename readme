# Este es mi carrito de compras v1.0
## Este carrito de compras tiene 2 funcionalidades basicas que son agregar y mostrar los productos que el usuario selecciono.
### Para llevarlo a cabo se necesita de un buen conocimiento del DOM, las funciones de array y objetos, como funciona el fragment para evitar el reflow.

## Carrito (Es el contenedor del template y donde se cargan estos desde JS)

```html
<section class="container mt-3">
    <ul id="carrito" class="border ps-0">
        <!-- aqui van los template -->
    </ul>
</section>
```

## template (donde se muestran los productos)

```html
<template id="template">
    <li
        class="bg-card p-2 w-100 list-group-item d-flex justify-content-between align-items-center"
    >
        <div>
            <img src="#" class="img-fluid" width="50px" />
            <span class="lead text-color ms-2 fw-bold">Juego</span>
        </div>
        <div>
            <span class="badge bg-color rounded-pill">1</span>
        </div>
    </li>
```

## Codigo JS

```JS
const botones = document.querySelectorAll('.btn-color')
const carrito = document.querySelector('#carrito')
const template = document.querySelector('#template')
const fragment = document.createDocumentFragment()

const Biblioteca = {}

agregarCarrito = (e) =>{
    const juego = {
        id: e.target.dataset.game,
        name: e.target.dataset.game,
        img: e.target.dataset.img,
        cantidad: 1
    }//Me faltaria crear una funcion a parte donde se cree el juego unicamente

    sumarCantidad(juego)

    Biblioteca[juego.name] = juego

    mostrarCarrito()
} 

sumarCantidad = (juego) =>{
    if(Biblioteca.hasOwnProperty(juego.name)){
        juego.cantidad = Biblioteca[juego.name].cantidad + 1
    }
}
//Esta funcion no me salio a la primera, utilice una function arrow en lugar de una function normal como hicimos en la practica del miercoles

mostrarCarrito = () =>{
    carrito.textContent = ""
    Object.values(Biblioteca).forEach((item)=>{
        const clone = template.content.cloneNode(true)//En esta linea tuve problemas de sintaxis

        clone.querySelector('.img-fluid').src = item.img
        clone.querySelector('.lead').textContent = item.name
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
}//Y en esta funcion solo tuve problemas de sintaxis

botones.forEach((item)=>{
    item.addEventListener('click', agregarCarrito)
})
```

![Resultado Final](/img/Carrito.png)
