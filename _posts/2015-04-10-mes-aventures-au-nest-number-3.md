---
layout: post
title: "Mes aventures au NEST #3"
categories:
  - freelance
  - NEST'up
  - metrics
  - hacking
  - twitter
  - api
---

Un petit article pour relater les différents points que nous avons abordé lors de cette troisième matinée au sein du NEST : les metrics.

Pour ceux qui ne savent pas ce que c'est, je vous invite à faire un petit tour du coté de [Google Analytics](http://www.google.com/analytics/) ou de [KISSmetrics](https://www.kissmetrics.com) pour de plus amples informations.

Après plusieurs recherches, voici un listing des six métriques les plus importantes à traquer :

> #### Visites qualifiées
> Cette métrique est vivement recommandée pour tous les marketeurs. En effet, elle capte deux dimensions importantes qu’aucun autre système métrique simple ne fait : elle associe à la fois le quantitatif (nombre d’individus) et le qualitatif (les interactions des utilisateurs, ce qui suggère un degré d’intérêt de la part des consommateurs). Selon le canal utilisé, les métriques du marketeur varient, néanmoins l’accent est toujours mis sur le comportement – une démarche bien différente que les autres mesures de performance classiques.

> #### Le taux de clics
> Le taux de clic est la métrique la plus utilisée par les annonceurs en ligne. Cela correspond au pourcentage d’internautes exposés à un contenu publicitaire qui ont cliqué sur celui-ci afin de se rendre sur le site de l’annonceur ou de répondre à la sollicitation du message. Bien que son importance décroit et que cette métrique n’est pas toujours représentative, le taux de clic reste une des mesures les plus utilisées par les entreprises pour mesurer la performance de leurs actions marketing. Par exemple, un taux de clic supérieur à 1% peut-être considéré comme bon mais certains scores peuvent dépasser les 10%, difficile d’émettre un jugement. Certains supports se font rémunérer sur la base de ce taux de clic : on parle de rémunération au clic.

> #### Image de marque perçue
> Cette métrique est calculée en déterminant le changement de perception de la marque auprès d’un public bien défini, en comparant les résultats à ceux d’un groupe témoin qui n’a pas été exposé à l’image de cette même entreprise (ou au message).

> #### Le taux d’engagement
> L’engagement fait référence à la création d’un intérêt ou d’une attention favorable de l’internaute envers votre site. Il s’agit d’un ensemble spécial de mesures intégrées qui saisit le degré de l’influence d’un contenu ou d’une annonce. Vous pouvez mesurer le degré d’engagement d’un internaute sur votre site à l’aide, par exemple, du temps passé sur le site, l’inscription à une newletter, l’abonnement au fil RSS, la soumission d’un commentaire, l’intervalle entre les visites d’un même internaute, etc. Basé sur un système de points de valeur flexible, le taux d’engagement fonctionne sur tous les médias digitaux, que ce soit des vidéos, des applications mobiles,  jusqu’aux réseaux sociaux.

> #### Le taux de conversion
> Le taux de conversion correspond au rapport entre les internautes ayant réalisé l’action recherchée dans le cadre de votre action marketing par rapport au nombre total d’utilisateurs touchés par l’action. Bien souvent, un internaute « convertit » au moment où il achète un produit, s’inscrit à une Newsletter, s’abonne à un flux RSS ou télécharge un fichier. Cependant, une action de fin peut être aussi un « like », une « vue » d’une vidéo, un « follower » sur Twitter, etc. C’est le but ultime d’une page Web ou d’une publicité.
> Vous devez vérifier la façon dont vous calculez votre taux de conversion. Par exemple, est-ce que le dénominateur sera les visiteurs uniques ou le nombre de visites? Cela peut avoir un impact conséquent sur votre organisation et pourra influencer la stratégie que vous mettrez en place. C’est donc une métrique essentielle pour déterminer l’efficacité de la campagne marketing mise en œuvre.

Ces différentes métriques représentent l’efficacité d’une stratégie de webmarketing qui va générer de l’engagement, une action, favoriser l’image de marque, etc. Mais les buts atteints sont-ils finalement rentables pour l’entreprise ?

> #### Retour sur investissement (ROI)
> Le ROI est une mesure financière qui représente la valeur créée par votre campagne marketing. Les entreprises ont besoin de déterminer si oui ou non un programme social média est efficace. Cela dépend en grande partie des objectifs de l’entreprise sur les médias sociaux et l’organisation de celle-ci.

Si l’objectif est de mesurer le trafic, la vente ou le référencement, il est possible d’avoir une approche plus quantitative.  Il y a quelques outils gratuits qui peuvent vous aider avec ce type de mesure, y compris Google Analytics et Feedburner qui sont essentiels. Ce sont des outils gratuits qui aident à analyser le trafic de ​​votre entreprise, nombre d’abonnés, optimisation des mots clés et autres tendances.

Si vous avez envie de creuser le sujet, je vous invite à lire cet [article](http://articles.bplans.com/the-6-most-important-web-metrics-to-track-for-your-business-website/).

En ce qui concerne l'après-midi, nous avons passé en revue les besoins de quatre startups. Ce qui est revenu constamment était une landing page composée d'une description de leur "value proposition" ainsi qu'un champs email. Pour les plus avancés nous avons également eu une demande de mise en place de scripts permettant de sortir une liste d'utilisateurs twitter belges parlant de cuisine.

La solution fût rapidement implémentée à l'aide de l'[api twitter](https://dev.twitter.com/overview/documentation) :

{% highlight javascript %}
// twitter.api.js

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
 
var params = { q: 'cuisine', lang: 'fr', count: '100' };
client.get('search/tweets', params, function (err, tweets, res) {
  if (err) throw err;
  console.log(tweets); // or save it in database !
});
{% endhighlight %}

Voilà c'est tout pour cette troisième journée. Pour ce weekend, je vais écrire mon premier article en anglais sur la création d'un petit tools avec Meteor et l'api twitter pour la récupération d'offres d'emplois mais je dois encore améliorer le système. La version beta est disponible [ici](http://needrr.meteor.com/) ainsi que son [code source](https://github.com/maximeshr/needrr).

À la semaine prochaine !

