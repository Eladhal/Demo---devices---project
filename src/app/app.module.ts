import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SummeryComponent } from './Components/summery/summery.component';
import { DevGroupHttpService } from './Services/dev-group-http.service';
import { HttpClientModule } from '@angular/common/http';
import { BlackBoxes } from './Components/BlackBoxes/BlackBoxes.component';
import { CollapsableCheckboxesGroup } from './Components/CollapsableCheckboxesGroup/CollapsableCheckboxesGroup.component';
import { Protocols } from './Components/Protocols/Protocols.component';
import { RadioGroup } from './Components/RadioGroup/RadioGroup.component';
import { LearningPageComponent } from './Components/learning-page/learning-page.component';
import { CurrentlearningStateService } from './Services/currentlearning-state.service';
import { CheckboxRowComponent } from './Components/checkbox-row/checkbox-row.component';
import { FormsModule } from '@angular/forms';
import { RadioBtnRowComponent } from './Components/radio-btn-row/radio-btn-row.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    BlackBoxes,
    CollapsableCheckboxesGroup,
    Protocols,
    RadioGroup,
    SummeryComponent,
    LearningPageComponent,
    CheckboxRowComponent,
    RadioBtnRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [DevGroupHttpService,CurrentlearningStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
