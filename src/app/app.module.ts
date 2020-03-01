import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { AddWineFormComponent } from './add-wine-form/add-wine-form.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineItemComponent } from './wine-list/wine-item/wine-item.component';
import { WineService } from './wine.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WineDetailComponent } from './wine-list/wine-detail/wine-detail.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddWineFormComponent,
    WineListComponent,
    WineItemComponent,
    HomeComponent,
    FooterComponent,
    WineDetailComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
