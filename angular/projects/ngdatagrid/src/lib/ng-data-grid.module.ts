import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgDataGridComponent } from './ng-data-grid.component';
import { GetkeysPipe } from './get-keys.pipe';
import { NgPaginationModule } from '@nikxsh/ngpagination';

@NgModule({
	declarations: [
		NgDataGridComponent,
		GetkeysPipe
	],
	imports: [
		CommonModule,
		FormsModule,
		NgPaginationModule
	],
	exports: [
		NgDataGridComponent
	]
})
export class NgDataGridModule { }
