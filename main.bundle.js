webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-slideshow></app-slideshow>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slideshow_slideshow_component__ = __webpack_require__("../../../../../src/app/slideshow/slideshow.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__slideshow_slideshow_component__["a" /* SlideshowComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/slideshow/slideshow.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/slideshow/slideshow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reveal\">\n  <div class=\"slides\">\n    <section data-background=\"../../assets/slide1-back-blur.jpg\">\n      <h1>Best viewed in landscape.</h1>\n    </section>\n    <section data-background=\"../../assets/slide1-back.jpg\">\n      <img src=\"../../assets/katherine-17.jpg\" style=\"height: 400px; float:left\"/>\n      <blockquote style=\"float:right\">I, Timothy Michael Preston, choose you Katherine Anne Joy to be my wife and my one true love as God ordained.</blockquote>\n    </section>\n    <section data-background=\"../../assets/katherine-34.jpg\">\n      <p style=\"margin-top: 500px;\">I will cherish you as my best friend, forsaking all others for you.</p>\n    </section>\n    <section data-background=\"../../assets/IMG_0684.JPG\">\n        <p style=\"margin-bottom: 550px;\">I promise to love you in good times and in bad, when life seems easy and when it seems hard,</p>\n    </section>\n    <section data-background=\"../../assets/IMG_0661.JPG\">\n        <blockquote style=\"margin-top: 500px;\">when our love is simple and when it seems an effort.</blockquote>\n    </section>\n    <section data-background=\"../../assets/katherine-142.jpg\">\n      <blockquote style=\"margin-top: 500px;\">I will always be faithful to you and hold you in the highest regard.</blockquote>\n    </section>\n    <section data-background=\"../../assets/katherine-72.jpg\">\n      <blockquote style=\"margin-top: 500px;\">These things I promise to you, ‘til death do us part.</blockquote>\n    </section>\n    <section data-background=\"../../assets/last.jpg\" data-autoslide=\"3000\" data-transition=\"fade\" data-background-transition=\"fade\">\n        <p style=\"margin-top: 474px;\">With Love Always</p>\n        <p>Tim</p>\n    </section>\n    <section data-background=\"../../assets/last.jpg\" data-transition=\"fade\" data-background-transition=\"fade\">\n        <img src=\"../../assets/katherine-127.jpg\" style=\"height: 400px;\"/>\n        <p>With Love Always</p>\n        <p>Tim</p>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/slideshow/slideshow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reveal_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideshowComponent = (function () {
    function SlideshowComponent() {
    }
    SlideshowComponent.prototype.ngAfterViewInit = function () {
        console.log('Loading reveal.');
        __WEBPACK_IMPORTED_MODULE_1_reveal_js__["initialize"]({
            width: 1200,
            height: 750,
            // Number of milliseconds between automatically proceeding to the
            // next slide, disabled when set to 0, this value can be overwritten
            // by using a data-autoslide attribute on your slides
            // autoSlide: 8000,
            // Stop auto-sliding after user input
            autoSlideStoppable: false,
            // Display presentation control arrows
            controls: true,
            // Help the user learn the controls by providing hints, for example by
            // bouncing the down arrow when they first encounter a vertical slide
            controlsTutorial: false,
            // Determines where controls appear, "edges" or "bottom-right"
            controlsLayout: 'bottom-right',
            // Visibility rule for backwards navigation arrows; "faded", "hidden"
            // or "visible"
            controlsBackArrows: 'faded',
            // Display a presentation progress bar
            progress: false,
            // Set default timing of 2 minutes per slide
            defaultTiming: 30,
            // Display the page number of the current slide
            slideNumber: false,
            // Push each slide change to the browser history
            history: false,
            // Enable keyboard shortcuts for navigation
            keyboard: true,
            // Enable the slide overview mode
            overview: false,
            // Vertical centering of slides
            center: true,
            // Enables touch navigation on devices with touch input
            touch: true,
            // Loop the presentation
            loop: false,
            // Change the presentation direction to be RTL
            rtl: false,
            // Randomizes the order of slides each time the presentation loads
            shuffle: false,
            // Turns fragments on and off globally
            fragments: true,
            // Flags if the presentation is running in an embedded mode,
            // i.e. contained within a limited portion of the screen
            embedded: false,
            // Flags if we should show a help overlay when the questionmark
            // key is pressed
            help: true,
            // Flags if speaker notes should be visible to all viewers
            showNotes: false,
            // Global override for autoplaying embedded media (video/audio/iframe)
            // - null: Media will only autoplay if data-autoplay is present
            // - true: All media will autoplay, regardless of individual setting
            // - false: No media will autoplay, regardless of individual setting
            autoPlayMedia: null,
            // Use this method for navigation when auto-sliding
            autoSlideMethod: __WEBPACK_IMPORTED_MODULE_1_reveal_js__["navigateNext"],
            // Enable slide navigation via mouse wheel
            mouseWheel: false,
            // Hides the address bar on mobile devices
            hideAddressBar: true,
            // Opens links in an iframe preview overlay
            previewLinks: false,
            // Transition style
            transition: 'slide',
            // Transition speed
            transitionSpeed: 'slow',
            // Transition style for full page slide backgrounds
            backgroundTransition: 'fade',
            // Number of slides away from the current that are visible
            viewDistance: 3,
            // Parallax background image
            // parallaxBackgroundImage: '../../assets/katherine-194-parallax.jpg',
            // Parallax background size
            parallaxBackgroundSize: '1972px 672px',
            // Number of pixels to move the parallax background per slide
            // - Calculated automatically unless specified
            // - Set to 0 to disable movement along an axis
            parallaxBackgroundHorizontal: null,
            parallaxBackgroundVertical: null,
            // The display mode that will be used to show slides
            display: 'block'
        });
    };
    SlideshowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-slideshow',
            template: __webpack_require__("../../../../../src/app/slideshow/slideshow.component.html"),
            styles: [__webpack_require__("../../../../../src/app/slideshow/slideshow.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideshowComponent);
    return SlideshowComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map