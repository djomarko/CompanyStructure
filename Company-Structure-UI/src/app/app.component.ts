import { EmployeeData } from './common/EmployeeData';
import { CompanyStructureService } from './common/services/company-structure.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	providers: [CompanyStructureService]
})
export class AppComponent implements OnInit {

	subordinates: EmployeeData[];

	constructor(private service: CompanyStructureService) {	}

	ngOnInit(): void {
		this.service.fetchData()
			.subscribe(data => this.subordinates = data);
	}

}
