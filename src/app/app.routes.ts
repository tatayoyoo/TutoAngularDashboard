import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BlopComponent } from "./blop/blop.component";

const appRoutes: Routes =
  [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'blop', component: BlopComponent },
    { path: '**', component: PageNotFoundComponent },
     
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutesModule { }
