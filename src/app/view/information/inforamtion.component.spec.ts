import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatMenuModule} from '@angular/material/menu';
import {ConfigService} from '@service/config/config.service';
import {configMock} from '@mock/config.mock';
import {AppInformationComponent} from './information.component';
import {MatCardModule} from '@angular/material/card';

describe('AppInformationComponent', () => {
  let component: AppInformationComponent;
  let fixture: ComponentFixture<AppInformationComponent>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatMenuModule,
        MatCardModule
      ],
      declarations: [
        AppInformationComponent
      ],
      providers: [
        ConfigService
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    configService = TestBed.inject(ConfigService);
    fixture = TestBed.createComponent(AppInformationComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    spyOn(configService, 'readConfig').and.returnValue(of(configMock));
    expect(component).toBeTruthy();
  });

});
