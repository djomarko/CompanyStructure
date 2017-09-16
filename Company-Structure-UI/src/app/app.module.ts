import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyStructureService } from './common/services/company-structure.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule
	],
	providers: [CompanyStructureService],
	bootstrap: [AppComponent]
})
export class AppModule { }
