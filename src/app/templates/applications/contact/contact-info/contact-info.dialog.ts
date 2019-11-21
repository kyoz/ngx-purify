import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PureSettingsService } from '../../../../core/pure-services/pure-settings.service';

@Component({
  selector: 'app-contact-info-dialog',
  templateUrl: './contact-info.dialog.html',
  styleUrls: ['./contact-info.dialog.scss']
})
export class ContactAppInfoDialog {
  @ViewChild('avatarFile', {static: false}) avatarFile: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public _settings: PureSettingsService,
    private _dialog: MatDialogRef<ContactAppInfoDialog>
  ) {
  }

  changeAvatar() {
    this.avatarFile.nativeElement.click();
  }

  close() {
    this._dialog.close();
  }

  create() {

  }

  update() {

  }

  remove() {

  }
}

