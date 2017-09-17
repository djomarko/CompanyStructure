import { Component, Input, ViewEncapsulation } from '@angular/core';

import { EmployeeData } from './../../common/EmployeeData';

@Component({
	selector: 'app-employee-node',
	templateUrl: './employee-node.component.html',
	styleUrls: ['./employee-node.component.less'],
})
export class EmployeeNodeComponent {

	@Input() data: EmployeeData;
	showEmployees = true;

	toggleHide(): void {
		this.showEmployees = !this.showEmployees;
	}

}
