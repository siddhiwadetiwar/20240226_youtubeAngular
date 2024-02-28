// Importing necessary modules from Angular testing library
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the SettingsComponent that will be tested
import { SettingsComponent } from './settings.component';

// Describing the test suite for SettingsComponent
describe('SettingsComponent', () => {

  // Declaring variables to hold the component and its fixture
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  // Setting up the testing environment before each test
  beforeEach(async () => {
    // Configuring the TestBed module with the required imports
    await TestBed.configureTestingModule({
      imports: [SettingsComponent]
    })
    // Compiling the components and configuring the testing environment
    .compileComponents();

    // Creating a fixture for the SettingsComponent
    fixture = TestBed.createComponent(SettingsComponent);

    // Getting the component instance
    component = fixture.componentInstance;

    // Detecting changes in the component
    fixture.detectChanges();
  });

  // Specifying a test to check if the component is created successfully
  it('should create', () => {
    // Expecting that the component instance is truthy, indicating it is created
    expect(component).toBeTruthy();
  });
});
