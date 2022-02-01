import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ConfigService} from '@service/config/config.service';
import {configMock} from '@mock/config.mock';
import {AppTagListComponent} from './tag-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

describe('AppTagListComponent', () => {
  let component: AppTagListComponent;
  let fixture: ComponentFixture<AppTagListComponent>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
      ],
      declarations: [
        AppTagListComponent
      ],
      providers: [
        ConfigService
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    configService = TestBed.inject(ConfigService);
    fixture = TestBed.createComponent(AppTagListComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    spyOn(configService, 'readConfig').and.returnValue(of(configMock));
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

});
