import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  selectedLocation: number | undefined; // Use the appropriate data type for location id
  selectedProduct: number | undefined; // Use the appropriate data type for product id
  locations: any[] = []; // Replace with the actual list of locations
  products: any[] = []; // Replace with the actual list of products
  productEnabled: boolean = false;

  enableProduct() {
    // Perform actions to enable the selected product
    // Fetch product details, features, and parameters from the Catalog project
    // Set productEnabled to true to display the product details
  }

  saveConfiguration() {
    // Persist the selected configuration data to the database
    // You can use an HTTP service to send the data to your backend server
  }
}
