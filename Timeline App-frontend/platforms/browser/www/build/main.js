webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usersService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, usersService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: '错误提示',
            subTitle: '用户名或密码有误',
            buttons: ['确认']
        });
        alert.present();
    };
    LoginPage.prototype.login = function (username, password) {
        var _this = this;
        if (!username || !password) {
            this.showAlert();
            return;
        }
        var users = {
            "username": username,
            "password": password
        };
        console.log(users);
        console.log(users['username']);
        console.log(JSON.stringify(users));
        this.usersService.login(JSON.stringify(users));
        var responseMessage = this.usersService.login(JSON.stringify(users));
        responseMessage.subscribe(function (response) {
            if (response["_body"] == "true") {
                _this.userInfo = username;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], { userInfo: _this.userInfo });
            }
            else {
                _this.showAlert();
            }
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\login\login.html"*/'<ion-header>\n\n    \n\n</ion-header>\n\n\n\n<ion-content padding style="background: url(assets/imgs/15.jpg) no-repeat; background-size: 100%">\n\n    \n\n    <h2 style="text-align: center; font-size: 27px; color:#fff; margin-top: 80px;">Timeline</h2>\n\n    <h2 style="text-align: center; font-size: 25px; color: #fff; margin-bottom: 80px;">信息分享平台</h2>\n\n\n\n  <div>\n\n\n\n      <h4 style="margin-top: 40px; margin-bottom: 10px; color: #fff;">登录</h4>\n\n\n\n      <ion-list >\n\n\n\n          <ion-item style="background-color: unset; ">\n\n            <ion-label fixed style="color: #fff; ">用户名</ion-label>\n\n            <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item style="background-color: unset; ">\n\n            <ion-label fixed style="color: #fff; ">密码</ion-label>\n\n            <ion-input style="background-color: unset; " type="password" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n        <h6 item-end (click)="register()" style="margin-top: -20px; margin-left: 270px; color:#fff;">注册账号</h6>\n\n        <button ion-button block (click)="login(username,password)">登 录</button>\n\n        \n\n  </div>\n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\login\login.html"*/,
            styles: ['./login.scss'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usersService__["a" /* usersService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var newsService = /** @class */ (function () {
    function newsService(http) {
        this.http = http;
        this.API = 'http://localhost:8080/news';
    }
    newsService.prototype.newsList = function (message) {
        console.log("get news list message.");
        return this.sendMessage(message, 'newsList');
    };
    newsService.prototype.addNews = function (message) {
        console.log("get add news message.");
        return this.sendMessage(message, 'addNews');
    };
    // get(id: string) {
    //   return this.http.get(this.Login_API + '/' + id);
    // }
    newsService.prototype.sendMessage = function (message, controllerURL) {
        var url = this.API + '/' + controllerURL;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.responseMessage = this.http.post(url, "message=" + message, options);
        console.log(this.responseMessage);
        return this.responseMessage;
    };
    newsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], newsService);
    return newsService;
}());

//# sourceMappingURL=newsService.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService_1 = ToastService;
    // 显示 toast提示
    ToastService.prototype.showToast = function (message, position) {
        if (position === void 0) { position = ToastService_1.TOAST_POS_BOTTOM; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: position
        });
        toast.present();
        return toast;
    };
    ToastService.prototype.showNoticeByToast = function (code, msg) {
        var m = '';
        if (msg && msg.length > 0) {
            if (msg.charAt(msg.length - 1) == '!' || msg.charAt(msg.length - 1) == '！') {
                msg = msg.substr(0, msg.length - 1);
            }
        }
        if (code == 1) {
            m = '提示：' + msg + '！';
        }
        else {
            m = '错误' + code + '：' + msg + '！';
        }
        return this.showToast(m);
    };
    ToastService.TOAST_POS_BOTTOM = 'top';
    ToastService.TOAST_POS_MIDDLE = 'middle';
    ToastService = ToastService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ToastService);
    return ToastService;
    var ToastService_1;
}());

//# sourceMappingURL=toastService.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var usersService = /** @class */ (function () {
    function usersService(http) {
        this.http = http;
        this.API = 'http://localhost:8080/users';
    }
    usersService.prototype.login = function (message) {
        console.log("get login message.");
        return this.sendMessage(message, 'login');
    };
    usersService.prototype.register = function (message) {
        console.log("get register message.");
        return this.sendMessage(message, 'register');
    };
    // get(id: string) {
    //   return this.http.get(this.Login_API + '/' + id);
    // }
    usersService.prototype.getMessage = function () {
        console.log("getmessage.");
        return this.http.get(this.API + '/getMessage');
    };
    usersService.prototype.sendMessage = function (message, controllerURL) {
        var url = this.API + '/' + controllerURL;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.responseMessage = this.http.post(url, "message=" + message, options);
        console.log(this.responseMessage);
        return this.responseMessage;
    };
    usersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], usersService);
    return usersService;
}());

//# sourceMappingURL=usersService.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usersService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl, usersService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.usersService = usersService;
    }
    RegisterPage.prototype.enterHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    RegisterPage.prototype.showAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: '错误提示',
            subTitle: '密码不一致',
            buttons: ['确认']
        });
        alert.present();
    };
    RegisterPage.prototype.showAlert2 = function () {
        var alert = this.alertCtrl.create({
            title: '错误提示',
            subTitle: '该用户已存在',
            buttons: ['确认']
        });
        alert.present();
    };
    RegisterPage.prototype.showAlert3 = function () {
        var alert = this.alertCtrl.create({
            title: '错误提示',
            subTitle: '请完善个人信息',
            buttons: ['确认']
        });
        alert.present();
    };
    RegisterPage.prototype.register = function (username, password1, password2) {
        var _this = this;
        if (!password1 || !password2 || !username) {
            this.showAlert3();
            return;
        }
        if (password1 != password2) {
            this.showAlert1();
        }
        else {
            var users = {
                "username": username,
                "password": password1
            };
            var responseMessage = this.usersService.register(JSON.stringify(users));
            responseMessage.subscribe(function (response) {
                console.log(response);
                if (response["_body"] == "true") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login__["a" /* LoginPage */], _this.userInfo);
                }
                else {
                    _this.showAlert2();
                }
            });
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\login\register.html"*/'<ion-header>\n\n     \n\n</ion-header>\n\n\n\n<ion-content padding style="background: url(assets/imgs/15.jpg) no-repeat; background-size: 100%">\n\n\n\n  <button ion-button clear navPop icon-start style="color: white;">\n\n      <ion-icon name=\'arrow-back\'></ion-icon>\n\n      返回登录  \n\n  </button>\n\n  \n\n  <h2 style="margin-top: 20px; margin-bottom: 30px; font-size: 20px; font-size: 25px;\n\n    font-weight: bold;\n\n    color: #488aff;">注册新用户</h2>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n              <ion-label style="font-size: 1.6rem;" fixed>用户名</ion-label>\n\n              <ion-input type="text" value="" [(ngModel)]="username" required></ion-input>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label style="font-size: 1.6rem;" fixed>密码</ion-label>\n\n              <ion-input type="password"  [(ngModel)]="password1"></ion-input>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n                <ion-label style="font-size: 1.6rem;" fixed>再次输入密码</ion-label>\n\n                <ion-input type="password"  [(ngModel)]="password2"></ion-input>\n\n              </ion-item>\n\n\n\n          </ion-list>\n\n          <button ion-button block (click)="register(username,password1,password2)">注  册</button>\n\n          \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\login\register.html"*/,
            styles: ['./register.scss'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usersService__["a" /* usersService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mockData_mockSlides__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addNews_addNews__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_newsService__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, nav, newsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.newsService = newsService;
        this.mySlide = __WEBPACK_IMPORTED_MODULE_2__mockData_mockSlides__["a" /* mockSlides */];
        this.userInfo = this.navParams.data.userInfo;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad homePage');
        this.viewNewsList();
    };
    HomePage.prototype.viewNewsList = function () {
        var _this = this;
        var list = {
            "id": "0",
            "content": "1"
        };
        var responseMessage = this.newsService.newsList(JSON.stringify(list));
        responseMessage.subscribe(function (response) {
            if (response["_body"]) {
                console.log(JSON.parse(response["_body"]));
                //console.log(response["_body"]);
                _this.myNews = JSON.parse(response["_body"]);
            }
        });
    };
    HomePage.prototype.openAddNewsPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__addNews_addNews__["a" /* AddNewsPage */], { userInfo: this.userInfo });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>首页</ion-title>\n    <button style="background-color: #f8f8f8; \n    margin-left: 320px; \n    font-weight: bolder;\n    color: #488aff;\n    font-size: 3.0rem;\n    " (click)="openAddNewsPage()">\n    <ion-icon name="add-circle"></ion-icon>\n  </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="tutorial-page">\n  <ion-slides pager loop="true" autoplay="1500" style="margin-top:0px;  max-height: 300px;">\n    <ion-slide *ngFor="let slide of mySlide">\n      <img  [src]="slide.image" class="slide-image"/>\n      <!-- <h2 style="font-size:1.6rem; margin-top: 0.8px;" class="slide-title" [innerHTML]="slide.title"></h2> -->\n    </ion-slide>\n  </ion-slides>\n\n    <div>\n    \n      <ion-list>\n          <ion-list-header style="font-size:15px;">全  部  分  享</ion-list-header>    \n          \n          <ion-refresher style="color:red;" (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content style="color:red; "\n              pullingIcon="arrow-dropdown"\n              pullingText="Pull to refresh"\n              refreshingSpinner="circles"\n              refreshingText="Refreshing...">\n            </ion-refresher-content>\n          </ion-refresher>\n\n          <ion-item *ngFor="let news of myNews">\n\n              <h2 style="font-size:1.9rem; color:black; font-weight:bolder;">{{news.author}}</h2>\n              <h2 style="font-size:1.4rem; color:grey; font-weight:light;">{{news.time}}</h2>\n          \n              <ion-scroll style="margin-left: -13px;\n                                  margin-right: -19px;\n                                  padding:0px; \n                                  white-space:normal; \n                                  min-width:100%; \n                                  margin-top:10px;\n                                  min-height:130px; \n                                  margin-bottom:10px; \n                                  color:#000000c2;" scrollX="true" scrollY="true">\n                {{news.content}}\n              </ion-scroll>\n \n              <img style="width: 100%; height: 100%" [src]="news.imageURL">\n\n            <ion-row>\n              <ion-col>\n                <button ion-button icon-start clear small>\n                  <ion-icon style="color:red;" name="heart"></ion-icon>\n                  <div style="color:black;">12 Likes</div>\n                </button>\n              </ion-col>\n            </ion-row>\n              \n            </ion-item>\n            \n      </ion-list>\n\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content\n        loadingSpinner="bubbles"\n        loadingText="加载更多">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\home\home.html"*/,
            styles: ['./home.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_newsService__["a" /* newsService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_newsService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toastService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_imgService__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//mport { missionService } from '../../providers/missionService';
var AddNewsPage = /** @class */ (function () {
    function AddNewsPage(navCtrl, navParams, alertCtrl, newsService, toastSer, imgSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.newsService = newsService;
        this.toastSer = toastSer;
        this.imgSer = imgSer;
        this.userInfo = navParams.data.userInfo;
    }
    AddNewsPage.prototype.showAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: '错误提示',
            subTitle: '请填写分享内容',
            buttons: ['确认']
        });
        alert.present();
    };
    AddNewsPage.prototype.showAlert2 = function () {
        var alert = this.alertCtrl.create({
            title: '错误提示',
            subTitle: '分享失败',
            buttons: ['重试']
        });
        alert.present();
    };
    AddNewsPage.prototype.avatarChoice = function () {
        this.initImgSer();
        this.imgSer.showPicActionSheet();
    };
    AddNewsPage.prototype.initImgSer = function () {
        var _this = this;
        this.imgSer.upload.url = 'assets/imgs'; // 上传图片的url，如果同默认配置的url一致，那无须再设置
        this.imgSer.upload.success = function (data) {
            //上传成功后的回调处理
            //this.doctorData.avatar = data.data.url;
        };
        this.imgSer.upload.error = function (err) {
            _this.toastSer.showToast('错误：上传失败！');
        };
    };
    AddNewsPage.prototype.addNews = function (imageURL, content) {
        var _this = this;
        if (!content) {
            this.showAlert1();
            return;
        }
        var message = {
            "content": content,
            "imageURL": imageURL,
            "author": this.userInfo
        };
        var responseMessage = this.newsService.addNews(JSON.stringify(message));
        responseMessage.subscribe(function (response) {
            if (response["_body"] == "true") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { userInfo: _this.userInfo });
            }
            else {
                _this.showAlert2();
            }
        });
    };
    AddNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\addNews\addNews.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            分享\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <textarea style="height: 200px; width: 100%; font-size: 1.8rem" type="text" [(ngModel)]="content" placeholder="分享新鲜事……" required></textarea>\n\n    \n\n    <button ion-button outline (click)="avatarChoice()" style="border-radius: 0px; font-size: 1.6rem; font-size: 1.8rem; height:100px; width: 100px;" fixed>\n\n      <ion-icon name="add" style="margin-right: -40px; margin-left: -10px;font-size: 50px; margin-bottom: 30px;"></ion-icon>\n\n      <h2 item-start style="max-height: 20px; font-size: 1.4rem; margin-right: -27px; margin-left: 0px; color: black; margin-top: 50px; font-weight:normal;">\n\n        上传图片</h2>\n\n    </button>   \n\n    \n\n    <button ion-button block (click)="addNews(imageURL,content)">发  布</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\addNews\addNews.html"*/,
            styles: ['./addNews.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_newsService__["a" /* newsService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toastService__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_imgService__["a" /* ImgService */]])
    ], AddNewsPage);
    return AddNewsPage;
}());

//# sourceMappingURL=addNews.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toastService__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImgService = /** @class */ (function () {
    function ImgService(actionSheetCtrl, noticeSer, imagePicker, transfer, file, fileTransfer) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.noticeSer = noticeSer;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.file = file;
        this.fileTransfer = fileTransfer;
        // 调用相册时传入的参数
        this.imagePickerOpt = {
            maximumImagesCount: 1,
            width: 800,
            height: 800,
            quality: 80
        };
        this.upload = {
            url: 'assets/imgs',
            fileKey: 'image',
            fileName: 'imageName.jpg',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' //不加入 发生错误！！
            },
            params: {},
            success: function (data) { },
            error: function (err) { },
            listen: function () { } //监听上传过程
        };
        this.fileTransfer = this.transfer.create();
    }
    ImgService.prototype.showPicActionSheet = function () {
        this.useASComponent();
    };
    // 使用ionic中的ActionSheet组件
    ImgService.prototype.useASComponent = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '请选择',
            buttons: [{
                    text: '从本地选择',
                    handler: function () {
                        _this.openImgPicker();
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                    }
                }]
        });
        actionSheet.present();
    };
    // 打开手机相册
    ImgService.prototype.openImgPicker = function () {
        var _this = this;
        var temp = '';
        this.imagePicker.getPictures(this.imagePickerOpt).then(function (results) {
            console.log("成功打开手机相册");
            for (var i = 0; i < results.length; i++) {
                temp = results[i];
            }
            _this.uploadImg(temp);
        }, function (err) {
            _this.noticeSer.showToast('ERROR:' + err); //错误：无法从手机相册中选择图片！
        });
    };
    // 上传图片
    ImgService.prototype.uploadImg = function (path) {
        var _this = this;
        if (!path) {
            return;
        }
        var options;
        options = {
            fileKey: this.upload.fileKey,
            headers: this.upload.headers,
            params: this.upload.params
        };
        this.fileTransfer.upload(path, this.uploadApi, options).then(function (data) {
            if (_this.upload.success) {
                _this.upload.success(JSON.parse(data.response));
            }
        }, function (err) {
            if (_this.upload.error) {
                _this.upload.error(err);
            }
            else {
                _this.noticeSer.showToast('错误：上传失败！');
            }
        });
    };
    // 停止上传
    ImgService.prototype.stopUpload = function () {
        if (this.fileTransfer) {
            this.fileTransfer.abort();
        }
    };
    ImgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__toastService__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["b" /* FileTransferObject */]])
    ], ImgService);
    return ImgService;
}());

//# sourceMappingURL=imgService.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockData_mockNews__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(navParams) {
        this.navParams = navParams;
        this.myNews = __WEBPACK_IMPORTED_MODULE_1__mockData_mockNews__["a" /* mockNews */];
        this.userInfo = navParams.data.userInfo;
    }
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\myProfile\myProfile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        我的\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <ion-card>\n\n      <img src="assets/imgs/1.jpg"/>\n\n      <ion-item>用户名：{{ userInfo }}</ion-item>\n\n    </ion-card>\n\n  \n\n    <!-- <div padding>\n\n      <ion-list>\n\n        <ion-item style="color: black;">账号:</ion-item>\n\n        <button ion-item style="color: black;" (click)="editGender()">性别:</button>\n\n        <button ion-item style="color: black;" (click)="editNumber()">电话:</button>\n\n        <button ion-item style="color: black;" (click)="editJob()">职业:</button>\n\n      </ion-list>\n\n    </div> -->\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\myProfile\myProfile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__["g" /* NavParams */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=myProfile.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_register__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_myProfile_myProfile__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_addNews_addNews__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_usersService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_newsService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_image_picker__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_imgService__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_toastService__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_myProfile_myProfile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addNews_addNews__["a" /* AddNewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__node_modules_angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_myProfile_myProfile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addNews_addNews__["a" /* AddNewsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__providers_usersService__["a" /* usersService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_newsService__["a" /* newsService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_imgService__["a" /* ImgService */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_20__providers_toastService__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["a" /* FileTransfer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, http) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.data = {};
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        //http.get('resource').subscribe(data => this.data = data);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lenovo\Desktop\Timeline App-front\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\lenovo\Desktop\Timeline App-front\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mockSlides; });
var mockSlides = [
    {
        "title": "欢迎来到Timeline信息分享平台!",
        "description": "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        "image": "assets/imgs/7.jpg",
    },
    {
        "title": "在这里，你将邂逅成千上百种人生体验...",
        "description": "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
        "image": "assets/imgs/5.jpg",
    },
    {
        "title": "还在等什么，赶快加入我们~",
        "description": "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        "image": "assets/imgs/6.jpg",
    },
    {
        "title": "还在等什么，赶快加入我们~",
        "description": "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        "image": "assets/imgs/4.jpg",
    },
    {
        "title": "还在等什么，赶快加入我们~",
        "description": "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        "image": "assets/imgs/8.jpg",
    },
    {
        "title": "还在等什么，赶快加入我们~",
        "description": "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        "image": "assets/imgs/9.jpg",
    }
];
//# sourceMappingURL=mockSlides.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mockNews; });
var mockNews = [
    {
        "imageURL": 'assets/imgs/5.jpg',
        "username": '刘馨雨',
        "time": new Date().toLocaleTimeString(),
        "content": '12月15日14时许，香港深水埗街头大量港币现钞从一栋大厦的天台撒落，引路人疯抢。15时许警方抵达现场，封锁事发路段，并上天台调查。经查，捡获约5000元现金港币。据港媒报道，撒钱人疑似是现年24岁的黄钲杰，自称在虚拟货币领域赚了大钱。目前警方正在调查该案，暂未有人被捕。'
    }, {
        "imageURL": 'assets/imgs/4.jpg',
        "username": 'Karlie Fang',
        "time": new Date().toLocaleTimeString(),
        "content": '近日，有网爆消息称张柏芝日前诞下三胎。11月29日，有港媒拍到张妈妈前往医院，但被问及是否去探望生产的女儿时，张妈只称只是去看病。另有媒体就生子传闻求证张柏芝经纪人，对方表示“没有话说，sorry”便挂了电话。'
    }, {
        "imageURL": 'assets/imgs/5.jpg',
        "username": 'Xinyu Liu',
        "time": new Date().toLocaleTimeString(),
        "content": '针对国内5G网络套餐资费其实网友们也很在意，但是更需要值得关心的是，现如今市面上还没有5G手机，如果是想要使用5G网络，还需要一个支持5G的设备，这才会是更加昂贵的代价！而此前中国移动终端公司副总经理汪恒江也对外表示，可能明年将会有第一批量产5G手机将会推出，价格预计在8000元，如果你觉得太贵了，可能等到2020年5G手机可能大量的出现，可能到时候降至1000元以上级别。'
    }, {
        "imageURL": 'assets/imgs/6.jpg',
        "username": 'Shengkai Xu',
        "time": new Date().toLocaleTimeString(),
        "content": '虽然说5G手机将要到来，但这也不意味着4G手机就会被淘汰，毕竟5G网络的建设还是需要一定的时间的，倘若你不想在这个时候凑热闹，完全可以等待2020年左右再来体验5G网络，而在此期间，4G网络还会是市场上的主流，也就是说不会妨碍我们的正常使用。'
    }, {
        "imageURL": 'assets/imgs/1.jpg',
        "username": 'Karlie Fang',
        "time": new Date().toLocaleTimeString(),
        "content": '不管是在国内还是国外，只要是身处娱乐圈的艺人，有关他们感情的消息，无疑都是吃瓜群众们最喜闻乐见的新闻，而好莱坞的艺人公布恋爱消息，哪怕隔着千山万水太平洋，咱们内地的网友们也是很热衷关心的，最近克里斯帕拉特在自己的社交网站上祝福女友生日，算是正式公开了和施瓦辛格女儿的恋爱关系，凯瑟琳应该很开心吧！'
    }, {
        "imageURL": 'assets/imgs/2.jpg',
        "username": 'Jialun Li',
        "time": new Date().toLocaleTimeString(),
        "content": '克里斯此前在漫威电影《银河护卫队》里饰演“星爵”这个角色，在全球都非常受欢迎，在2017年年末他才向法院递交和前妻的离婚申请，两人在分居之后就火速有了新欢，而“星爵”的新欢就是大名鼎鼎施瓦辛格的女儿凯瑟琳了。'
    }, {
        "imageURL": 'assets/imgs/3.jpg',
        "username": 'Karlie Fang',
        "time": new Date().toLocaleTimeString(),
        "content": '据香港媒体报道，风靡全港的宫斗剧《延禧攻略》登上全球最大搜索网站的全球电视节目热搜榜第一名，今天又有消息指《延禧》版权已卖给了约90个国家，估计其收益在3亿元人民币以上。而广告招商方面，《延禧》起价高达300万元一条，按其70集的体量及每集一条广告来计算，其广告收入最少达2.1亿元。'
    }, {
        "imageURL": 'assets/imgs/7.jpg',
        "username": 'Xinyu Liu',
        "time": new Date().toLocaleTimeString(),
        "content": '滴滴再次迎来变革。据悉，今天滴滴发布员工邮件，宣布组织架构升级。此次升级，滴滴核心业务和多部门都将进行合并、调整，其中专快车事业群合并，成立网约车平台公司，原小桔车服和汽车资产管理中心（AMC）合并，升级为新车服，成立车主服务公司。值得关注的是，滴滴此次发布的全员信中，安全被视为“滴滴未来发展的核心能力”，“升级安全体系”放在了所有调整描述中的第一位。'
    }, {
        "imageURL": 'assets/imgs/8.jpg',
        "username": 'Karlie Fang',
        "time": new Date().toLocaleTimeString(),
        "content": '除了成立两大平台公司，原品质出行事业群的单车（HT）、电单车（HM）、代驾、企业级业务和原智慧交通事业部的公交业务组成普惠出行与服务事业群，任命付军华为集团高级副总裁兼普惠出行与服务事业群总经理，向Will汇报。普惠出行与服务事业群将继续为用户提供安全便捷经济多元的出行服务，精细化的B2B服务将持续提升企业用户的经营效率和用车安全。此次调整中，出租车业务亦将升级，滴滴CTO张博将负责原快捷出行事业群出租车事业部，滴滴将向出租车业务加大产品技术资源的投入，促进出租车产品升级和新旧业态融合发展，进一步探索出租车与网约车融合的新模式。另外，财务与经营管理部、法务部将在原有职能基础上进行升级，财务、经管、法务职能将进一步与战略、投融资职能打通，原FLPW（财务/法务/采购/行政）将拆分成立两个部门：财务与经营管理部和法务部。原有的行政团队并入总办。任命朱景士为集团财务经管与战略高级副总裁，继续兼管国际业务和金融业务，向柳青汇报。'
    }, {
        "imageURL": 'assets/imgs/9.jpg',
        "username": 'Karlie Fang',
        "time": new Date().toLocaleTimeString(),
        "content": '为展示图书馆志愿者的风采，凝聚图书馆志愿者的力量，表彰激励图书馆志愿者工作中涌现出的优秀个人和集体，鼓舞和激励广大志愿者继续为弘扬志愿者精神，推动公共图书馆文明行业创建携手共进，上海市中心图书馆（公共图书馆）决定开展“2012年度上海市中心图书馆十佳志愿者评选活动”。'
    }
];
//# sourceMappingURL=mockNews.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myProfile_myProfile__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__myProfile_myProfile__["a" /* MyProfilePage */];
        this.userInfo = navParams.data.userInfo;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" [rootParams]="{userInfo:this.userInfo}" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="{userInfo:this.userInfo}" tabTitle="我的" tabIcon="contacts"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\lenovo\Desktop\Timeline App-front\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__node_modules_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map