import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [],
    exports: [
        FormsModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }
