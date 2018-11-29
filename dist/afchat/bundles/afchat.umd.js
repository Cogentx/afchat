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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWZjaGF0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYWZjaGF0L2xpYi9hZmNoYXQuc2VydmljZS50cyIsIm5nOi8vYWZjaGF0L2xpYi9hZmNoYXQuY29tcG9uZW50LnRzIiwibmc6Ly9hZmNoYXQvbGliL2FmY2hhdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBZmNoYXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWZ4LWFmY2hhdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBhZmNoYXQgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFmY2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWZjaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9hZmNoYXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQWZjaGF0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbQWZjaGF0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBZmNoYXRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs0QkFKRDtLQUVBOzs7Ozs7QUNGQTtRQWFFO1NBQWlCOzs7O1FBRWpCLGtDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsOENBSVQ7cUJBRUY7Ozs7UUFRRCxzQkFBQztLQWhCRDs7Ozs7O0FDRkE7UUFHQTtTQU02Qjs7b0JBTjVCQyxXQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUMvQixPQUFPLEVBQUUsRUFDUjt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7cUJBQzNCOztRQUMyQixtQkFBQztLQU43Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9