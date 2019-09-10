import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { BtnCallerModule } from '../btn-caller/btn-caller.module';
import { MatModule } from '../../mat.module';
import { EditorComponent } from '../editor/editor.component';

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    BtnCallerModule,
    MatModule,
  ],
  entryComponents: [
    EditorComponent,
  ],
  exports: [SharedComponent],
})
export class SharedModule { }
