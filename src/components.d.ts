/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SimpleLabel {
    }
}
declare global {
    interface HTMLSimpleLabelElement extends Components.SimpleLabel, HTMLStencilElement {
    }
    var HTMLSimpleLabelElement: {
        prototype: HTMLSimpleLabelElement;
        new (): HTMLSimpleLabelElement;
    };
    interface HTMLElementTagNameMap {
        "simple-label": HTMLSimpleLabelElement;
    }
}
declare namespace LocalJSX {
    interface SimpleLabel {
    }
    interface IntrinsicElements {
        "simple-label": SimpleLabel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "simple-label": LocalJSX.SimpleLabel & JSXBase.HTMLAttributes<HTMLSimpleLabelElement>;
        }
    }
}