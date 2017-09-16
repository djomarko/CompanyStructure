import { EmployeeData } from './../../common/EmployeeData';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNodeComponent } from './employee-node.component';

describe('EmployeeNodeComponent', () => {
	let component: EmployeeNodeComponent;
	let fixture: ComponentFixture<EmployeeNodeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EmployeeNodeComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployeeNodeComponent);
		component = fixture.componentInstance;
		component.data =  { id: 1,
				name: 'Smith',
				employees: []
			};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(`should show employee 'Smith' name in a 'a' tag`, () => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('a').textContent).toContain('Smith');
	});

	it(`should show employee id before the name in a 'a' tag`, () => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('a').textContent).toContain('1: Smith');
	});

	it(`should show employees 'Ted' and 'Tod' that are managed by 'Smith'`, () => {
		component.data =  { id: 1,
			name: 'Smith',
			employees: [
				{
					id: 2,
					name: 'Ted',
					employees: []
				},
				{
					id: 3,
					name: 'Tod',
					employees: []
				}
			]
		};
		fixture.detectChanges();

		const compiled = fixture.debugElement.nativeElement;
		const employeeNodes = compiled.querySelectorAll('app-employee-node');
		expect(employeeNodes.length).toBe(2);
		expect(employeeNodes[0].querySelector('a').textContent).toContain('Ted');
		expect(employeeNodes[1].querySelector('a').textContent).toContain('Tod');
	});
});
