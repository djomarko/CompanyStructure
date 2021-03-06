import { HttpModule } from '@angular/http';
import { EmployeeNodeComponent } from './components/employee-node/employee-node.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ HttpModule ],
			declarations: [
				AppComponent,
				EmployeeNodeComponent
			],
		}).compileComponents();
	}));
	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
