import { SessionService } from './../session.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-btn-caller',
  templateUrl: './btn-caller.component.html',
  styleUrls: ['./btn-caller.component.sass']
})
export class BtnCallerComponent implements OnInit {
  @Input() action = 'Valider';
  @Input() icon = '';
  @Input() text = '';
  @Output() onsave = new EventEmitter<string>();
  isLogged = true;
  constructor(public dialog: MatDialog, private session: SessionService) { }

  ngOnInit() {
    this.session.notif.subscribe(
      r => {
        console.log(r);
        this.isLogged = (r as any).is;
      }
    );
  }

  openDialogForDelete(): void {
    const dialogRef = this.dialog.open(EditorComponent, {
      width: '1200px',
      data: { text: this.text}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        console.log('vous avez quittez le dialog');
      } else {
        this.onsave.next(result.text);
      }
    });
  }

}
