import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product : Product

  constructor(
    private produtoService: ProductService,
    private router: Router,
    private route: ActivatedRoute) 
    {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoService.readById(id).subscribe(product => {
      this.product = product
    })
  }
  
  deleteProduct(): void {
    this.produtoService.delete(this.product.id).subscribe(() => {
      this.produtoService.showMessage('Produto excluido com sucesso!')
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(["/products"])
  }
}
