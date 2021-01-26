import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  public dialogRef: MatDialogRef<DialogDeleteComponent>) { }

  ngOnInit() {
  }

  closeDialog() {

    this.dialogRef.close(false);
  }



}
