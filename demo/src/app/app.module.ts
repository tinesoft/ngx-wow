
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgwWowModule } from 'ngx-wow';

import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Add .withServerTransition() to support Universal rendering.
        // The application ID can be any identifier which is unique on
        // the page.
        BrowserModule.withServerTransition({ appId: 'ngx-wow-demo-id' }),
        TransferHttpCacheModule,
        FormsModule,
        HttpModule,
        NgwWowModule,
        AppRoutingModule,
        AppSharedModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
