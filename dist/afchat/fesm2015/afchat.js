import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AfchatService {
    constructor() { }
}
AfchatService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AfchatService.ctorParameters = () => [];
/** @nocollapse */ AfchatService.ngInjectableDef = defineInjectable({ factory: function AfchatService_Factory() { return new AfchatService(); }, token: AfchatService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AfchatComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AfchatComponent.decorators = [
    { type: Component, args: [{
                selector: 'afx-afchat',
                template: `
    <p>
      afchat works!
    </p>
  `
            }] }
];
/** @nocollapse */
AfchatComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AfchatModule {
}
AfchatModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AfchatComponent],
                imports: [],
                exports: [AfchatComponent]
            },] }
];

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