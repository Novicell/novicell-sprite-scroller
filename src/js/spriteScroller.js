// Import dependencies
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import StickyFill from "stickyfill";
import TweenMax, {
    SteppedEase,
} from "gsap";

export const spriteScroller = class spriteScroller {
    constructor({
        element,
        columns = 1,
        rows = 1,
        direction = "horizontal"
    }) {
        this.element = element;
        this.columns = columns;
        this.rows = rows;
        this.direction = direction;
        this.init = function () {
            let {
                element,
                columns,
                rows,
                direction
            } = this;
            // Declare background-position values for when creating tween later
            let backgroundPositionValues;
            // Initialize stickyfill instance
            let stickyfill = StickyFill();
            // Get the element
            let spriteElement = document.querySelector(`.${element}`);
            // Set background size of sprite:
            spriteElement.style.backgroundSize = `${columns * 100}% ${rows * 100}%`;
            let spriteContainerElement = document.querySelector(".sitcky-wrapper");
            // Use stickyfill for IE support
            stickyfill.add(spriteContainerElement);
            // Initialize the scrollmagic controller
            let controller = new ScrollMagic.Controller();
            // Create the tween
            // The background-position depends on the direction
            switch (direction) {
                case "vertical":
                    backgroundPositionValues = "0% 100%"
                    break;
                case "horizontal":
                    backgroundPositionValues = "100% 0%"
                    break;
            };

            let tween = TweenMax.to(spriteElement, 1.0, {
                backgroundPosition: backgroundPositionValues,
                ease: SteppedEase.config(rows - 1)
            });
            // Build scene
            let scene = new ScrollMagic.Scene({
                    triggerHook: "onEnter",
                    duration: 1000
                })
                // animate color and top border in relation to scroll position
                .setTween(tween) // the tween durtion can be omitted and defaults to 1
                .addTo(controller)
        };
    }
}