import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsDialogComponent } from '../product-details-dialog/product-details-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any; // To store the selected product

  constructor(private http: HttpClient, private router: Router,private dialog: MatDialog) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/api/selection').subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
      
    });
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  goToConfigurationPage() {
    if (this.selectedProduct) {
      // Navigate to the configuration page and pass the selected product's ID
      this.router.navigate(['/configuration', this.selectedProduct.id]);
    } else {
      // Handle the case where no product is selected
      alert('Please select a product before proceeding.');
    }
  }
  openDetailsDialog(product: any): void {
    const dialogRef = this.dialog.open(ProductDetailsDialogComponent, {
      width: '400px', // Set the width of your dialog
      data: product, // Pass the selected product to the dialog
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  openProductDetails(selectedProduct: any): void {
    this.router.navigate(['/product-details', selectedProduct.id]);
  }
}
