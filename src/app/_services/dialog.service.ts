import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../employee/dialog-delete/dialog-delete.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg:any) {

    return this.dialog.open(DialogDeleteComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }
}
