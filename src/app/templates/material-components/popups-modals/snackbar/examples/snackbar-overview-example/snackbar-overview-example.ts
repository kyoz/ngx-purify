import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'snackbar-overview-example',
  templateUrl: './snackbar-overview-example.html',
  styleUrls: ['./snackbar-overview-example.scss']
})
export class SnackbarOverviewExample {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('This is a snackbar 🐧', 'OK', {
      duration: 500,
    });
  }
}
