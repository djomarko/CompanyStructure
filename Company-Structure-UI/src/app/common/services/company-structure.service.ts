import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { EmployeeData } from './../EmployeeData';


@Injectable()
export class CompanyStructureService {

	private url = '/api/employees';

	constructor(private http: Http) { }

	public fetchData(): Observable<EmployeeData[]|any> {
		return this.http.get(this.url).map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json.error || 'Server error'));
	}

}
