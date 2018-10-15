# Advanced Git



## 1 / Pour cloné un dossier distant

    git clone le-lien-du-projet

## 2 / Pour crée une branche de feature/fixup/patch ect..
Commande a faire depuis le master a jour (IMPORTANT) du projet

    git checkout -b le-nom-de-ta-branche

## 3 / Pour mettre a jour une branche depuis le master

    git checkout -i master

## 4/ Squashé les commits 

Dans le cas ou vous aurez plus de 5 commits sur votre branche il est de bonne pratique sur git de les Squashé

    git rebase -i master

Une fois devant votre liste de commits, a partir du deuxième commits remplacé le mot "pick" par un "s" ou un "squash".
Ceci a pour effet de fusionné tout vos commit avec le précédent en partant du dernier de la liste jusqu'au 1er qui contient un pick et non un squash en gros ça ressemble a ça 


    pick c25330f New AppBar style
    s c28630f added button
    s c65763f added unit test
    # Rebase a197c45..c25330f onto a197c45 (1 command(s))
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    # d, drop = remove commit
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out

## 5 / Réécrire votre historique Git /!\
Si vous venez de squashé vos commit ou de faire une mise a jour depuis le master,
Git va vous mettre un stop et vous balancer une erreur dans ce genre la:

    $ git push origin ma-branche
    To https://github.com/mon-pseudo/mon-super-projet.git
     ! [rejected]        ma-branche -> ma-branche (non-fast-forward)
    error: failed to push some refs to 'https://github.com/mon-pseudo/mon-super-projet.git'
    hint: Updates were rejected because the tip of your current branch is behind
    hint: its remote counterpart. Integrate the remote changes (e.g.
    hint: 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.

pour régler ça vous devrez faire cette commande: 

    git push --force-with-lease origin ma-branche
Cette commande va tout simplement dire a Git que la véritable "histoire" de votre projet est celle vous êtes entrain de push sans cassé le travail des potentiel collègues travaillant sur la même branche.
### ATTENTION

Ne jamais, et je dit bien JAMAIS utilisé la commande qui suit a moins d'être sur a 900% de votre geste

    git push --force origin ma-branche
Cette commande a pour but de tout écrasé sur son passage sans vérifié les éventuelles conflit ou le boulot des collègues et c'est surtout que c'est IRRATTRAPABLES. 
## 6/ Voir le "avant/après" de votre code

    git diff 

## 6.5/ Voir la différence entre deux branches 

    git diff premiere-branche seconde-branche

## 7/ Voir tout les commits sur votre branche

    git log

## 8/ Virer un ficher ajouter par erreur avec git add

    git reset mon-fichier-pourri.java

## 9/ Revenir dans le passé 

Si vous voulez revenir en arrière parce que vous avez fait un commit foireux tout en gardant les changement entre temps vous pouvez utilisez cette commande: 

    git reset numeroDeCommit

## 9.5/ Revenir dans le passé et y rester /!\
Si vous souhaitez revenir a un commit précédent sans vous soucier des fichier modifier jusqu'ici vous pouvez utilisé ceci: 

    git reset --hard numeroDeCommit

Gardez a l'esprit que vous effacé TOUT vos changement avec cette commande 
## 10/ Supprimer son historique
Parfois vous allez voir que tout les commits que vous avez fait sont complètement foireux et qu'il faut que vous réorganisiez tout ça.

    git reset @HEAD18 
(le 18 représente le nombre de commit fait mais ça peut être aussi les 5 dernier.)
Après cette commande vous pourrez refaire proprement tout vos commits en y ajoutant les fichiers que vous souhaitez
## 11/ Changer son dernier commit

    git commit --amend

## 12/ Voir qui a fait le con sur le projet

    git blame lenomdufichier

## 13/ Savoir comment fonctionne une commande

    git help lenomdelacommande

## Quelque conseil
Tout ce que vous faites sur Git est rattrapable du manière ou d'une autre a quelques exceptions près. 

Donc si vous faites des commits foireux, que vous arrivez a cassé des branche ou pire a péter la prod, 
don't panic, allez voir votre formateur ou votre sénior/leader il vous aidera, n’hésitez surtout pas a posé des question pour savoir comment ça marche quitte a prendre une journée pour apprendre =D
  
### Cordialement Walid aka Shynobee
