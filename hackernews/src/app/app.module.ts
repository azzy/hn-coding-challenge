import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FrontPageComponent } from './frontpage.component';
import { AppComponent } from './app.component';
import { StoryDetailComponent } from './story-detail.component';
import { CommentComponent } from './comment.component';
import { RouterModule }   from '@angular/router';

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
      HttpModule,
      RouterModule.forRoot([
          {
              path: 'frontpage',
              component: FrontPageComponent
          },
          {
              path: 'story/:id',
              component: StoryDetailComponent
          },
          {
              path: '',
              redirectTo: '/frontpage',
              pathMatch: 'full'
          }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
