import { Component, OnInit } from '@angular/core';

import { ProductService } from '../_services';
import { Product } from '../_models';

@Component({ templateUrl: 'list.component.html' })

export class ListComponent implements OnInit {

    products!: Product[];

    constructor(private productService: ProductService
    ) {}

    ngOnInit() {
        this.productService.getAll()
            .subscribe(response => this.products = (response as any).result);
    }

}