import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScrollDirective } from './shared/scroll.directive';
import { LoaderInterceptor } from './shared/loader/loader-interceptor';
import { LoaderModule } from './shared/loader/loader.module';
import { PrebootModule } from 'preboot';
import { InjectService } from './inject.service';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { UniversalInterceptor } from './universal-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ScrollDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    LoaderModule,
  ],
  providers: [
    // {
    //   provide: 'BASE_URL',
    //   useValue: 'http://localhost:4100/api'
    //   // useValue: 'https://alaoui-reparation.herokuapp.com/api'
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: UniversalInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {    // Create global Service Injector.
    InjectService.injector = this.injector;
  }
}
