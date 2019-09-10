import { Component, OnInit, Input } from '@angular/core';
import { SuperService } from '../super.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.sass']
})
export class SharedComponent implements OnInit {
  text = '';
  textDisplay: SafeHtml;
  @Input() id: number;
  constructor(protected service: SuperService, protected sanitizer: DomSanitizer
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.id ? this.id : +this.route.snapshot.paramMap.get('id');
    this.get();
  }

  get() {
    this.service.get(this.id).subscribe(
      (r: any) => {
        this.text = r ? r.discription : '';
        this.textDisplay = this.sanitizer.bypassSecurityTrustHtml(r ? r.discription : '');
      }
    );
  }

  submit(text) {
    this.service.insertOrUpdate({ id: this.id, discription: text }).subscribe(
      r => {
        this.get();
      }
    );
  }

}
