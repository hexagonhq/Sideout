# Sideout.js

## Demo

[Check out the demo](https://hexagonhq.github.io/sideout/) to see it in action ( on your browser).

## Installation

Also you can use one of many package managers

	$ npm install sideout
	$ yarn add sideout
	
## Usage

Implementing Sideout.js into your project is easy.

First of all, you'll need to create your markup. You should have a menu (`#menu`).

```html
<menu id="menu">
  <div>
    <h2> Navigation </h2>
  </div>
</menu>
```

Add the Sideout.js styles (router.css) in your web application.

```css
body {
  width: 100%;
  height: 100%;
}

.sideout-menu {
  position: absolute;
  left: -264px;
  top: 0;
  z-index: 10;
  width: 264px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.sideout-open,
.sideout-open body {
  overflow: hidden;
}
```

Then you just include Sideout.js, create a new instance with some options

```html
<script src="dist/sideout.js"></script>
<script>
  let sideout = new Sideout({
    menu: querySelector('#menu'),
    animation: 'ease',
    duration: 250
  });
  
  // Open
  document.querySelector('.button').addEventListener('click', function() {
    sideout.open();
  });
  
  // Close
  document.querySelector('.button').addEventListener('click', function() {
    sideout.close();
  });
<script>
```

## API

### Sideout(options)

Create a new instance of `Sideout`.

- `options` (Object) - Options to customize a new instance of Sideout.
- `options.menu` (HTMLElement) - The DOM element that contains your menu application (`.sideout-menu`).
- `[options.duration]` (Number) - The time (milliseconds) to open/close the sideout. Default: `300`.
- `[options.animation]` (String) - The CSS effect to use when animating the opening and closing of the sideout. Default: `cubic-bezier(0.4,0.0,0.2,1)`. Possible values:
	- `ease`
    - `linear`
    - `ease-in`
    - `ease-out`
    - `ease-in-out`
    - `step-start`
    - `step-end`
    - [`cubic-bezier`](http://cubic-bezier.com/)

### Sideout.open();
Opens the sideout menu.

```js
sideout.open();
```

### Sideout.close();
Closes the sideout menu.

```js
sideout.close();
```

### Sideout.isOpen();
Returns `true` if the sideout is currently open, and `false` if it is closed.

```js
sideout.isOpen(); // true or false
```

## With :heart: by
- hexagonhq (Front-end developer)
- E-mail: [runshacking@gmail.com](mailto:runshacking@gmail.com)
- Instagram: [dmitry9263](https://www.instagram.com/dmitry9263/)
- Web: (https://webfrontend-master.ru/)

## License
MIT license. Copyright © 2018 [hexagonhq]




















