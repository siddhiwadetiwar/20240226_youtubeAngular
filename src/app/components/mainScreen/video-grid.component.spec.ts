// Importing necessary modules from Angular for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the component to be tested
import { VideoGridComponent } from './video-grid.component';

// Describing the test suite for the VideoGridComponent
describe('VideoGridComponent', () => {
  // Declaring variables to hold the component instance and its fixture for testing
  let component: VideoGridComponent;
  let fixture: ComponentFixture<VideoGridComponent>;

  // Setting up asynchronous beforeEach function to configure TestBed before each test
  beforeEach(async () => {
    // Configuring TestBed with necessary modules and components for testing
    await TestBed.configureTestingModule({
      imports: [VideoGridComponent] // Note: It's unusual to import a component here, it should be modules
    })
    .compileComponents(); // Compiling the components

    // Creating a ComponentFixture and obtaining the component instance
    fixture = TestBed.createComponent(VideoGridComponent);
    component = fixture.componentInstance;

    // Detecting changes to the component
    fixture.detectChanges();
  });

  // Specifying a test case: it checks if the component is created successfully
  it('should create', () => {
    // Assertion: Expecting that the component is truthy, meaning it has been successfully created
    expect(component).toBeTruthy();
  });
});
