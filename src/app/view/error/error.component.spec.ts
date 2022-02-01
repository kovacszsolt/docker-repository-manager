import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatMenuModule} from '@angular/material/menu';
import {AppErrorComponent} from './error.component';
import {ConfigService} from '@service/config/config.service';
import {configMock} from '@mock/config.mock';
import {MatCardModule} from '@angular/material/card';

describe('ErrorComponent', () => {
  let component: AppErrorComponent;
  let fixture: ComponentFixture<AppErrorComponent>;
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
        AppErrorComponent
      ],
      providers: [
        ConfigService
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    configService = TestBed.inject(ConfigService);
    fixture = TestBed.createComponent(AppErrorComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    spyOn(configService, 'readConfig').and.returnValue(of(configMock));
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

});
