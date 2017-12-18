# Documentation
Welcome to the UIDesk Documentation, here you can find all the functionality of the library and the dependence with CSS, JS or both.

To begin you need to know, that exist three different type of object in UIDesk according to functionality of them. Containers, Components, Utilities, Styles.
This type is specified in __class atribute__ of each element.
## Containers
It's a type of object that contain all others object in your website, in UIDesk you have five container.

### ui-main (Styles [Partially] Allowed) (Only CSS)
```html
<div class="ui-main [ui-night]"></div>
```
It's generate global main container, with its proper style with a Cambria font family and a grey gradient background*.

### ui-header (Styles Allowed) (Only CSS)
```html
<div class="ui-header"></div>
```
It's generate a bar header, with its proper style with a Cambria font family and a grey gradient background*.

### ui-body (Styles Allowed) (Only CSS)
```html
<div class="ui-body"></div>
```
It's generate a body container, with its proper style, with a inner shadow and a grey gradient background*.

### ui-zone (Styles Allowed) (Only CSS)
```html
<div class="ui-zone"></div>
```
It's generate a zone container, with its proper style, with a outer shadow and a grey gradient background*.
### ui-collapse (Styles Allowed) (Both CSS and JS)
```html
<div class="ui-collapse"></div> - Begin JS code to show it -
or
<div class="ui-collapse #ID_of_the_element_that_active_it"></div>
```
It's generate a container showed only when you click in a specific elements, with a outer shadow and a grey gradient background*.

## Components
It's a type of objects with its own styles, with user interaction.

### ui-button (Styles Allowed) (Only CSS, with improve visual effect when clicking with JS)
```html
<div class="ui-button"></div>
```
It's generate a button component, with its proper style, with a outer shadow and a grey gradient background*.

### ui-text (Styles NOT Allowed) (Only CSS)
```html
<input class="ui-text" />
```
It's generate a input component, with its proper style, with a border-radius, gray border-color and hover blue shadow and hover vlue border color.

### ui-select (Styles NOT Allowed) (Only CSS)
```html
<select class="ui-select"></select>
```
It's generate a select component, with its proper style, with a border-radius, gray border-color and hover blue shadow and hover vlue border color.

### ui-menu (Styles Allowed) (Only CSS, with improve visual effect when clicking with JS)
```html
<div class="ui-menu">
  <ul>
    <li class='ui-arrow'>File
      <ul class='ui-submenu'>
        <li>New</li>
      </ul>
    </li>
    <li>Edit</li>
  </ul>
</div>
```
It's generate a horizontal bar menu, with all submenu you want.
#### ui-submenu (Styles Allowed) (Only CSS, with improve visual effect when clicking with JS)
Submenu of main menu
#### ui-arrow (Only CSS, with improve visual effect when clicking with JS)
Class needed to say to UIDesk that this object have a submenu

### ui-btngroup  (Styles Allowed) (Only CSS)
```html
<div class="ui-btngroup">
  <div class="ui-button"></div>
  <div class="ui-button"></div>
</div>
```
It's a wrapper of ui-button to create cohesion between button inside it. For more details see in __example__ folder.

### ui-tooltip (Styles NOT Allowed) (Only work with DIV container) (Only CSS)
```html
<div class="ui-button">
  Button 1
  <div class="ui-tooltip"></div>
</div>
```
It's a component object that show a tooltip style when you have mouse over the container div.

### ui-poptip (Styles Allowed) (Only work with DIV container) (Only CSS)
```html
<div class="ui-button">
  Button 1
  <div class="ui-poptip"></div>
</div>
```
It's a component object with more detail of a simple tooltip that show when you have mouse over the container div.

## Utilities
They're components with advanced user interaction.

### ui-wizard (Styles Allowed) (Both CSS and JS)
```html
<div class="ui-wizard [ui-unordered]">
  <div class="ui-step">
    <h1>Introducción</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <button class="ui-button ui-warn ui-nextstep">Siguiente</button>
  </div>
  <div class="ui-step">
    <h1>Instalación</h1>
    <p>Nullam id velit a erat auctor cursus ut eu ex.</p>
    <button class="ui-button ui-confirm ui-nextstep">Siguiente</button>
  </div>
  <div class="ui-step">
    <h1>Finalización</h1>
    <p>Morbi scelerisque diam est, nec volutpat mauris semper sed.</p>
    <button class="ui-button ui-info ui-nextstep">Siguiente</button>
  </div>
</div>
```
This component generate a wizard where each __ui-step__ represent a step of this wizard. To go to the next __ui-step__, you only need to put __ui-nextstep__ in a div container.

It's generate a lifecycle of step automatically, unclickable by default.

#### ui-unordered
With this attribute, you allow user to click in whatever step in the generated lifecycle

### ui-pagination (Styles Allowed) (Both CSS and JS)
```html
<div class="ui-pagination [ui-length(2)]">
  <div class="ui-zone">Esto es una <span class='ui-title'>alerta</span></div>
  <div class="ui-zone ui-night">Esto es una <span class='ui-title'>alerta</span></div>
  <div class="ui-zone ui-confirm">Esto es una <span class='ui-title'>alerta</span></div>
  <div class="ui-zone ui-cancel">Esto es una <span class='ui-title'>alerta</span></div>
  <div class="ui-zone ui-warn">Esto es una <span class='ui-title'>alerta</span></div>
  <div class="ui-zone ui-info">Esto es una <span class='ui-title'>alerta</span></div>
</div>
```
This component generate pagination from div's inside the pagination container. 

It's generate a pagination automatically, clickable to show divs of this page.

### ui-length(number)
With this attribute, you can choose the number of element showed by page.


### ui-toast (Styles Allowed) (Only CSS)
```html
<div class="ui-toast [ui-top] [ui-duration(6)]">Esto es un mensaje de información que desaparecerá</div>
```
This component generate a toast style message fixed in the bottom of application, then disappear after a fixed time. By default 7s.

#### ui-top
With this attribute you fixed the toast message to the top of application.

#### ui-duration(number) (need JS)
With this attribute you can choose how many time toast will be here before disappear.

### ui-modal (Styles Allowed) (Both CSS and JS)
```html
<div class="ui-modal #ID_of_the_element_that_active_it">
  <h1>Information</h1>
  <p>Hello World/p>
  <div class="ui-button ui-confirm ui-close">A button</div>
</div>
```
This component generate a modal message when the id specific it's clicked, then hidden when clicked in a __ui-close__ attribute element or a empty __ui-closebutton__ element

#### ui-close
With this attribute attach the close event for the parent modal.

#### ui-closebutton
With this attribute in a empty element, generate a close button (X) in modal.

* You can change colors of background with Styles above.
