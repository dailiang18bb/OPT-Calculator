import {NgModule} from '@angular/core';
import {
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatCardModule,
    //
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule,
    MatListModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatGridListModule
  } from '@angular/material';


  @NgModule({
    exports: [
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatCardModule,
        //
        MatToolbarModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule,
        MatListModule, 
        MatSelectModule, 
        MatRadioModule, 
        MatGridListModule
    ]
})
export class DatePickerMaterialModule {}