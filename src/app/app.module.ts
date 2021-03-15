import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from 'src/app/category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicComponent } from 'src/app/basic/basic.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RatingModule } from 'ngx-bootstrap/rating';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NavbarComponent,
    BasicComponent,
    FirstComponent,
    ReactiveformsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    RatingModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
