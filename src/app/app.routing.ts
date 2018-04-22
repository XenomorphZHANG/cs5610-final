import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RstSearchComponent} from './views/rst/rst-search/rst-search.component';
import {RstListComponent} from './views/rst/rst-list/rst-list.component';
import {RstEditComponent} from './views/rst/rst-edit/rst-edit.component';
import {FaqListComponent} from './views/faq/faq-list/faq-list.component';
import {RstNewComponent} from './views/rst/rst-new/rst-new.component';
import {FaqNewComponent} from './views/faq/faq-new/faq-new.component';
import {FaqEditComponent} from './views/faq/faq-edit/faq-edit.component';
import {ReviewListComponent} from './views/review/review-list/review-list.component';
import {ReviewEditComponent} from './views/review/review-edit/review-edit.component';
import {ReviewNewComponent} from './views/review/review-new/review-new.component';
import {BlogListComponent} from './views/blog/blog-list/blog-list.component';
import {BlogEditComponent} from './views/blog/blog-edit/blog-edit.component';
import {BlogNewComponent} from './views/blog/blog-new/blog-new.component';
import {BlogPageComponent} from './views/blog/blog-page/blog-page.component';
import {RstPageComponent} from './views/rst/rst-page/rst-page.component';
import {AuthGuard} from './services/auth-guard.service';
import {FaqPageComponent} from './views/faq/faq-page/faq-page.component';
import {AdminUserListComponent} from './views/admin/admin-user-list/admin-user-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminUserListComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'search', component: RstSearchComponent, canActivate: [AuthGuard]},
  { path: 'rst', component: RstListComponent, canActivate: [AuthGuard] },
  { path: 'rst/new', component: RstNewComponent, canActivate: [AuthGuard]},
  { path: 'rst/:rstid', component: RstEditComponent, canActivate: [AuthGuard]},
  { path: 'rst/:rstid/page', component: RstPageComponent, canActivate: [AuthGuard]},
  { path: 'faq', component: FaqListComponent, canActivate: [AuthGuard]},
  { path: 'faq/new', component: FaqNewComponent, canActivate: [AuthGuard]},
  { path: 'faq/:fid', component: FaqEditComponent, canActivate: [AuthGuard]},
  { path: 'faq/:fid/page', component: FaqPageComponent, canActivate: [AuthGuard]},
  { path: 'rst/:rstid/review', component: ReviewListComponent, canActivate: [AuthGuard]},
  { path: 'rst/:rstid/review/new', component: ReviewNewComponent, canActivate: [AuthGuard]},
  { path: 'rst/:rstid/review/:revid', component: ReviewEditComponent, canActivate: [AuthGuard]},
  { path: 'blog', component: BlogListComponent, canActivate: [AuthGuard]},
  { path: 'blog/new', component: BlogNewComponent, canActivate: [AuthGuard]},
  { path: 'blog/:bid', component: BlogEditComponent, canActivate: [AuthGuard]},
  { path: 'blog/:bid/page', component: BlogPageComponent, canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
