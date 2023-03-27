console.log("tasdfasds");


type Paginacion<T> = {
    datos: T[], 
    paginaActual: number,
    paginaSiguiente: number, 
    paginaAnterior: number,
}

const paginacionS: Paginacion<string> = {
    datos: ["1", "2", "3", "4", "5"],
    paginaActual: 1,
    paginaSiguiente: 2,
    paginaAnterior: 0,
}

const paginacionN: Paginacion<number> = {
    datos: [1,2,3,4,5],
    paginaActual: 1,
    paginaSiguiente: 2,
    paginaAnterior: 0,
}

const paginacionB: Paginacion<boolean> = {
    datos: [false, true, false, false, true],
    paginaActual: 1,
    paginaSiguiente: 2,
    paginaAnterior: 0,
}