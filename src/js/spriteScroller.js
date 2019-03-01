// Import dependencies
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js";
import Stickyfill from "stickyfill";
import TweenLite, {
    SteppedEase,
} from "gsap";
export class SpriteScroller {
    constructor({
        element,
        columns = 1,
        rows = 1,
        direction = "horizontal",
        scrollMagicOptions = {
            triggerHook: "onEnter",
            duration: 600,
            offset: 0
        }
    }) {
        this.element = element;
        this.columns = columns;
        this.rows = rows;
        this.direction = direction;
        this.scrollMagicOptions = scrollMagicOptions;
        this.init = function () {
            // Get this props from object destructuring
            let {
                element,
                columns,
                rows,
                direction,
                scrollMagicOptions
            } = this;
            // Declare background-position values for when creating tween later
            let backgroundPositionValues;
            let easeConfig;
            // Initialize stickyfill instance
            let stickyfill = Stickyfill();
            // Get the element
            let spriteElement = document.querySelector(`.${element}`);
            // Get sprite wrapper element
            let spriteContainerElement = document.querySelector(".sticky-wrapper");
            // Initialize the scrollmagic controller
            let controller = new ScrollMagic.Controller();
            // Set background size of sprite:
            spriteElement.style.backgroundSize = `${columns * 100}% ${rows * 100}%`;
            // Use stickyfill for IE support
            stickyfill.add(spriteContainerElement);
            // The background-position depends on the direction, as well as the ease config -
            // - as it depends on either the rows or the columns.
            switch (direction) {
                case "vertical":
                    backgroundPositionValues = "0% 100%";
                    easeConfig = SteppedEase.config(rows - 1);
                    break;
                case "horizontal":
                    backgroundPositionValues = "100% 0%";
                    easeConfig = SteppedEase.config(columns - 1);
                    break;
            };
            let tween = TweenLite.to(spriteElement, 1.0, {
                backgroundPosition: backgroundPositionValues,
                ease: easeConfig
            });
            // Build scene
            let scene = new ScrollMagic.Scene(scrollMagicOptions)
                // animate color and top border in relation to scroll position
                .setTween(tween) // the tween durtion can be omitted and defaults to 1
                .addTo(controller)
        };
        this.init();
    }
}