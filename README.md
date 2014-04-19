Omakase
============
A base project for setting up new Javascript applications

***

About
=====

"Omakase" is a Japanese word that translates to something like "I'll leave it to you."
I don't know Japanese, though, [so don't trust me](http://en.wikipedia.org/wiki/Omakase).

The goal in creating this package is simple: Create a robust, modular, Javascript application framework without being tied to one particular monolith.

By default, Omakase uses

 - [Underscore](http://underscorejs.org/) for __templating__
 - [Sammy.js](http://sammyjs.org/) for __routing__
 - [RequireJS](http://requirejs.org/) for __dependency management__
 - [jQuery](http://jquery.com) for __AJAX & DOM Manipulation__

But the point is that _you don't have to_. It's up to you.

Don't like Underscore? That's okay, Omakase doesn't mind: switch it out for your template engine of choice.
Not a fan of Sammy's syntax? Sure, replace it with a different router.

***

In the traditional American-English sense, the word "omakase" would leave the decisions up to the chef.
>the customer typically receives the highest-quality fish in stock at a less expensive cost

But here, you get to be the chef.
Everything you want to get done is ready to go as is, but you're empowered to choose the __best__ tool for each job, with minimal development cost since each piece is isolated from the others.

***

Don't be afraid of a monolithic Javascript framework.
Be __empowered__ by Omakase.


***
Get Started
===========
After checking out the repository, you'll need to do two things to get started:

1. Run `bower install` in the root directory
2. Compile the SASS styles into `style/screen.min.css` by running the SASS compiler on `style/sass/screen.scss`

This will install all necessary dependencies and compile the SASS into CSS.

Don't have Bower?
-----------------
[Check out the Bower homepage](http://bower.io/)

Don't have a SASS compiler?
---------------------------
I use [Koala](http://koala-app.com/), and I really like it.
