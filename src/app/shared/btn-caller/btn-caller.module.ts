import { MatModule } from './../../mat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCallerComponent } from './btn-caller.component';
import { EditorModule } from '../editor/editor.module';

@NgModule({
  declarations: [BtnCallerComponent],
  imports: [
    CommonModule,
    EditorModule,
    MatModule,
  ],
  exports: [BtnCallerComponent]
})
export class BtnCallerModule { }
