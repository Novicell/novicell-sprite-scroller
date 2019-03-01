import {
    SpriteScroller
} from "../dist/spriteScroller.js";
let spriteOne = new SpriteScroller({
    element: "sprite",
    rows: 46,
    columns: 1,
    direction: "vertical",
    scrollMagicOptions: {
        duration: 2000,
    }
});