import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatMenuModule} from '@angular/material/menu';
import {ConfigService} from '@service/config/config.service';
import {configMock} from '@mock/config.mock';
import {AppYesNoComponent} from './yes-no.component';
import {MatDialogModule} from '@angular/material/dialog';

describe('AppYesNoComponent', () => {
  let component: AppYesNoComponent;
  let fixture: ComponentFixture<AppYesNoComponent>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatMenuModule,
        MatDialogModule,
      ],
      declarations: [
        AppYesNoComponent
      ],
      providers: [
        ConfigService
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    configService = TestBed.inject(ConfigService);
    fixture = TestBed.createComponent(AppYesNoComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    spyOn(configService, 'readConfig').and.returnValue(of(configMock));
    expect(component).toBeTruthy();
  });

});
