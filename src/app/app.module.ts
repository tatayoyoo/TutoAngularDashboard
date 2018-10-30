import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooModule } from './foo/foo.module';
import { FooDirective } from './foo.directive';
import { CapitalisePipe } from './capitalise.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutesModule } from './app.routes';
import { BlopComponent } from './blop/blop.component';
import { WidgetContainerComponent } from './dashboard/widget-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FooDirective,
    CapitalisePipe,
    PageNotFoundComponent,
    BlopComponent,
    WidgetContainerComponent
  ],
  imports: [
    BrowserModule,
    FooModule,
    DashboardModule,
    AppRoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
