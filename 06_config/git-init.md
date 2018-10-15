# Basic Git

## 1 / créer repo sur github (ou gitlab ou bitbuckets etc..)

### 1.1 / créer un dossier sur votre poste (local)

### 1.2 / initialiser le dossier local depuis le terminal avec la commande

    git init

### 1.3 / lier le dossier local au repo distant avec la commande 

    git remote add origin https://github.com/ton-pseudo/le-nom-de-ton-repo

### 1.4/ uniquement SI AJOUT D'UN README => synchroniser le dossier local

    git pull origin master


### 1.5/ ajouter un ficher avec la commande

    touch test.txt

### 2/ vérifier le status avec la commande

    git status

### 2.1/ dire à git d'observer les changements sur ce fichier

    git add test.txt

### 2.2/ vérifier le status avec la commande

    git status

### 2.3/ faire votre premier commit (sauvegarde)

    git commit -m "mon premier commit : )"

### 3 / pousser les modifications vers le repo distant

    git push origin master
