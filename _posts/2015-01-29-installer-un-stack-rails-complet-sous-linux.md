---
layout: post
title: "Installer un stack Rails complet sous Linux"
categories:
  - ruby
---

Je croise de plus en plus d'utilisateurs sur internet qui n'arrivent pas à configurer correctement Ruby et Rails sur leurs machines virtuelles... Voici un petit guide rapide et sympathique que j'utilise pour travailler. Ce guide comprend l'installation de :

  - Ruby (avec RVM ou RBENV)
  - Git
  - Rails
  - MySQL
  - PostgreSQL

## Installation de Ruby

Nous allons installer la dernière version stable de Ruby : __2.2.0__

La première étape consiste en l'installation des dépendances :

{% highlight bash %}
$ sudo apt-get update
$ sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties
{% endhighlight %}

Maintenant deux choix s'offrent à vous : utiliser [RVM](https://rvm.io/) ou [RBENV](http://rbenv.org/) (voir compiler vous même les sources, c'est possible et fonctionnel). Pour ce qui est de mon choix personnel, je préfère utiliser RVM que je trouve plus simple d'utilisation surtout au niveau de la gestion des gemsets (principalement la syntaxe de création). Je vous conseil la lecture de ce [post](http://jonathan-jackson.net/rvm-and-rbenv) pour un avis plutôt objectif.

Attention, si comme moi, vous n'utiliser pas le bash (pour moi : [zsh](http://www.zsh.org/) avec [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)), modifiez le fichier suivant __.bashrc__ par votre fichier de configuration !

#### Installation via RVM

{% highlight bash %}
$ sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev
$ curl -L https://get.rvm.io | bash -s stable
$ source ~/.rvm/scripts/rvm
$ echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc
$ rvm install 2.2.0
$ rvm use 2.2.0 --default
$ ruby -v
{% endhighlight %}


#### Installation via RBENV

{% highlight bash %}
$ cd
$ git clone git://github.com/sstephenson/rbenv.git .rbenv
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
$ echo 'eval "$(rbenv init -)"' >> ~/.bashrc
$ exec $SHELL

$ git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
$ exec $SHELL

$ rbenv install 2.2.0
$ rbenv global 2.2.0
$ ruby -v
{% endhighlight %}

Dernière petite astuce concernant la non-installation de la documentation de vos packages localement (pour une installation plus rapide) :

{% highlight bash %}
$ echo "gem: --no-ri --no-rdoc" > ~/.gemrc`
{% endhighlight %}

Rien de bien complexe n'est-ce pas ? :D

## Configuration de Git

Je ne vais pas vous expliquer ce qu'est git, certains [sites](http://git-scm.com/) le font mieux que moi. Pour les plus débutants, je conseil un petit tour du coté de [trygit](https://try.github.io/levels/1/challenges/1) pour se faire une idée de l'outil. Sachez qu'il s'agit, actuellement, du meilleur outil de versioning au monde. Et ceux qui me diront que SVN c'est de la bombe... et bah c'est faux !

Pour la configuration :

{% highlight bash %}
$ git config --global color.ui true
$ git config --global user.name "VOTRE NOM"
$ git config --global user.email "VOTRE@EMAIL.com"
$ ssh-keygen -t rsa -C "VOTRE@EMAIL.com"
{% endhighlight %}

La dernière ligne n'est utile que si vous souhaitez lier votre compte [GitHub](https://github.com/) pour éviter de vous authentifier à chaque fois. Je vous laisse lire la [documentation](https://help.github.com/articles/generating-ssh-keys/) à ce propos.

## Installation de Rails

Premièrement, vous devez installer nodejs pour permettre à coffeescript de fonctionner correctement. Pour cela, je vous invite à consulter [mon article](http://maximesahroui.be/javascript/2014/11/18/installer-node-dot-js-sans-les-droits-administrateur-sous-ubuntu.html) sur ce sujet.

Pour la suite, rien de difficile :

{% highlight bash %}
$ gem install rails
$ rails -v
{% endhighlight %}

Si vous utilisez RBENV, n'oubliez pas de faire un coup de `$ rbenv rehash` après l'installation d'une gem !

## Installation de MySQL

Par défault, Rails utilise sqlite3, mais souvent, vous aurez besoin d'un DBMS moins versatile ! Pour cela, installez MySQL simplement :

{% highlight bash %}
$ sudo apt-get install mysql-server mysql-client libmysqlclient-dev
{% endhighlight %}

Voilà pour la configuration du stack.

## Créer une application Rails

Créons maintenant notre application Ruby on Rails :

{% highlight bash %}

# 'rails new myapp' va créer une application avec sqlite3
# ici nous souhaitons utiliser mysql
rails new myapp -d mysql

# changement de répertoire
cd myapp

# modifiez le fichier config/database.yml avec
# les informations de votre base de données avant
# de lancer cette commande qui créera votre base de données
rake db:create

# lancez votre serveur sur localhost:3000 (par défaut)
rails server
{% endhighlight %}

Votre application est disponible via l'url : [http://localhost:3000](http://localhost:3000)
