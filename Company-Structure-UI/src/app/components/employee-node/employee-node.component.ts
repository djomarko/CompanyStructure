import { Component, Input } from '@angular/core';

import { EmployeeData } from './../../common/EmployeeData';

@Component({
	selector: 'app-employee-node',
	templateUrl: './employee-node.component.html',
	styleUrls: ['./employee-node.component.css']
})
export class EmployeeNodeComponent {

	@Input() data: EmployeeData;
}
