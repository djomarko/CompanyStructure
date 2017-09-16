export class CompanyData {

	id: Number;
	name: String;
	employees: CompanyData[];

	constructor() {
		this.employees = [];
	}
}
