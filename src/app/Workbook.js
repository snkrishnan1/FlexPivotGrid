"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Workbook = (function () {
    function Workbook() {
        this.workbookSheet = [{ "name": "" }]; //Prepopulate the dropdown with empty while loading, then it is assigned with the actual value
        this.selected = this.workbookSheet;
        this.workbookSheetsList = [{ "name": "SimpleReport" }, { "name": "Highlighting" }, { "name": "CalculatedColumns" }, { "name": "DateFormat" }, { "name": "KPIIndicator" }];
        this.ReportID = "SimpleReport";
    }
    Workbook.prototype.onChange = function (workbook) {
        console.log("onChange event in Workbook");
        console.log(workbook);
        this.ReportID = workbook.name;
        //this.pivotGrid.LoadInfraPivotGrid();
    };
    return Workbook;
}());
Workbook = __decorate([
    core_1.Component({
        selector: 'workbook',
        templateUrl: "./Workbook.html"
    }),
    __metadata("design:paramtypes", [])
], Workbook);
exports.Workbook = Workbook;
//# sourceMappingURL=Workbook.js.map