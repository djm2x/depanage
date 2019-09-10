import { SuperService } from './../../shared/super.service';
import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator, MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';
import { ChiffreCrudComponent } from './chiffre-crud/chiffre-crud.component';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'app-chiffre',
  templateUrl: './chiffre.component.html',
  styleUrls: ['./chiffre.component.sass']
})
export class ChiffreComponent implements OnInit {
  list: {id: number, name: string, count: string}[] = [];
  isLogged = this.session.notif.pipe(map((r: any) => r.is));

  constructor(public dialog: MatDialog, private service: SuperService
    , private session: SessionService) { }

  ngOnInit() {
    this.getAll();
    // this.session.notif.subscribe(
    //   r => {
    //     console.log(r);
    //     this.isLogged = (r as any).is;
    //   }
    // );
  }

  getAll() {
    this.service.getAllChiffre().subscribe(
      r => {
        this.list = r as any;
      }
    );
  }

  openDialogForDelete(): void {
    const dialogRef = this.dialog.open(ChiffreCrudComponent, {
      width: '1200px',
      // data: { text: this.text}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        console.log('vous avez quittez le dialog');
      } else {
        this.getAll();
      }
    });
  }


}

