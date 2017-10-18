import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { FlexmonsterPivot } from "./flexmonster.angular4";
import { PivotGrid } from './PivotGrid';
import { WidgetConfigService } from './WidgetConfigService';
import { HttpModule } from '@angular/http';
import { Workbook } from './Workbook';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [PivotGrid, AppComponent, FlexmonsterPivot, Workbook],
  providers: [WidgetConfigService],
  bootstrap: [Workbook]


})
export class AppModule { }
