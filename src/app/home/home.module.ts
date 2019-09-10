import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CitationComponent } from './citation/citation.component';
import { TitleComponent } from './title/title.component';
import { MatModule } from '../mat.module';
import { SharedModule } from '../shared/shared/shared.module';
import { ChiffreComponent } from './chiffre/chiffre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChiffreCrudComponent } from './chiffre/chiffre-crud/chiffre-crud.component';
import { InfoComponent } from './info/info.component';
import { NosClientComponent } from './nos-client/nos-client.component';
import { CrudComponent } from './nos-client/crud/crud.component';
import { NosServiceComponent } from './nos-service/nos-service.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    HomeComponent,
    CitationComponent,
    TitleComponent,
    ChiffreComponent,
    ChiffreCrudComponent,
    InfoComponent,
    NosClientComponent,
    CrudComponent,
    NosServiceComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDm1sMO4dR7OrZWe5Ten0_Ol2p7QXdsjwo ' }),
  ],
  entryComponents: [
    ChiffreCrudComponent,
    CrudComponent,
  ]
})
export class HomeModule { }
