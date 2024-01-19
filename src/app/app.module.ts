import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RickAndMortyService } from 'src/rick-morty.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search-component/search-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [RickAndMortyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
