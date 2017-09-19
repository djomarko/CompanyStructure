import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, ResponseOptions, Response, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CompanyStructureService } from './company-structure.service';

import * as data from './../current.mock.json';


describe('CompanyStructureService', () => {

	let service: CompanyStructureService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [[
				MockBackend,
				BaseRequestOptions,
				CompanyStructureService,
				{
					provide: Http,
					useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
						return new Http(backend, options);
					},
					deps: [MockBackend, BaseRequestOptions]
				}]]
		});
	});

	beforeEach(inject([CompanyStructureService, MockBackend], (csService: CompanyStructureService, backend: MockBackend) => {
		service = csService;

		const expectedUrl = '/api/employees';

		backend.connections.subscribe(
			(connection: MockConnection) => {
				expect(connection.request.method).toBe(RequestMethod.Get);
				expect(connection.request.url).toBe(expectedUrl);

			connection.mockRespond(new Response(
				new ResponseOptions({ body: data })
			));
		});
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
			expect(root.subordinates.length).toBe(2);
		});
	});
});
