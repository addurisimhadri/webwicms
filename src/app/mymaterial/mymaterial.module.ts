import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatMenuModule } from '@angular/material/menu';
import {  MatButtonModule ,} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'

import {MatNativeDateModule} from '@angular/material/core';  
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from  '@angular/material/input';
import {MatProgressSpinnerModule}  from '@angular/material/progress-spinner';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule} from  '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [],
  imports: [A11yModule, CdkStepperModule, CdkTableModule, CdkTreeModule, DragDropModule,ScrollingModule,
    CommonModule,MatButtonModule,  MatMenuModule, MatSidenavModule, MatPaginatorModule,MatDatepickerModule,MatToolbarModule, MatIconModule,MatListModule,
    MatRadioModule,MatSelectModule,MatSliderModule,MatDividerModule,MatNativeDateModule,MatSnackBarModule,MatDialogModule,MatTableModule,
    MatSortModule,MatTabsModule,MatCheckboxModule,MatInputModule,MatCardModule,MatProgressSpinnerModule, MatFormFieldModule,
    MatAutocompleteModule,MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule,  MatExpansionModule, MatGridListModule,
    MatProgressBarModule, MatRippleModule, MatSlideToggleModule, MatStepperModule,MatTooltipModule, MatTreeModule

  ],
  exports:[A11yModule, CdkStepperModule, CdkTableModule, CdkTreeModule, DragDropModule,ScrollingModule,
    CommonModule,MatButtonModule,  MatMenuModule, MatSidenavModule, MatPaginatorModule,MatDatepickerModule,MatToolbarModule, MatIconModule,MatListModule,
    MatRadioModule,MatSelectModule,MatSliderModule,MatDividerModule,MatNativeDateModule,MatSnackBarModule,MatDialogModule,MatTableModule,
    MatSortModule,MatTabsModule,MatCheckboxModule,MatInputModule,MatCardModule,MatProgressSpinnerModule, MatFormFieldModule,
    MatAutocompleteModule,MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule,  MatExpansionModule, MatGridListModule,
    MatProgressBarModule, MatRippleModule, MatSlideToggleModule, MatStepperModule,MatTooltipModule, MatTreeModule


  ]
})
export class MymaterialModule { }
