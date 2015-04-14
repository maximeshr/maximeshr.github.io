---
layout: post
title: "Mes aventures au NEST #4"
categories:
  - freelance
  - NEST'up
  - dashboard
  - brainstorm
  - comments
---

Pour les plus observateurs d'entre-vous qui l'ont déjà remarqué, j'ai ajouté un petit module de commentaire. Rien de très complexe, simplement un petit script JavaScript qui relie l'API de [disqus](https://disqus.com) avec mon site. C'est vraiment à la portée de tous ! N'hésitez pas si vous souhaitez ajouter cette fonctionnalité à votre site. De plus, __disqus__ propose plusieurs modules d'intégration à des plateforme de blog existantes tels que : Wordpress, Blogger, Drupal et quelques autres.

![disqus intégration]({{ "/img/disqus.png" | prepend: site.baseurl }}){: .img-responsive}

Au niveau du NEST'up pas mal de choses intéressantes, dont une première participation à un brainstorming pour aider une startup. L'objectif : _trouver un nom_ ! Et bon sang, qu'est-ce que c'est complexe... Probablemnt l'un des exercice les plus difficile à accomplir lors de la création d'une entreprise ou d'un produit. Car il ne faut pas oublier qu'un nom est une image de marque, non seulement il doit plaire mais également refléter les valeurs qu'il incarne. Pour cela, nous avons effectué un brainstorming légèrement spécial.

Après un petit __"bang"__ - non ce n'est pas ce que vous croyez, mais bien un jeu permettant aux différents membres de faire connaissance rapidement - nous avons composé trois équipes (3 - 3 - 2).

- Objectif 1 : Trouver les deux meilleurs noms possibles en moins de deux minutes ;
- Objectif 2 : Trouver les deux pires noms possibles en moins de deux minutes ;

Les deux meilleurs noms de chaque équipe sont jetés à la poubelle tandis que les deux pires noms sont transmis au groupe à sa gauche.

- Objectif 3 : Transformer les deux pires noms de son voisin en deux noms en moins de deux minutes ;

Ces six noms (deux par groupes) sont conservés pour la dernière phase. En parlant de phase, ce workshop est composé de six phases. Prévoyez entre une et deux heures pour le faire.

Nous enchainons avec la présentation de plusieurs images spécifiquement sélectionnées par le WM (workshop master, c'est cool comme nom non ?).

- Objectif 4 : Donner un maximum d'adjectifs et/ou de verbes en rapport avec une image donnée.

Ces "mots" sont sauvegardés, au même titre que les six noms précédents. Nous effectons le même exercice, non plus avec des images mais cinq mots représentants les valeurs que le WM souhaite transmettre. De plus la contrainte adjectifs et/ou verbes n'est plus obligatoire.

- Objectif 5 : Trouver des mots en rapport avec les valeurs du WM.

Une fois tous ces éléments à notre disposition, chaque membre dispose __uniquement__ de dix points à répartir entre les différents éléments : noms, valeurs et mots. Il est également possible de voter dix fois pour le même élément. Aucune restriction à ce niveau.

Une fois les éléments sélectionnés, nous éliminons le reste pour se concentrer sur la dernière phase de l'exercice : 

- Objectif 6 : Trouver un nom, un logo et une histoire à l'aide de tous les éléments restants.

And... voilà ! :D

De mon coté, niveau développement, j'ai commencé à mettre au point un dashboard qui sera disponible en live sur l'écran principal. Plusieurs informations importantes doivent y apparaitre :

- Un compte à rebours par rapport à la date de présentation des MVPs : fin mai ;
- Les derniers tweets possédants le hashtag #nestup ;
- Pour chaque startup afficher une métrique en particulier qui sera updatée tous les matins ;

Pour cela, nous avons décidé d'utiliser [Dashing](dashing.io) et principalement sont fork basé sur node.js : [dashing-js](https://github.com/fabiocaseri/dashing-js). L'utilisation est relativement simple : une configuration de modules et du css/js pour personnaliser la board. Voici un screenshot de la V.0.1 (nous sommes toujours en attente des métrics des startups) :

![dashing v.0.1]({{ "/img/nest-up-adventures/dashing-v-0-1.png" | prepend: site.baseurl }}){: .img-responsive}

L'url suivera dès qu'il y aura plus d'informations. Certainement mercredi ;)
D'ici là, portez-vous bien !
