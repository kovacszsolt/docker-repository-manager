import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatMenuModule} from '@angular/material/menu';
import {ConfigService} from '@service/config/config.service';
import {configMock} from '@mock/config.mock';
import {AppLoadingComponent} from './loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

describe('AppLoadingComponent', () => {
  let component: AppLoadingComponent;
  let fixture: ComponentFixture<AppLoadingComponent>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatMenuModule,
        MatProgressSpinnerModule
      ],
      declarations: [
        AppLoadingComponent
      ],
      providers: [
        ConfigService
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    configService = TestBed.inject(ConfigService);
    fixture = TestBed.createComponent(AppLoadingComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    spyOn(configService, 'readConfig').and.returnValue(of(configMock));
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

});
