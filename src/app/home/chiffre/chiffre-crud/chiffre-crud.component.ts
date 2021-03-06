import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperService } from '../../../shared/super.service';

@Component({
  selector: 'app-chiffre-crud',
  templateUrl: './chiffre-crud.component.html',
  styleUrls: ['./chiffre-crud.component.sass']
})
export class ChiffreCrudComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;
  dataSource = [];
  columnDefs = [
    { columnDef: 'id', headName: 'id' },
    { columnDef: 'name', headName: 'name' },
    { columnDef: 'count', headcount: 'count' },
    { columnDef: 'option', headName: 'Option' },
  ];

  i = 0;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    this.columnDefs[this.i++].columnDef,
    this.columnDefs[this.i++].columnDef,
    this.columnDefs[this.i++].columnDef,
    this.columnDefs[this.i++].columnDef,
  ];

  myForm: FormGroup;
  isEdit = false;
  update = new EventEmitter<any>();
  o = { id: null, name: '', count: '' };

  constructor(private fb: FormBuilder, private service: SuperService
    , public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    this.getAll();
    // this.getPage(0, 5);
    // merge(...[this.paginator.page, this.update]).subscribe(
    //   r => {
    //     r === true ? this.paginator.pageIndex = 0 : r = r;
    //     !this.paginator.pageSize ? this.paginator.pageSize = 5 : r = r;
    //     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    //     this.isLoadingResults = true;
    //     this.getPage(startIndex, this.paginator.pageSize);
    //   }
    // );
    this.update.subscribe(
      r => {
        this.isLoadingResults = true;
        this.getAll();
      }
    );
    this.createForm();
  }

  getAll() {
    this.service.getAllChiffre().subscribe(
      r => {
        this.dataSource = r as any;
        this.isLoadingResults = false;
      }
    );
  }

  // getPage(startIndex, pageSize) {
  //   this.service.getPage(startIndex, pageSize).subscribe(
  //     r => {
  //       console.log(r);
  //       this.dataSource = r.list;
  //       this.resultsLength = r.count;
  //       this.isLoadingResults = false;
  //     }
  //   );
  // }

  createForm() {
    this.myForm = this.fb.group({
      id: this.o.id,
      name: [this.o.name, Validators.required],
      count: [this.o.count, Validators.required],
    });
  }

  reset() {
    this.o = { id: null, name: '', count: '' };
    this.createForm();
    this.isEdit = false;
  }

  ok() {
    // this.onsave.next(text);
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }

  submit(myForm: FormGroup) {
    const obj: { id: number, name: string } = myForm.value;
    if (!obj.id) {
      this.service.postChiffre(obj).subscribe(
        r => {
          this.update.next();
          this.reset();
        }
      );
    } else {
      this.service.putChiffre(obj.id, obj).subscribe(
        r => {
          this.update.next();
          this.reset();
        }
      );
    }
  }

  edit(o: { id: number, name: string, count: string }) {
    this.o = o;
    console.log(this.o);
    this.isEdit = true;
    this.createForm();
  }

  delete(o) {
    this.service.deleteChiffre(o.id).subscribe(
      r => {
        this.update.next();
      }
    );
  }
}

