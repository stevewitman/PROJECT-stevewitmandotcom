import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRouteGuard } from './core/services/admin-route.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./features/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'mentoring',
    loadChildren: () =>
      import('./features/mentoring/mentoring.module').then(
        (m) => m.MentoringModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./features/resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'talks',
    loadChildren: () =>
      import('./features/talks/talks.module').then((m) => m.TalksModule),
  },
  {
    path: 'videos',
    loadChildren: () =>
      import('./features/videos/videos.module').then((m) => m.VideosModule),
  },
  {
    path: 'volunteer',
    loadChildren: () =>
      import('./features/volunteer/volunteer.module').then(
        (m) => m.VolunteerModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminRouteGuard],
  },
  {
    path: '404',
    loadChildren: () =>
      import('./features/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },
  {
    path: ':slug',
    loadChildren: () =>
      import('./features/redirect/redirect.module').then((m) => m.RedirectModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
