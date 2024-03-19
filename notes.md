# Accessing HTML from JS

It is time to use JavaScript to interact with our websites. In order to do this, you have to add an event listener to parts of your HTML. This requires JavaScript to be able to communicate with specific elements in your HTML.

## Accessing HTML elements from JS
The JS command to access HTML elements is:
`document.getElementById("someID")`

- You must add an ID to any HTML elements you need to give JavaScript access to.
- This command is case sensitive
- The HTML ID it accesses is always in quotes
- Many new coders confuse IDs and variables. They are not the same.

> Ex. Print the h1 element and the 2nd list item to the console.


## Events
An event is anyway that a user interacts with any element on your website.

- Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
- Touch Events: touchstart, touchend, touchmove, touchcancel
- Keyboard Events: keydown, keyup, keypress
- Form Events: focus, blur, change, submit
- Window Events: resize, scroll, load, unload, hashchange

## Functions
A function is a block of code that runs when it is called upon by name. You have to define a function before you can use it. You declare a function with a declaration:

`function nameOfFunction()`

After declaring a function, use {} brackets to insert the code that runs when the function is called.

> Ex. Write a function called greet that asks for a user's name, then outputs "Nice to meet you, <user's name>"

You use a function just call typing its name.

> Ex. Call your greet function 3 times

Now let's put these ideas together. You can add an event listener to a website that runs a function when that event happens.

> Ex. Add an event listener to button 1 on the website that runs your greet function when it is clicked.

## Changing Web Content
JavaScript uses the innerHTML command to update/change the content of any element. The syntax for this is:

`document.getElementById("someID").innerHTML = "New Content"`

This command will look for the id "someID" and the innerHTML command changes whatever is inside that tag to "New Content".

> Ex. Add an event listener to button 2. When clicked, the Main Heading h1 tag should say "All About Dragons" and the paragraph below should say "Dragons would make the best pets. Let me tell you why...".


## Changing Web Style
JavaScript uses the style command to change the style of any element. The syntax for this is:

`document.getElementById("someID").style.property = "new value"`

Where the property is any CSS property (e.g. color, background, margin, padding, etc).

The "new value" is the value you would like to change this property to. Here's an example:

document.getElementById("para1").style.color = "blue";

This command will change a paragaph with the ID "para1" so that the text is now blue.

NOTE: Multi-word properties must be camel-cased. 

- font-size must be typed fontSize
- padding-top must be typed paddingTop

> Ex. Add an event listener to button 3. When clicked, it should change the font-family of the unordered list to Papyrus, and the body background to lightgreen.