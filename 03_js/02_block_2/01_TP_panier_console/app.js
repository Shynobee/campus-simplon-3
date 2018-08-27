var tpPanier = (function tpPanierConsole() {
    console.log("TP panierConsole - ready to rock !");

    var ajouterProduitPanier, getTaillePanier, panier = [], start;

    getTaillePanier = function () {
        return panier.length;
    };

    ajouterProduitPanier = function (ref, prix, color) {
        var prod;

        if (!ref || !prix) alert("mauvaise saisie");

        else {
            prod = {
                ref: ref,
                prix: prix,
                color: color ? color : "NS"
            };

            panier.push(prod);
        }

        return prod || false;
    };

    start = function () {
        ajouterProduitPanier("guitare", 100);
        ajouterProduitPanier("sneakers", 150, "noir");

        console.log(panier);
        console.log("articles dans le panier : " + getTaillePanier());

        ajouterProduitPanier("jean", 120, "gris");
        ajouterProduitPanier("stylo", 1.20, "bleu");
        ajouterProduitPanier("ketchup", 3);

        console.log("articles dans le panier : " + getTaillePanier());

        console.log(panier);
    };

    window.addEventListener("DOMContentLoaded", start);

    return {
        getTaille: getTaillePanier,
        ajouterProduit: ajouterProduitPanier
    };

}());
