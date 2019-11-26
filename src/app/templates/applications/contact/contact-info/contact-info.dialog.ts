import { Component, Inject, ViewChild, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PureSettingsService } from '../../../../core/pure-services/pure-settings.service';

@Component({
  selector: 'app-contact-info-dialog',
  templateUrl: './contact-info.dialog.html',
  styleUrls: ['./contact-info.dialog.scss']
})
export class ContactAppInfoDialog implements OnInit {
  @ViewChild('avatarFile', {static: false}) avatarFile: ElementRef;

  form = this._formBuilder.group({
    id: [null],
    firstName: ['', Validators.required],
    lastName: [''],
    nickName: [''],
    gender: [null],
    birthday: [null],
    avatar: [''],
    address: [''],
    email: [''],
    phone: [''],
    company: [''],
    job: [''],
    description: ['']
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public _settings: PureSettingsService,
    private _dialog: MatDialogRef<ContactAppInfoDialog>,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.mappingData();
  }

  get isCreating() {
    return this.data && this.data.type === 'create';
  }

  get avatar() {
    return this.form.get('avatar').value;
  }

  mappingData() {
    if (this.data && this.data.type && this.data.type === 'update' && this.data.contact) {
      const contact = this.data.contact;

      this.form.get('id').setValue(contact.id ? contact.id : '');
      this.form.get('firstName').setValue(contact.firstName ? contact.firstName : '');
      this.form.get('lastName').setValue(contact.lastName ? contact.lastName : '');
      this.form.get('nickName').setValue(contact.nickName ? contact.nickName : '');
      this.form.get('gender').setValue(contact.gender !== null ? contact.gender : null);
      this.form.get('birthday').setValue(contact.birthday ? contact.birthday : null);
      this.form.get('avatar').setValue(contact.avatar ? contact.avatar : '');
      this.form.get('address').setValue(contact.address ? contact.address : '');
      this.form.get('email').setValue(contact.email ? contact.email : '');
      this.form.get('phone').setValue(contact.phone ? contact.phone : '');
      this.form.get('company').setValue(contact.company ? contact.company : '');
      this.form.get('job').setValue(contact.job ? contact.job : '');
      this.form.get('description').setValue(contact.description ? contact.description : '');
    }
  }

  changeAvatar() {
    this.avatarFile.nativeElement.click();
  }

  create() {
    if (!this.form.valid) {
      this._snackBar.open('Please fill in all required field !', 'OK', { duration: 3000 });
      return;
    }

    this._dialog.close({
      action: 'create',
      contact: {...this.form.value}
    });
  }

  update() {
    if (!this.form.valid) {
      this._snackBar.open('Please fill in all required field !', 'OK', { duration: 3000 });
      return;
    }

    this._dialog.close({
      action: 'update',
      contact: {...this.form.value}
    });
  }

  remove() {
    this._dialog.close({
      action: 'remove',
      contact: {...this.data.contact}
    });
  }

  close() {
    this._dialog.close();
  }
}

