import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { RoundedModule } from './directives/rounded/rounded.module';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ListGeneratorComponent } from './list-generator/list-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

@NgModule({
  // componentes
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    HomeComponent,
    PageWrapperComponent,
    HomePageComponent,
    ListGeneratorComponent,
    ReactiveFormComponent,

  ],
  // modulos
  imports: [
    BrowserModule,
    RoundedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
