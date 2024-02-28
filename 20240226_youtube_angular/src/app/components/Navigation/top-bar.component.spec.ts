// Importing necessary modules from Angular testing library
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the component to be tested
import { topComp } from './top-bar.component';

// Describing the test suite for the 'topComp' component
describe('topComp', () => {
  // Declaring variables to hold the component instance and its fixture
  let component: topComp;
  let fixture: ComponentFixture<topComp>;

  // Setting up asynchronous tasks to be executed before each test
  beforeEach(async () => {
    // Configuring the TestBed with necessary modules and components
    await TestBed.configureTestingModule({
      imports: [topComp]
    })
    // Compiling the components
    .compileComponents();

    // Creating an instance of the component and its fixture
    fixture = TestBed.createComponent(topComp);
    component = fixture.componentInstance;

    // Detecting changes to the component
    fixture.detectChanges();
  });

  // Specifying a test case: 'should create'
  it('should create', () => {
    // Asserting that the component should exist (not null or undefined)
    expect(component).toBeTruthy();
  });
});
