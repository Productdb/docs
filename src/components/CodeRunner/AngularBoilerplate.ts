export default `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductDBComponentsModule } from '@ProductDBsdk/angular-ui-kit';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductDBComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}`