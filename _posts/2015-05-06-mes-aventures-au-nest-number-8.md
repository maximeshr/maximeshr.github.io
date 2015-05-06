---
layout: post
title: "Mes aventures au NEST #8"
categories:
  - freelance
  - NEST'up
  - nodejs
  - ionic
  - MVP
---

Ca y est ! Il est en ligne : [MyBeerBox](http://www.mybeerbox.be) ! #Happy

Bon c'est un M.V.P. donc soyez indulgents, mais le résultat est assez sympa visuellement et surtout, fonctionnel ! Oui, [MyBeer](http://www.my-beer.be) peut __déjà__ faire des revenus grâce à la __#nestupdevteam__ :)

Pour ce qui est du "dev side", nous avons même créé un API restful pour une éventuelle évolution du service.

Pour cette semaine, nous avons également commencé l'application de [VestiR](http://vestir.me/) et pour lundi prochain, nous commencerons celle de [Rengo](http://www.rengoapp.com/).

Pour [VestiR](http://vestir.me/), il s'agit d'une application web en mode concierge ou l'utilisateur va se créer un profil utilisateur avec ses différentes mensurations. L'objectif de l'équipe derrière sera de lui proposer plusieurs liens en relation avec sa recherche :

Jules est __grand et fort__ et a toujours des problèmes pour se trouver une chemise. Et bien Jules va donc se créer un __profil__ sur l'application web en mentionnant ses __mensurations de façon précise__. [VestiR](http://vestir.me/), après une recherche sur différentes plateformes sera en mesure de lui proposer plusieurs solutions pour résoudre son problème : trouver la chemise parfaite pour sa carrure. Pour Jules, il ne restera plus qu'à payer et obtenir sa chemise.

Du coté de [Rengo](http://www.rengoapp.com/), il s'agit d'une application mobile proposant aux parents de l'aide pour récupérer leurs enfants en cas de problèmes :

Julia est malheureusement retenue en meeting et __ne peut pas__ se libérer avant 18:30. Pourtant, Quentin, son fils, termine son entrainement de tennis à 17:00 et elle ne veut pas __le laisser attendre tout seul__. La solution à ses problèmes [Rengo](http://www.rengoapp.com/) ! Grâce à l'application, Julia va envoyer à __son cercle__ d'amis proches une alerte pour savoir : qui dans son entourage peut récupérer Quentin à la fin de son entrainement. Heureusement pour Julia, Valentin, le papa du meilleur ami de Quentin va lui aussi rechercher son fils à 17:00. Après __une mise en relation__ en mode concierge (dans un premier temps), Quentin rentera avec Valentin et son fils. Julia, __soulagée__, n'a plus qu'à passer rechercher son fils à la maison de Valentin après son meeting.

Les deux conceptes sont super sympa et intéressants niveau technique : du Node.js pour [VestiR](https://nodejs.org/) et de l'[ionic](http://ionicframework.com/) pour Rengo.

Nous avons également eu une demande de la part de [trigghr](http://trigghr.com/) concernant la mise en place d'un __script de scrapping de données__ sur LinkedIn. L'idée est de récupérer un maximum d'information sur les compagnies. Après quelques minutes nous avons trouvé une API disponible : 

https://www.linkedin.com/ta/federator?query={:q}&types=company

Il faut bien évidemment remplacer le {:q} par le critère de recherche. Ce n'est pas le plus sexy du monde, mais c'est déjà une bonne base pour commencer.

Pour le reste de la semaine, nous pensons pouvoir clôturer l'application de [VestiR](http://vestir.me/) !

Pour le prochain article, je pense parler du concepte de "__M.V.P. lab" que nous testons. Mais également des choses qui m'ont plues et déplues durant l'aventure. Je suis toujours entrain de chercher des points négatifs, mis à part la distance Mont-Saint-Guibert - Couvin (120 km), je n'en vois pas du tout !

Allez, à très vite !
