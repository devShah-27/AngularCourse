import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightsDirective } from './CustomDirectives/basic-highlights/basic-highlights.directive';
import { BetterHighlightsDirective } from './CustomDirectives/better-highlights/better-highlights.directive';
import { UnlessDirective } from './CustomDirectives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightsDirective,
    BetterHighlightsDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
