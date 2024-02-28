// Importing necessary modules from Angular testing library
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the component to be tested
import { navSide } from './side-bar.component';

// Describing a test suite for the navSide component
describe('navSide', () => {
  // Declaring variables to hold the component instance and its fixture
  let component: navSide;
  let fixture: ComponentFixture<navSide>;

  // Setting up the testing environment before each test
  beforeEach(async () => {
    // Configuring the testing module with required imports
    await TestBed.configureTestingModule({
      imports: [navSide]
    })
    // Compiling the components to create the testing module
    .compileComponents();

    // Creating a fixture for the component and getting its instance
    fixture = TestBed.createComponent(navSide);
    component = fixture.componentInstance;

    // Detecting changes in the component (running change detection)
    fixture.detectChanges();
  });

  // Specifying a test case to check if the component is created
  it('should create', () => {
    // Asserting that the component instance is truthy (not null or undefined)
    expect(component).toBeTruthy();
  });
});
