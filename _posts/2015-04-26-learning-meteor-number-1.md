---
layout: post
title: "Learning Meteor #1"
categories:
  - javascript
  - meteor
  - learning
  - english
---

Hello guys! I hope you're well!

For my first post, I decide to cover the all installation of Meteor on *NIX/Mac. If you're a Windows fan, please have a look [here](https://win.meteor.com/).

## Installing Meteor

First thing first, open a terminal and install the latest official Meteor release:

{% highlight bash %}
$ curl https://install.meteor.com/ | sh
{% endhighlight %}

After the installation, you should be able to create Meteor application. If not, restart your terminal:

{% highlight bash %}
$ meteor create my-super-cool-app
my-super-cool-app: created.

To run your new app:
  cd my-super-cool-app
  meteor
{% endhighlight %}

Meteor will create a new folder called `my-super-cool-app` with all the files that a Meteor application needs:

{% highlight bash %}
$ tree -a
. // my-super-cool-app dir
├── .meteor
│   ├── .finished-upgraders
│   ├── .gitignore
│   ├── .id
│   ├── local
│   │   └── isopacks
│   ├── packages
│   ├── platforms
│   ├── release
│   └── versions
├── my-super-cool-app.css
├── my-super-cool-app.html
└── my-super-cool-app.js
{% endhighlight %}

As you can see Meteor doesn't require specific structure to work. You can find more documentation about structuring application on [official documentation](http://docs.meteor.com/#/full/structuringyourapp). But if you're like me, building scalable and large application, you need to improve this! After some research I found a pretty cool package named: [iron-cli](https://github.com/iron-meteor/iron-cli).

  > A command line scaffolding tool for Meteor applications. It automatically creates project structure, files and boilerplate code.

## Installing iron

__iron__ requires [node.js](https://nodejs.org/) to work. I've already written [a post](http://maximesahroui.be/javascript/2014/11/18/installer-node-dot-js-sans-les-droits-administrateur-sous-ubuntu.html) (_in french_) about it. But, if you're looking for the quickest way to install it, you can follow this [gist](https://gist.github.com/maximeshr/e2415c846c9d6930f318#file-node-and-npm-in-30-seconds-sh). If you have any question about it, you can contact me in the comments section below.

Let's install __iron__:

{% highlight bash %}
$ npm install -g iron-meteor
$ iron help

A command line scaffolding tool for Meteor applications.

Usage: iron <command> [<args>] [<opts>]

Examples:
  > iron generate:scaffold todos
  > iron generate:view todos/todo_item

The default command will run your meteor application.

Commands:
┌──────────┬────────────────────────────────────────────────┐
│ build    │ Build your application into the build folder.  │
├──────────┼────────────────────────────────────────────────┤
│ create   │ Create a new iron meteor project.              │
├──────────┼────────────────────────────────────────────────┤
│ generate │ Generate different scaffolds for your project. │
├──────────┼────────────────────────────────────────────────┤
│ help     │ Get some help.                                 │
├──────────┼────────────────────────────────────────────────┤
│ init     │ Initialize your project structure.             │
├──────────┼────────────────────────────────────────────────┤
│ migrate  │ Migrate to the new iron project structure.     │
├──────────┼────────────────────────────────────────────────┤
│ run      │ Run your app for a given environment.          │
└──────────┴────────────────────────────────────────────────┘
{% endhighlight %}

Has you can see, you can now create application with iron:

{% highlight bash %}
$ iron create my-app
created my-app
created my-app/.iron
created my-app/.iron/config.json
created my-app/bin
created my-app/bin/.gitkeep
created my-app/build
created my-app/build/.gitkeep
created my-app/build/README
created my-app/config
created my-app/config/.gitkeep
created my-app/config/development
created my-app/config/development/env.sh
created my-app/config/development/settings.json
Creating project  app... |
Meteor app created
created my-app/app/client
created my-app/app/client/.gitkeep
created my-app/app/client/collections
created my-app/app/client/collections/.gitkeep
created my-app/app/client/head.html
created my-app/app/client/lib
created my-app/app/client/lib/.gitkeep
created my-app/app/client/stylesheets
created my-app/app/client/stylesheets/.gitkeep
created my-app/app/client/templates
created my-app/app/client/templates/.gitkeep
created my-app/app/client/templates/layouts
created my-app/app/client/templates/layouts/master_layout
created my-app/app/client/templates/layouts/master_layout/master_layout.html
created my-app/app/client/templates/layouts/master_layout/master_layout.js
created my-app/app/client/templates/shared
created my-app/app/client/templates/shared/loading
created my-app/app/client/templates/shared/loading/loading.html
created my-app/app/client/templates/shared/not_found
created my-app/app/client/templates/shared/not_found/not_found.html
created my-app/app/lib
created my-app/app/lib/.gitkeep
created my-app/app/lib/collections
created my-app/app/lib/collections/.gitkeep
created my-app/app/lib/controllers
created my-app/app/lib/controllers/.gitkeep
created my-app/app/lib/controllers/home_controller.js
created my-app/app/lib/methods.js
created my-app/app/lib/routes.js
created my-app/app/packages
created my-app/app/packages/.gitkeep
created my-app/app/private
created my-app/app/private/.gitkeep
created my-app/app/public
created my-app/app/public/.gitkeep
created my-app/app/server
created my-app/app/server/.gitkeep
created my-app/app/server/bootstrap.js
created my-app/app/server/collections
created my-app/app/server/collections/.gitkeep
created my-app/app/server/controllers
created my-app/app/server/controllers/.gitkeep
created my-app/app/server/lib
created my-app/app/server/lib/.gitkeep
created my-app/app/server/methods.js
created my-app/app/server/publish.js
created app/client/templates/home
created app/client/templates/home/home.html
created app/client/templates/home/home.js
created app/client/templates/home/home.css
created app/client/stylesheets/main.css
Installing the package  iron:router... |
Changes to your project's package version selections:

iron:controller        added, version 1.0.7
iron:core              added, version 1.0.7
iron:dynamic-template  added, version 1.0.7
iron:layout            added, version 1.0.7
iron:location          added, version 1.0.7
iron:middleware-stack  added, version 1.0.7
iron:router            added, version 1.0.7
iron:url               added, version 1.0.7


iron:router: Routing specifically designed for Meteor

✔ iron:router
{% endhighlight %}

To run the application: `$ iron run`. You can also run it in a specific environment: `$ iron run --env=staging`.

## What we have done today ?

  - Installing meteor
  - Installing iron-cli for large and scalable application
