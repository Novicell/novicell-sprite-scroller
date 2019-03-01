# Novicell Sprite Animation

**Used to animate spritesheets**

## Usage

### Prerequisites:

Your must currently be either horizontal or vertical. So no either one column with multiple rows, or one row with multiple columns (vertical vs horizontal)

### Install with npm

```bash
npm install novicell-sprite-scroller
```

## Setup

In your HTML
Create a sticky-wrapper and a nested div with a class of sprite (this will hold the actual spritesheet itself)

```html
<div class="sticky-wrapper">
    <div class="sprite"></div>
</div>
```

The css used is

```CSS
body {
    /* Give body some height - otherwise u cant see the scroll */
    height: 4000px;
    text-align: center;
}
.sticky-wrapper {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    max-width: 600px;
    width: 100%;
    height: auto;
    margin: 50px auto 0;
}
.sprite {
    position: relative;
    background: url("./sprite/ryu-sprite-demo.png") no-repeat 0% 0%;
}
/* This pseudoelement makes the square responsive */
.sprite:before {
    content: "";
    display: block;
    padding-top: 100%;
}
```

In your javascript, import the module

```javascript
import {SpriteScroller} from 'novicell-sprite-scroller';
```

## Example

```javascript
let spriteOne = new SpriteScroller({
    element: 'sprite', // class name of the element containing the sprite background url
    rows: 46, // Amount of rows in sprite. If omitted, will default to 1
    columns: 1, // Amount of columns in sprite. if omitted, will default to 1
    direction: 'vertical', //Accepts 'vertical' or 'horizontal' the direction of the animation. If omitted, will default to 'horizontal'
    scrollMagicOptions: {
        /* Here you can pass the usual args for the ScrollMagic scene. If omitted, it will default to {
            triggerHook: "onEnter",
            duration: 600,
            offset: 0
        }
        Note that many more options exist, simply look up the official scrollmagic docs for scene constructor
        */
        duration: 2000
    }
});
```

## Codepen

TBD
https://codepen.io/henrikschytze/pen/WPPgJJ

## Contribution

Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License

The Novicell Frontend is licensed under the MIT license. (http://opensource.org/licenses/MIT)
