import { Injectable } from '@angular/core';

import { EmployeeData } from './../EmployeeData';
import * as data from './current.mock.json';

@Injectable()
export class CompanyStructureService {

	constructor() { }

	public fetchData(): EmployeeData[]|any {
		return data;
	}

}
