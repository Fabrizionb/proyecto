import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { RoundedModule } from './directives/rounded/rounded.module';

@NgModule({
  // componentes
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    HomeComponent,
    PageWrapperComponent,

  ],
  // modulos
  imports: [
    BrowserModule,
    RoundedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
