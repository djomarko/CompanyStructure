import { TestBed, inject } from '@angular/core/testing';

import { CompanyStructureService } from './company-structure.service';


describe('CompanyStructureService', () => {

	let service: CompanyStructureService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [CompanyStructureService]
		});
	});

	beforeEach(inject([CompanyStructureService], (csService: CompanyStructureService) => {
		service = csService;
	}));

	it('should be defined', inject([CompanyStructureService], () => {
		expect(service).toBeDefined();
	}));

	describe('fetchData', () => {
		it('should be defined', () => {
			expect(service.fetchData).toBeDefined();
		});

		it('should bring back a Observable list that has the CEO as the root employee', () => {
			let root;
			service.fetchData().subscribe(data => [root] = data);

			expect(root.id).toBe(150);
			expect(root.name).toBe('Jamie');
			expect(root.employees.length).toBe(2);
		});
	});
});
