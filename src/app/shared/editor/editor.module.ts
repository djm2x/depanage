import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { MatModule } from '../../mat.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    AngularEditorModule,
    MatModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    EditorComponent,
  ]
})
export class EditorModule { }
