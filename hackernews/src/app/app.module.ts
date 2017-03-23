import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FrontPageComponent } from './frontpage.component';
import { AppComponent } from './app.component';
import { StoryDetailComponent } from './story-detail.component';
import { CommentComponent } from './comment.component';

@NgModule({
  declarations: [
      AppComponent,
      StoryDetailComponent,
      CommentComponent,
      FrontPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
