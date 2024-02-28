// Importing necessary modules for Angular testing
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the SubscriptionsComponent for testing
import { SubscriptionsComponent } from './subscriptions.component';

// Describing the test suite for the SubscriptionsComponent
describe('SubscriptionsComponent', () => {
  // Declaring variables to hold the component instance and its fixture
  let component: SubscriptionsComponent;
  let fixture: ComponentFixture<SubscriptionsComponent>;

  // Setting up the testing environment before each test
  beforeEach(async () => {
    // Configuring the testing module with necessary imports
    await TestBed.configureTestingModule({
      imports: [SubscriptionsComponent]
    })
    // Compiling the components and modules
    .compileComponents();

    // Creating an instance of the component within a testing fixture
    fixture = TestBed.createComponent(SubscriptionsComponent);
    // Obtaining the component instance from the fixture
    component = fixture.componentInstance;
    // Detecting changes in the component
    fixture.detectChanges();
  });

  // Writing a test case to check if the component is created successfully
  it('should create', () => {
    // Expecting that the component instance is truthy, indicating successful creation
    expect(component).toBeTruthy();
  });
});
