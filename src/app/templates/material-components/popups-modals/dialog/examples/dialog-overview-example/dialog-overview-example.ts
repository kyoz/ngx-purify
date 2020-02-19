import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview-example',
  templateUrl: './dialog-overview-example.html',
  styleUrls: ['./dialog-overview-example.scss']
})
export class DialogOverviewExample {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private changeDetection: ChangeDetectorRef) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      this.changeDetection.detectChanges();
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <h1 mat-dialog-title>Hi {{data.name}}</h1>
  <div mat-dialog-content>
    <p>What's your favorite animal?</p>
    <mat-form-field>
      <input matInput [(ngModel)]="data.animal">
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">No Thanks</button>
    <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
  </div>
  `,
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
