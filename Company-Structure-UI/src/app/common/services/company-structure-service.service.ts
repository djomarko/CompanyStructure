import { Injectable } from '@angular/core';

import { CompanyData } from './../CompanyData';
import * as data from './current.mock.json';

@Injectable()
export class CompanyStructureServiceService {

	constructor() { }

	public fetchData(): CompanyData[]|any {
		return data;
	}

}
