import { Component, OnInit } from '@angular/core';
import { ProductsService, Producto } from '../servicios/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos:Producto[] = [];

  constructor( private _productsService: ProductsService) { }

  ngOnInit() {
    this.productos = this._productsService.getProductos();
  }

}

