import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';

const materialItems = [
    MatToolbarModule,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        materialItems
    ],
    exports: [
        materialItems
    ]
})
export class MaterialItemsModule { }