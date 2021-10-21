/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AlertComponent {
        "action": string;
        "icon": string;
        "text": string;
        "variant": string;
        "width": string;
    }
    interface AnimatedLineBeneathLink {
        "text": string;
    }
    interface AvatarComponent {
        /**
          * Alternate text when src image breaks
          * @type {string}
          * @memberof AvatarComponent
         */
        "alt": string;
        /**
          * Custom class for the image
          * @type {string}
          * @memberof AvatarComponent
         */
        "customClass": string;
        /**
          * Avatar image size
          * @type {('small' | 'medium' | 'large')}
          * @memberof AvatarComponent
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Image source url
          * @type {string}
          * @memberof AvatarComponent
         */
        "src": string;
        /**
          * Show title of the image on hover
          * @type {string}
          * @memberof AvatarComponent
         */
        "tooltipTxt": string;
        /**
          * Avatar image shape variants
          * @type {('circular' | 'rounded' | 'square')}
          * @memberof AvatarComponent
         */
        "variant": 'circular' | 'rounded' | 'square';
    }
    interface CheckmarkComponent {
        /**
          * Un-checked state emoji HEX code
         */
        "checkFalse": string;
        /**
          * Checked state emoji HEX code
         */
        "checkTrue": string;
        /**
          * Checkbox state
         */
        "checked": boolean;
    }
    interface DataFetcher {
    }
    interface EmojiCheckboxComponent {
        /**
          * The initial state of checkbox
         */
        "checked": boolean;
        /**
          * Checkbox name
         */
        "name": string;
    }
    interface FlowingColoredBorderButton {
    }
    interface GoogleTagManager {
        /**
          * The google tag manage container ID
         */
        "containerId": string;
    }
    interface HamburgerMenu {
    }
    interface HeroComponent {
        "background": string;
        "heading": string;
        "height": string;
        "imgurl": string;
        "width": string;
    }
    interface ImageComponent {
        "srcImg": string;
        "srcImgName": string;
        "srcNextGen": string;
    }
    interface LabelComponent {
        /**
          * Checkbox state
         */
        "checked": boolean;
    }
    interface ModalWindow {
        "cancelText": string;
        "confirmText": string;
        "handleCancel": Function;
        "handleConfirm": Function;
        "heading": string;
        "pointerEvents": boolean;
    }
    interface MyButton {
        "color": string;
        "icon": string;
        "name": string;
        "type": string;
        "typeButton": string;
        "width": string;
    }
    interface MyComponent {
        /**
          * The text color
         */
        "color": string;
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyInput {
        "bordered": boolean;
        "defaultValue": string;
        "disabled": boolean;
        "pattern": string;
        "placeholder": string;
        "size": string;
    }
    interface NotificationBadge {
        "totalNotifications": string;
    }
    interface TooltipComponent {
        /**
          * Background color
         */
        "backgroundColor": string;
        /**
          * Text color
         */
        "color": string;
        /**
          * Font size
         */
        "fontSize": string;
        /**
          * Position of tooltip. left, right, top, bottom
         */
        "position": string;
        /**
          * Text to be displayed in the tooltip
         */
        "text": string;
    }
}
declare global {
    interface HTMLAlertComponentElement extends Components.AlertComponent, HTMLStencilElement {
    }
    var HTMLAlertComponentElement: {
        prototype: HTMLAlertComponentElement;
        new (): HTMLAlertComponentElement;
    };
    interface HTMLAnimatedLineBeneathLinkElement extends Components.AnimatedLineBeneathLink, HTMLStencilElement {
    }
    var HTMLAnimatedLineBeneathLinkElement: {
        prototype: HTMLAnimatedLineBeneathLinkElement;
        new (): HTMLAnimatedLineBeneathLinkElement;
    };
    interface HTMLAvatarComponentElement extends Components.AvatarComponent, HTMLStencilElement {
    }
    var HTMLAvatarComponentElement: {
        prototype: HTMLAvatarComponentElement;
        new (): HTMLAvatarComponentElement;
    };
    interface HTMLCheckmarkComponentElement extends Components.CheckmarkComponent, HTMLStencilElement {
    }
    var HTMLCheckmarkComponentElement: {
        prototype: HTMLCheckmarkComponentElement;
        new (): HTMLCheckmarkComponentElement;
    };
    interface HTMLDataFetcherElement extends Components.DataFetcher, HTMLStencilElement {
    }
    var HTMLDataFetcherElement: {
        prototype: HTMLDataFetcherElement;
        new (): HTMLDataFetcherElement;
    };
    interface HTMLEmojiCheckboxComponentElement extends Components.EmojiCheckboxComponent, HTMLStencilElement {
    }
    var HTMLEmojiCheckboxComponentElement: {
        prototype: HTMLEmojiCheckboxComponentElement;
        new (): HTMLEmojiCheckboxComponentElement;
    };
    interface HTMLFlowingColoredBorderButtonElement extends Components.FlowingColoredBorderButton, HTMLStencilElement {
    }
    var HTMLFlowingColoredBorderButtonElement: {
        prototype: HTMLFlowingColoredBorderButtonElement;
        new (): HTMLFlowingColoredBorderButtonElement;
    };
    interface HTMLGoogleTagManagerElement extends Components.GoogleTagManager, HTMLStencilElement {
    }
    var HTMLGoogleTagManagerElement: {
        prototype: HTMLGoogleTagManagerElement;
        new (): HTMLGoogleTagManagerElement;
    };
    interface HTMLHamburgerMenuElement extends Components.HamburgerMenu, HTMLStencilElement {
    }
    var HTMLHamburgerMenuElement: {
        prototype: HTMLHamburgerMenuElement;
        new (): HTMLHamburgerMenuElement;
    };
    interface HTMLHeroComponentElement extends Components.HeroComponent, HTMLStencilElement {
    }
    var HTMLHeroComponentElement: {
        prototype: HTMLHeroComponentElement;
        new (): HTMLHeroComponentElement;
    };
    interface HTMLImageComponentElement extends Components.ImageComponent, HTMLStencilElement {
    }
    var HTMLImageComponentElement: {
        prototype: HTMLImageComponentElement;
        new (): HTMLImageComponentElement;
    };
    interface HTMLLabelComponentElement extends Components.LabelComponent, HTMLStencilElement {
    }
    var HTMLLabelComponentElement: {
        prototype: HTMLLabelComponentElement;
        new (): HTMLLabelComponentElement;
    };
    interface HTMLModalWindowElement extends Components.ModalWindow, HTMLStencilElement {
    }
    var HTMLModalWindowElement: {
        prototype: HTMLModalWindowElement;
        new (): HTMLModalWindowElement;
    };
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLNotificationBadgeElement extends Components.NotificationBadge, HTMLStencilElement {
    }
    var HTMLNotificationBadgeElement: {
        prototype: HTMLNotificationBadgeElement;
        new (): HTMLNotificationBadgeElement;
    };
    interface HTMLTooltipComponentElement extends Components.TooltipComponent, HTMLStencilElement {
    }
    var HTMLTooltipComponentElement: {
        prototype: HTMLTooltipComponentElement;
        new (): HTMLTooltipComponentElement;
    };
    interface HTMLElementTagNameMap {
        "alert-component": HTMLAlertComponentElement;
        "animated-line-beneath-link": HTMLAnimatedLineBeneathLinkElement;
        "avatar-component": HTMLAvatarComponentElement;
        "checkmark-component": HTMLCheckmarkComponentElement;
        "data-fetcher": HTMLDataFetcherElement;
        "emoji-checkbox-component": HTMLEmojiCheckboxComponentElement;
        "flowing-colored-border-button": HTMLFlowingColoredBorderButtonElement;
        "google-tag-manager": HTMLGoogleTagManagerElement;
        "hamburger-menu": HTMLHamburgerMenuElement;
        "hero-component": HTMLHeroComponentElement;
        "image-component": HTMLImageComponentElement;
        "label-component": HTMLLabelComponentElement;
        "modal-window": HTMLModalWindowElement;
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-input": HTMLMyInputElement;
        "notification-badge": HTMLNotificationBadgeElement;
        "tooltip-component": HTMLTooltipComponentElement;
    }
}
declare namespace LocalJSX {
    interface AlertComponent {
        "action"?: string;
        "icon"?: string;
        "text"?: string;
        "variant"?: string;
        "width"?: string;
    }
    interface AnimatedLineBeneathLink {
        "text"?: string;
    }
    interface AvatarComponent {
        /**
          * Alternate text when src image breaks
          * @type {string}
          * @memberof AvatarComponent
         */
        "alt"?: string;
        /**
          * Custom class for the image
          * @type {string}
          * @memberof AvatarComponent
         */
        "customClass"?: string;
        /**
          * Avatar image size
          * @type {('small' | 'medium' | 'large')}
          * @memberof AvatarComponent
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Image source url
          * @type {string}
          * @memberof AvatarComponent
         */
        "src"?: string;
        /**
          * Show title of the image on hover
          * @type {string}
          * @memberof AvatarComponent
         */
        "tooltipTxt"?: string;
        /**
          * Avatar image shape variants
          * @type {('circular' | 'rounded' | 'square')}
          * @memberof AvatarComponent
         */
        "variant"?: 'circular' | 'rounded' | 'square';
    }
    interface CheckmarkComponent {
        /**
          * Un-checked state emoji HEX code
         */
        "checkFalse"?: string;
        /**
          * Checked state emoji HEX code
         */
        "checkTrue"?: string;
        /**
          * Checkbox state
         */
        "checked"?: boolean;
    }
    interface DataFetcher {
    }
    interface EmojiCheckboxComponent {
        /**
          * The initial state of checkbox
         */
        "checked"?: boolean;
        /**
          * Checkbox name
         */
        "name"?: string;
    }
    interface FlowingColoredBorderButton {
    }
    interface GoogleTagManager {
        /**
          * The google tag manage container ID
         */
        "containerId"?: string;
    }
    interface HamburgerMenu {
    }
    interface HeroComponent {
        "background"?: string;
        "heading"?: string;
        "height"?: string;
        "imgurl"?: string;
        "width"?: string;
    }
    interface ImageComponent {
        "srcImg"?: string;
        "srcImgName"?: string;
        "srcNextGen"?: string;
    }
    interface LabelComponent {
        /**
          * Checkbox state
         */
        "checked"?: boolean;
    }
    interface ModalWindow {
        "cancelText"?: string;
        "confirmText"?: string;
        "handleCancel"?: Function;
        "handleConfirm"?: Function;
        "heading"?: string;
        "pointerEvents"?: boolean;
    }
    interface MyButton {
        "color"?: string;
        "icon"?: string;
        "name"?: string;
        "type"?: string;
        "typeButton"?: string;
        "width"?: string;
    }
    interface MyComponent {
        /**
          * The text color
         */
        "color"?: string;
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyInput {
        "bordered"?: boolean;
        "defaultValue"?: string;
        "disabled"?: boolean;
        "pattern"?: string;
        "placeholder"?: string;
        "size"?: string;
    }
    interface NotificationBadge {
        "totalNotifications"?: string;
    }
    interface TooltipComponent {
        /**
          * Background color
         */
        "backgroundColor"?: string;
        /**
          * Text color
         */
        "color"?: string;
        /**
          * Font size
         */
        "fontSize"?: string;
        /**
          * Position of tooltip. left, right, top, bottom
         */
        "position"?: string;
        /**
          * Text to be displayed in the tooltip
         */
        "text"?: string;
    }
    interface IntrinsicElements {
        "alert-component": AlertComponent;
        "animated-line-beneath-link": AnimatedLineBeneathLink;
        "avatar-component": AvatarComponent;
        "checkmark-component": CheckmarkComponent;
        "data-fetcher": DataFetcher;
        "emoji-checkbox-component": EmojiCheckboxComponent;
        "flowing-colored-border-button": FlowingColoredBorderButton;
        "google-tag-manager": GoogleTagManager;
        "hamburger-menu": HamburgerMenu;
        "hero-component": HeroComponent;
        "image-component": ImageComponent;
        "label-component": LabelComponent;
        "modal-window": ModalWindow;
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-input": MyInput;
        "notification-badge": NotificationBadge;
        "tooltip-component": TooltipComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "alert-component": LocalJSX.AlertComponent & JSXBase.HTMLAttributes<HTMLAlertComponentElement>;
            "animated-line-beneath-link": LocalJSX.AnimatedLineBeneathLink & JSXBase.HTMLAttributes<HTMLAnimatedLineBeneathLinkElement>;
            "avatar-component": LocalJSX.AvatarComponent & JSXBase.HTMLAttributes<HTMLAvatarComponentElement>;
            "checkmark-component": LocalJSX.CheckmarkComponent & JSXBase.HTMLAttributes<HTMLCheckmarkComponentElement>;
            "data-fetcher": LocalJSX.DataFetcher & JSXBase.HTMLAttributes<HTMLDataFetcherElement>;
            "emoji-checkbox-component": LocalJSX.EmojiCheckboxComponent & JSXBase.HTMLAttributes<HTMLEmojiCheckboxComponentElement>;
            "flowing-colored-border-button": LocalJSX.FlowingColoredBorderButton & JSXBase.HTMLAttributes<HTMLFlowingColoredBorderButtonElement>;
            "google-tag-manager": LocalJSX.GoogleTagManager & JSXBase.HTMLAttributes<HTMLGoogleTagManagerElement>;
            "hamburger-menu": LocalJSX.HamburgerMenu & JSXBase.HTMLAttributes<HTMLHamburgerMenuElement>;
            "hero-component": LocalJSX.HeroComponent & JSXBase.HTMLAttributes<HTMLHeroComponentElement>;
            "image-component": LocalJSX.ImageComponent & JSXBase.HTMLAttributes<HTMLImageComponentElement>;
            "label-component": LocalJSX.LabelComponent & JSXBase.HTMLAttributes<HTMLLabelComponentElement>;
            "modal-window": LocalJSX.ModalWindow & JSXBase.HTMLAttributes<HTMLModalWindowElement>;
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "notification-badge": LocalJSX.NotificationBadge & JSXBase.HTMLAttributes<HTMLNotificationBadgeElement>;
            "tooltip-component": LocalJSX.TooltipComponent & JSXBase.HTMLAttributes<HTMLTooltipComponentElement>;
        }
    }
}
