import { SuperService } from './../../shared/super.service';
import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator, MatDialog } from '@angular/material';
import { CrudComponent } from './crud/crud.component';
import { map } from 'rxjs/operators';
import { SessionService } from '../../shared/session.service';

const ASSETS_PATH = '../../../assets/';
const IMG_ERR = ASSETS_PATH + 'not-found.png';

@Component({
  selector: 'app-nos-client',
  templateUrl: './nos-client.component.html',
  styleUrls: ['./nos-client.component.scss']
})
export class NosClientComponent implements OnInit {
  list: { id: number, name: string, imgUrl: string }[] = [];
  isLogged = this.session.notif.pipe(map((r: any) => r.is));

  constructor(public dialog: MatDialog, private service: SuperService
    , private session: SessionService) { }

  ngOnInit() {
    this.getAll();
  }

  imgError(img: any) {
    // console.log('er', img.src);
    img.src = IMG_ERR;
  }

  getAll() {
    this.service.getAllClient().subscribe(
      r => {
        this.list = r as any;
      }
    );
  }

  openDialogForDelete(): void {
    const dialogRef = this.dialog.open(CrudComponent, {
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
