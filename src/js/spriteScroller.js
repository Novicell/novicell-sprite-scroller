export const spriteScroller = class SpriteScroller {
    constructor({
        element,
        frames,
        duration = 600,
        columns,
        rows,
        startingPosition = null,
        iterations = Infinity
    }) {
        this.element = element;
        this.frames = frames;
        this.duration = duration / frames;
        this.columns = columns;
        this.rows = rows;
        this.startingPosition = startingPosition;
        this.iterations = iterations;
    }
}