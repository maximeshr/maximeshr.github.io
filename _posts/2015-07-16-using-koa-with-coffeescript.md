---
layout: post
title: "Using Koa with CoffeeScript"
categories:
  - javascript
  - coffeescript
  - es6
  - english
---

## What is Koa?

[Koa](http://koajs.com) is a new web framework designed by the team behind Express, which aims to be a __smaller__, more __expressive__, and more __robust foundation__ for web applications and APIs. Through leveraging __generators__ Koa allows you to __ditch callbacks__ and greatly increase __error-handling__. Koa does not bundle any middleware within core, and provides an elegant suite of methods that make writing servers __fast and enjoyable__.

## Example with CoffeeScript

Let's take koa's "Hello World" for example :

{% highlight javascript %}

var koa = require('koa');
var app = koa();

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s ms', this.method, this.url, ms);
});

// response

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);

{% endhighlight %}

OK! Now let's CoffeeScript : ``coffee index.js``

{% highlight coffeescript %}

koa = require "koa"
app = koa()

## logger

app.use (next) ->
  start = new Date
  yield next
  ms = new Date - start
  console.log "%s %s - %s ms", @method, @url, ms

## response

app.use ->
  @body = "Hello World"
  yield return # coffeescript requires "yield" to turn function into generator

app.listen 3000

{% endhighlight %}

CoffeeScript 1.9 defines a generator as any function that uses the new yield keyword.

{% highlight coffeescript %}

app.use ->
  @body = "Hello World"

{% endhighlight %}

This will not turn the function into generator and throw exception :

{% highlight bash %}

AssertionError: app.use() requires a generator function
  at Application.app.use (/home/maxime/development/tests/koa/node_modules/koa/lib/application.js:100:5)
  at Object.<anonymous> (/home/maxime/development/tests/koa/index.coffee:14:5)
  at Object.<anonymous> (/home/maxime/development/tests/koa/index.coffee:1:1)
  at Module._compile (module.js:428:26)
  at Object.exports.run (/home/maxime/.nvm/versions/io.js/v2.3.1/lib/node_modules/coffee-script/lib/coffee-script/coffee-script.js:134:23)
  at compileScript (/home/maxime/.nvm/versions/io.js/v2.3.1/lib/node_modules/coffee-script/lib/coffee-script/command.js:224:29)
  at compilePath (/home/maxime/.nvm/versions/io.js/v2.3.1/lib/node_modules/coffee-script/lib/coffee-script/command.js:174:14)
  at Object.exports.run (/home/maxime/.nvm/versions/io.js/v2.3.1/lib/node_modules/coffee-script/lib/coffee-script/command.js:98:20)
  at Object.<anonymous> (/home/maxime/.nvm/versions/io.js/v2.3.1/lib/node_modules/coffee-script/bin/coffee:7:41)
  at Module._compile (module.js:428:26)
  at Object.Module._extensions..js (module.js:446:10)
  at Module.load (module.js:353:32)
  at Function.Module._load (module.js:308:12)
  at Function.Module.runMain (module.js:469:10)
  at startup (node.js:117:18)
  at node.js:948:3

{% endhighlight %}

## What can I yield with Koa ?

- Promises
- Thunks - functions you call with a single parameter, __callback__
- Generators

## More

Using iojs v2.3.1 - repository available [here](https://github.com/maximeshr/coffeescript-koa)

Have fun experimenting with Koa and CoffeeScript :)

