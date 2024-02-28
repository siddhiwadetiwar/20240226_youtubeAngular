// Importing necessary components from Angular testing module
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the component to be tested
import { SubscribedVideosComponent } from './subscribed-videos.component';

// Describing a test suite for the SubscribedVideosComponent
describe('SubscribedVideosComponent', () => {
  // Declaring variables to hold the component and its testing fixture
  let component: SubscribedVideosComponent;
  let fixture: ComponentFixture<SubscribedVideosComponent>;

  // Setting up asynchronous test environment before each test
  beforeEach(async () => {
    // Configuring the testing module with necessary imports
    await TestBed.configureTestingModule({
      imports: [SubscribedVideosComponent]
    })
    // Compiling the components for testing
    .compileComponents();

    // Creating an instance of the testing fixture for the component
    fixture = TestBed.createComponent(SubscribedVideosComponent);
    // Getting the component instance from the fixture
    component = fixture.componentInstance;
    // Detecting changes in the component
    fixture.detectChanges();
  });

  // Specifying a test case: should create the component
  it('should create', () => {
    // Asserting that the component instance is truthy, indicating successful creation
    expect(component).toBeTruthy();
  });
});
