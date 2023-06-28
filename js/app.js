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