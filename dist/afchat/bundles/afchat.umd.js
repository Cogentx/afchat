(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('afchat', ['exports', '@angular/core'], factory) :
    (factory((global.afchat = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AfchatService = /** @class */ (function () {
        function AfchatService() {
        }
        AfchatService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AfchatService.ctorParameters = function () { return []; };
        /** @nocollapse */ AfchatService.ngInjectableDef = i0.defineInjectable({ factory: function AfchatService_Factory() { return new AfchatService(); }, token: AfchatService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.AfchatService = AfchatService;
    exports.AfchatComponent = AfchatComponent;
    exports.AfchatModule = AfchatModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=afchat.umd.js.map