import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UniversalInterceptor} from './universal-interceptor';
import {TransferHttpCacheModule} from '@nguniversal/common';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    TransferHttpCacheModule,
  ],
  providers: [
    // {
    //   provide: 'BASE_URL',
    //   useValue: 'http://localhost:4100/api'
    //   // useValue: 'https://alaoui-reparation.herokuapp.com/api'
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: UniversalInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
