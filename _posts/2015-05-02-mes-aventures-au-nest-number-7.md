---
layout: post
title: "Mes aventures au NEST #7"
categories:
  - freelance
  - NEST'up
  - nodejs
  - express
  - stripe
  - MVP
---

Presque une semaine sans nouvelles... et pour cause : finaliser une application de vente de bières en ligne pour [MyBeer](http://my-beer.be/).

La partie n'était pas de tout repos, principalement avec l'intégration et la modification du design et la présentation qui devait absolument être terminée pour le jeudi 30 avril 2015.

Le principe en quelques mots : [MyBeer](http://my-beer.be/) propose la MyBeerBox, une boite contenant au choix 4 ou 8 bières totalement dénudées de tout packaging. L'idée est de faire découvrir de nouveaux produits aux consommateurs en y ajoutant de petits goodies comme les conseils des brasseurs pour déguster leurs produits.

Au niveau technique ça donne :

- Créer une landing page avec présentation du service ;
- Commander une MyBeerBox ou de souscrire à un abonnement (3, 6 ou 12 mois) ;
- Valider sa commande sur Stripe ;
- Créer un système d'emailing pour le client et l'équipe ;
- Mettre au point une API ;
- Sécuriser le tout par une interface administrateur ;
- Déployer l'application en live sur un VPS. __(en cours)__

Pour réaliser ce M.V.P. en deux jours, nous avons opté pour une application en __Node.js__ prototypée avec ce repository : [mjhea0/node-stripe-charge](https://github.com/mjhea0/node-stripe-charge).

J'ai été énormément supris par la facilité de mettre en place [Stripe](https://stripe.com/be) (relativement à PayPal ou Ogone...) : une paire de clés sandbox et le tour est joué ! Je pense sincèrement que je ré-utiliserai cette technologie dans mes futurs projets.

Après la présentation des M.V.P.'s (je vous invite à regarder les différents projets sur mon [Twitter](https://twitter.com/maximeshr)) nous avons reçu avec [Marc](https://twitter.com/mlainez) deux autres startups pour les aider dans leurs projets. Il s'agit de [Rengo](http://www.rengoapp.com/) et de [VestiR](http://vestir.me/). Mais je reviendrai dessus la semaine prochaine avec des photos de leurs prototypes.

J'en profite également pour vous présenter les différentes startups qui sont incubées ici :

- [trigghr](http://trigghr.com/)
- [Rengo](http://www.rengoapp.com/)
- [MyBeer](http://my-beer.be/)
- [CooCook](http://coocook.be/)
- [swanest](https://swanest.com/)
- [vestiR](http://vestir.me/)
- [fittin'room](https://www.facebook.com/FittinRoomApp/)

Si fittin'room passe par ici, je n'ai pas trouvé de landing page, alors j'ai redirigé vers leur FaceBook ! Désolé les gars :(
