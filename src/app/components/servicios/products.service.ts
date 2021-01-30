import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

    private products:Producto[] = [
            {
              nombre: "Pintura",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/pintor.jpg"
            },
            {
              nombre: "Diseño y mantenimiento de jardineria",
              bio: "Diseñamos, embellecemos y remodelamos todo tipo de jardines en casas, fincas, instituciones educativas, edificios y conjuntos cerrados",
              img: "assets/img/jardinero.jpg"
            },
            {
              nombre: "Plomeria",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/plomero.png"
            },
           
        ];

    constructor() {
        console.log('A usar');
    }

    getProductos() {
        return this.products;
    }

}

export interface Producto {
    nombre: string;
    bio: string;
    img: string;
}