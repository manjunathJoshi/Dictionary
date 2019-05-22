import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { DictionaryService } from 'src/providers/dictionary.service';
import { HomeComponent } from './home/home.component';
import { BookMarkComponent } from './home/bookmark-page/bookmark.component';
import { ContentComponent } from './home/content-page/content.component';
import { ModalComponent } from './modal/modal.component';
// import 'rxjs/add/operator/toPromise';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookMarkComponent,
    ContentComponent,
    ModalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [DictionaryService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]

})
export class AppModule { }
