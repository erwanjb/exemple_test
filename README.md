# Instructions à suivre:

Tout d'abord, créer un compte sur GitHub: [GitHub](https://github.com/) 

## Installation des différents environnement de travail
- Ghithub for DeskTop: [GitHubDeskTop](https://desktop.github.com/)
- Node Js: [Node](https://nodejs.org/fr/download/)
- Visual Studio Code: [VSC](https://code.visualstudio.com/)

## Marche à suivre
### Etape 1
Forker le repo [exemple_test](https://github.com/erwanjb/exemple_test)
Ouvrir Ghithub for DeskTop, dans l'onglet file, cloner le repo:  votregithub/exemple_test

### Etape 2
Un nouveau dossier exemple_test sera créé, il aura comme chemin : ~/Document/GitHub/exemple_test.
Aller dans le dossier exemple_test, faites un click droit et ouvrez GitBash Here, ça ouvre une console.
Refaites l'opération pour avoir 3 consoles ouvertes.
Dans une console faites la commande: `npm install`, ça vous créera un dossier node_module qui comportera toutes les dépendances au projet.
Ensuite faire la commande: `npm run tsc` qui compilera le code typescript en javascript
Pour lancer le server dans une autre console faire la commande `node server/index`, 
vous aurez accès au front à l'adresse: http://localhost:4444 dans un navigateur

### Etape 3
pour lancer lest test et le coverage, dans une autre console, faire la commande `npm run test`,
ça vous fait passer les tests et ça crée un dossier coverage dans notre dossier exemple_test, allez dedans vous trouverez un dossier lcov-report, aller dedans et double clicker sur le fichier index, ça vous ouvre dans le navigateur le coverage sur les tests.
Pour débugguer les tests, allez dans visual studio code, ouvrez le dossier exemple_test et dans le menu de gauche, ouvrez l'onglet Debug et sélectionner mocha unit test et faire play, ça lancera les tests dans la console de L'IDE.
Mettez des breakpoints (points d'arret) au endroits ou vous pensez qu'il y a des problèmes, si vous ne savez pas ou exactement ou le mettre, n'hésiter pas à les mettre au début et à débugguer pas à pas pour visualiser le problème.