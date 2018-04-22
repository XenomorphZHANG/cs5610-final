import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {LoginComponent} from './views/user/login/login.component';
import {RstListComponent} from './views/rst/rst-list/rst-list.component';
import { RstEditComponent } from './views/rst/rst-edit/rst-edit.component';
import { RstNewComponent } from './views/rst/rst-new/rst-new.component';
import { RstSearchComponent } from './views/rst/rst-search/rst-search.component';
import { FaqEditComponent } from './views/faq/faq-edit/faq-edit.component';
import { FaqNewComponent } from './views/faq/faq-new/faq-new.component';
import { FaqListComponent } from './views/faq/faq-list/faq-list.component';
import { BlogListComponent } from './views/blog/blog-list/blog-list.component';
import { BlogNewComponent } from './views/blog/blog-new/blog-new.component';
import { BlogEditComponent } from './views/blog/blog-edit/blog-edit.component';
import { ReviewListComponent } from './views/review/review-list/review-list.component';
import { ReviewEditComponent } from './views/review/review-edit/review-edit.component';
import { ReviewNewComponent } from './views/review/review-new/review-new.component';
import { BlogPageComponent } from './views/blog/blog-page/blog-page.component';
import { RstPageComponent } from './views/rst/rst-page/rst-page.component';
import { FaqPageComponent } from './views/faq/faq-page/faq-page.component';

import {YelpSearchService} from './services/yelpSearch.service.client';
import {AuthGuard} from './services/auth-guard.service';
import {SharedService} from './services/shared.service';
import {UserService} from './services/user.service.client';
import {FaqService} from './services/faq.service.client';
import {RstService} from './services/rst.service.client';
import {BlogService} from './services/blog.service.client';
import {ReviewService} from './services/review.service.client';
import {QuillEditorModule} from 'ngx-quill-editor/quillEditor.module';
import { AgmCoreModule } from '@agm/core';
import { AdminUserListComponent } from './views/admin/admin-user-list/admin-user-list.component';
import {SortableDirective} from '../../server/directives/sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    RstListComponent,
    RstEditComponent,
    RstNewComponent,
    RstSearchComponent,
    FaqEditComponent,
    FaqNewComponent,
    FaqListComponent,
    BlogListComponent,
    BlogNewComponent,
    BlogEditComponent,
    ReviewListComponent,
    ReviewEditComponent,
    ReviewNewComponent,
    BlogPageComponent,
    RstPageComponent,
    FaqPageComponent,
    AdminUserListComponent,
    SortableDirective,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-pfdiZzI4w3bkiAsM8DxXbGC_BEXAoPQ'
    }),
    routing,
    FormsModule,
    HttpModule,
    QuillEditorModule
  ],
  providers: [
    {
      provide: 'UserService',
      useClass: UserService
    },
    {
      provide: 'SharedService',
      useClass: SharedService
    },
    {
      provide: 'YelpSearchService',
      useClass: YelpSearchService
    },
    AuthGuard,
    {
      provide: 'FaqService',
      useClass: FaqService
    },
    {
      provide: 'RstService',
      useClass: RstService
    },
    {
      provide: 'BlogService',
      useClass: BlogService
    },
    {
      provide: 'ReviewService',
      useClass: ReviewService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
