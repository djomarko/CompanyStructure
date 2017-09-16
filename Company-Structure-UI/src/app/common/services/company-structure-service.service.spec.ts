import { TestBed, inject } from '@angular/core/testing';

import { CompanyStructureServiceService } from './company-structure-service.service';


describe('CompanyStructureServiceService', () => {

	let service: CompanyStructureServiceService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [CompanyStructureServiceService]
		});
	});

	beforeEach(inject([CompanyStructureServiceService], (csService: CompanyStructureServiceService) => {
		service = csService;
	}));

	it('should be defined', inject([CompanyStructureServiceService], () => {
		expect(service).toBeDefined();
	}));

	describe('fetchData', () => {
		it('should be defined', () => {
			expect(service.fetchData).toBeDefined();
		});

		it('should bring back a list that has the CEO as the root node', () => {
			const [root] = service.fetchData();

			expect(root.id).toBe(150);
			expect(root.name).toBe('Jamie');
			expect(root.employees.length).toBe(2);
		});
	});
});
