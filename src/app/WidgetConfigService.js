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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
//import { ContentHeaders } from './Headers';
//import { SessionService } from './SessionService.ts';
require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
//import { Headers } from '@angular/http';
var WidgetConfigService = (function () {
    function WidgetConfigService(http) {
        console.log("Constructor of WidgetConfigService");
        this.WIDGETCONFIGSERVICE_BASEURL = "http://localhost:3000/";
        this.DataFolder = 2;
        this._http = http;
    }
    //public GetSheetsByWorkbookID = (WorkbookID): Observable<Response> => {
    //    console.log("Inside method GetSheetsByWorkbookID in WidgetConfigService");
    //    console.log("API URL: " + this.WIDGETCONFIGSERVICE_SHEETSBYWORKBOOKID);
    //    //export const ContentHeaders = new Headers();
    //    let ContentHeaders = new Headers();
    //    ContentHeaders.append('Accept', 'application/json');
    //    ContentHeaders.append('Content-Type', 'application/json');
    //    return this._http.get(this.WIDGETCONFIGSERVICE_SHEETSBYWORKBOOKID, { headers: ContentHeaders })
    //        .map(Response => Response.json())
    //        .catch(this.HandleError);
    //}
    WidgetConfigService.prototype.GetData = function (requrl) {
        console.log("requrl passed : " + requrl);
        this.WIDGETCONFIGSERVICE_PIVOTGRIDCACHEDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "app/Data/" + requrl + "/CacheJsonData.json";
        this.WIDGETCONFIGSERVICE_PIVOTGRIDCONFIGDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "app/Data/" + requrl + "/ConfigData.json";
        //if (requrl == "Report1") {
        //    this.WIDGETCONFIGSERVICE_PIVOTGRIDCACHEDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "app/Data/Report1/CacheJsonData1.json";
        //    this.WIDGETCONFIGSERVICE_PIVOTGRIDCONFIGDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "app/Data/Report1/ConfigData1.json";
        //}
        //else if (requrl == "Report2") {
        //    this.WIDGETCONFIGSERVICE_PIVOTGRIDCACHEDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "app/Data/Report1/CacheJsonData1.json";
        //    this.WIDGETCONFIGSERVICE_PIVOTGRIDCONFIGDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "app/Data/Report1/ConfigData1.json";
        //}
        //else if (requrl == "Report3") {
        //    this.WIDGETCONFIGSERVICE_PIVOTGRIDCACHEDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "/samples/igPivotGrid-FlatDataSource/MockData/Report3/CacheJsonData3.json";
        //    this.WIDGETCONFIGSERVICE_PIVOTGRIDCONFIGDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "/samples/igPivotGrid-FlatDataSource/MockData/Report3/ConfigData3.json";
        //}
        //else if (requrl == "Report4") {
        //    this.WIDGETCONFIGSERVICE_PIVOTGRIDCACHEDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "/samples/igPivotGrid-FlatDataSource/MockData/Report4/CacheJsonData4.json";
        //    this.WIDGETCONFIGSERVICE_PIVOTGRIDCONFIGDATAURL = this.WIDGETCONFIGSERVICE_BASEURL + "/samples/igPivotGrid-FlatDataSource/MockData/Report4/ConfigData4.json";
        //}
        console.log("In GetData of WidgetConfigService : " + this.WIDGETCONFIGSERVICE_PIVOTGRIDCACHEDATAURL);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this.WIDGETCONFIGSERVICE_PIVOTGRIDCACHEDATAURL, options)
            .map(function (res) { return res.text(); });
    };
    WidgetConfigService.prototype.GetWidgetConfig = function (reportID) {
        console.log("In GetWidgetConfig of WidgetConfigService");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        //this.WIDGETCONFIGSERVICE_WIDGETCONFIGURL = this.WIDGETCONFIGSERVICE_BASEURL + reportID;
        this.WIDGETCONFIGSERVICE_WIDGETCONFIGURL = this.WIDGETCONFIGSERVICE_PIVOTGRIDCONFIGDATAURL;
        console.log("this.WIDGETCONFIGSERVICE_WIDGETCONFIGURL : " + this.WIDGETCONFIGSERVICE_WIDGETCONFIGURL);
        return this._http.get(this.WIDGETCONFIGSERVICE_WIDGETCONFIGURL, options)
            .map(function (res) { return res.text(); });
    };
    WidgetConfigService.prototype.HandleError = function (error) {
        console.log("Inside HandleError of WidgetConfigService");
        //this._SessionService.ERROR_MESSAGE = "Error occurred in WidgetConfig Service. Error : " + error;
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return WidgetConfigService;
}());
WidgetConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WidgetConfigService);
exports.WidgetConfigService = WidgetConfigService;
//# sourceMappingURL=WidgetConfigService.js.map