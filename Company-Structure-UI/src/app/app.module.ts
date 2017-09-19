import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyStructureService } from './common/services/company-structure.service';
import { EmployeeNodeComponent } from './components/employee-node/employee-node.component';

@NgModule({
	declarations: [
		AppComponent,
		EmployeeNodeComponent
	],
	imports: [
		BrowserModule,
		HttpModule
	],
	providers: [CompanyStructureService],
	bootstrap: [AppComponent]
})
export class AppModule { }
