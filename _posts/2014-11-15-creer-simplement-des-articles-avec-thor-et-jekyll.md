---
layout: post
title: "Créer simplement des articles avec Thor et Jekyll"
categories:
  ruby
---

Une simple astuce que j'utilise pour créer mes articles via la console (#ninjaDev).

`$ gem install bundle thor // si ce n'est pas déjà fait !`

Un petit fichier Gemfile à la racine du projet Jekyll suivi d'un `$ bundle install` :

{% highlight ruby %}
source 'https://rubygems.org'

gem 'thor'
gem 'stringex'
{% endhighlight %}

Créer le fichier .thor qui va faire le job (il est tout à fait personnalisable !) :

{% highlight ruby %}
require "stringex"

class Jekyll < Thor
  desc "new", "create a new post"
  method_option :editor, :default => "subl" // HERE text editor
  def new(*title)
    title = title.join(" ")
    date = Time.now.strftime('%Y-%m-%d')
    filename = "_posts/#{date}-#{title.to_url}.md"

    if File.exist?(filename)
      abort("#{filename} already exists!")
    end

    puts "Creating new post: #{filename}"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: post"
      post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
      post.puts "categories:"
      post.puts " -"
      post.puts "---"
    end

    system(options[:editor], filename)
  end
end

{% endhighlight %}

Il ne reste plus qu'à utiliser la ligne de commande pour créer votre fichier markdown :

`$ thor jekyll:new Créer simplement des articles avec Thor et Jekyll`

Si vous souhaitez de plus amples informations, c'est par ici :

  -  [Jekyll](http://jekyllrb.com/)
  -  [Thor](http://whatisthor.com/)
  -  [Stringex](https://github.com/rsl/stringex)

Bonne lecture ;)
