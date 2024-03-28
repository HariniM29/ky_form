// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {
//   formData: any = {};
//   columnData: any; // Declare columnData property

//   constructor(private dataService: DataService) { }

//   ngOnInit() {
//     // Fetch column data when the component initializes
//     this.dataService.getColumnData().subscribe(data => {
//       this.columnData = data;
//     });
//   }

//   submitForm() {
//     // Format the date to ISO string before sending it to the backend
//     this.formData.date = new Date(this.formData.date).toISOString();

//     // Submit form data to the backend
//     this.dataService.submitFormData(this.formData).subscribe(
//       response => {
//         console.log('Form data submitted successfully:', response);
//       },
//       error => {
//         console.error('Error submitting form data:', error);
//       }
//     );
//   }
// }


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  formData: any = {};
  columnData: any; // Declare columnData property



  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Fetch column data when the component initializes
    this.dataService.getColumnData().subscribe(data => {
      this.columnData = data;
    });  
  }

  submitForm() {
    // Format the date to ISO string before sending it to the backend
    this.formData.date = new Date(this.formData.date).toISOString();

    // Submit form data to the backend
    this.dataService.submitFormData(this.formData).subscribe(
      response => {
        console.log('Form data submitted successfully:', response);
      },
      error => {
        console.error('Error submitting form data:', error);
      }
    );
  }
}
