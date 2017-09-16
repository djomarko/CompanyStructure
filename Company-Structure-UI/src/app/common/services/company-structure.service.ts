import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { EmployeeData } from './../EmployeeData';
import * as data from './../current.mock.json';

@Injectable()
export class CompanyStructureService {

	constructor() { }

	public fetchData(): Observable<EmployeeData[]|any> {
		return Observable.of(data);
	}

}
