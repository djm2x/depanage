import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {
  config: AngularEditorConfig = this._getConfig;

  myForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<any>
    , private fb: FormBuilder) { }

  ngOnInit() {
    // console.log(this.data);
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({text: this.data.text});
  }

  save(text) {
    // this.onsave.next(text);
    this.dialogRef.close(text);
  }

  close() {
    this.dialogRef.close();
  }

  get _getConfig() {
    return {
      editable: true,
      spellcheck: true,
      height: '30rem',
      minHeight: '5rem',
      placeholder: 'Discription ...',
      translate: 'no',
      uploadUrl: 'no',
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ]
    };
  }
}
