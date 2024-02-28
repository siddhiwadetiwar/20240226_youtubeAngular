// Importing the necessary module for Angular testing
import { TestBed } from '@angular/core/testing';

// Importing the main component to be tested
import { AppComponent } from './app.component';

// Describing a test suite for the AppComponent
describe('AppComponent', () => {
  // Setting up a before each block to run asynchronously before each test
  beforeEach(async () => {
    // Configuring the TestBed module with necessary components and dependencies
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Importing the AppComponent for testing
    }).compileComponents(); // Compiling the components
  });

  // Specifying a test: it should create the app successfully
  it('should create the app', () => {
    // Creating a component fixture for the AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    // Extracting the instance of the component
    const app = fixture.componentInstance;
    // Asserting that the component instance exists
    expect(app).toBeTruthy();
  });

  // Specifying a test: it should have the correct title for the app
  it(`should have the 'youtube-using-angular' title`, () => {
    // Creating a component fixture for the AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    // Extracting the instance of the component
    const app = fixture.componentInstance;
    // Asserting that the title property of the component matches the expected value
    expect(app.title).toEqual('youtube-using-angular');
  });

  // Specifying a test: it should render the title in the HTML
  it('should render title', () => {
    // Creating a component fixture for the AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    // Triggering change detection to update the component view
    fixture.detectChanges();
    // Accessing the native HTML element of the fixture
    const compiled = fixture.nativeElement as HTMLElement;
    // Asserting that the h1 element's text content contains the expected title
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, youtube-using-angular');
  });
});
