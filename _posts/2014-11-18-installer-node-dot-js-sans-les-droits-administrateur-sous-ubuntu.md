---
layout: post
title: "Installer Node.js sans les droits administrateur sous Ubuntu"
categories:
  - javascript
---

Nous allons installer [node.js](http://nodejs.org/) dans le dossier ~/.local à la place de /usr/local (qui requière les droits d'administration). Une version alternative consiste à utiliser [NVM](https://github.com/creationix/nvm) mais nous en discuterons une prochaine fois.

Ajouter à votre fichier ~/.npmrc (si il n'existe pas créez-le)

{% highlight bash %}
root    = /home/YOUR-USERNAME/.local/lib/node_modules
binroot = /home/YOUR-USERNAME/.local/bin
manroot = /home/YOUR-USERNAME/.local/share/man
{% endhighlight %}

Télécharger le code source de node et installer le dans votre fichier __.local__. Attention, il est possible que certaines dépendances soit requises pour une installation propre via make (comme gcc). De plus amples informations sont disponibles [ici](https://help.ubuntu.com/community/CompilingEasyHowTo)

{% highlight bash %}
$ wget http://nodejs.org/dist/v0.10.33/node-v0.10.33-linux-x64.tar.gz
$ tar xf node-v0.10.33-linux-x64.tar.gz
$ cd node-v0.10.33-linux-x64
$ ./configure --prefix=~/.local
$ make
$ make install
{% endhighlight %}

Créer maintenant un lien symbolique vers ~/.node_modules

{% highlight bash %}
$ cd ~
$ ln -s .local/lib/node_modules .node_modules
{% endhighlight %}

Il ne reste plus qu'à ajouter ~/.local/bin à votre `$PATH` (via ~/.bashrc ou ~/.zshrc)

{% highlight bash %}
export PATH=$HOME/.local/bin:$PATH
{% endhighlight %}

Voilà node et npm sont installés et opérationnels

{% highlight bash %}
$ which npm
/home/dev/.local/bin/npm
{% endhighlight %}
