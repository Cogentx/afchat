import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AfchatService = /** @class */ (function () {
    function AfchatService() {
    }
    AfchatService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AfchatService.ctorParameters = function () { return []; };
    /** @nocollapse */ AfchatService.ngInjectableDef = defineInjectable({ factory: function AfchatService_Factory() { return new AfchatService(); }, token: AfchatService, providedIn: "root" });
    return AfchatService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AfchatComponent = /** @class */ (function () {
    function AfchatComponent() {
    }
    /**
     * @return {?}
     */
    AfchatComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AfchatComponent.decorators = [
        { type: Component, args: [{
                    selector: 'afx-afchat',
                    template: "\n    <p>\n      afchat works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    AfchatComponent.ctorParameters = function () { return []; };
    return AfchatComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AfchatModule = /** @class */ (function () {
    function AfchatModule() {
    }
    AfchatModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AfchatComponent],
                    imports: [],
                    exports: [AfchatComponent]
                },] }
    ];
    return AfchatModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AfchatService, AfchatComponent, AfchatModule };

//# sourceMappingURL=afchat.js.map