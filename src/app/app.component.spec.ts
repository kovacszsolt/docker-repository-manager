import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {ConfigService} from '@service/config/config.service';
import {of} from 'rxjs';
import {configMock} from '@mock/config.mock';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ConfigService
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    configService = TestBed.inject(ConfigService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    spyOn(configService, 'readConfig').and.returnValue(of(configMock));
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

});
