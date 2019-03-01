import {
    spriteScroller
} from "../dist/spriteScroller.js";
let spriteOne = new spriteScroller({
    element: "sprite",
    rows: 46,
    columns: 1,
    direction: "vertical",
    scrollMagicOptions: {
        duration: 2000,
    }
});
spriteOne.init();