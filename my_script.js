function my_func() {

    // exemples simples d'utilisation de variations (var)

    var my_var = 2

    my_var = 3
    
    var my_var2 = 10
    
    my_var = my_var2
    

    var my_var3 = my_var + my_var2 // on peut ajouter un commentaire comme ça
    var my_var4 = my_var3 - my_var2

    // addition c'est +, soustraction c'est -, division /, multiplication *
    // on peut faire des équations comme pour les maths normales avec des parenthèses de priorité
    // une valeur claire signale qu'elle n'est pas lue dans la formule

    my_var = my_var2 = my_var3 // c'est la valeur de my_var3 qui va s'appliquer sur les deux autres

    MessageBox.information (my_var3) // ouvre une fenêtre dans TB
    MessageLog.trace (my_var2) //note l'information dans le log (attention pas très lisibile, il est précédé du timecode : 
    // utile pour contrôler la valeur à un certain point du code)

    my_var2 = my_var2 + 1 // on peut utiliser ce genre de référencement

    /* 
    tout ce qui est au milieu de ceci est un commentaire et non du code actif
    */

    var my_var = 3 //int (une valeur entiere)
    var my_float = 1.408 // (nombre non entier) 
    // float vs integer : pas très important dans javascript sauf sous certaines conditions ou le script veut des nombres entiers

    var prenom = "alex" // string (enchainement de lettres noté dans les guillemets (même si c'est des chiffres!))
    var phrase = prenom + 3 // resultat "alex3"
    var phrase = prenom + ( 3 + 4 ) // resultat "alex7"  < il y a une priorité entre les types de variables int ou string
}

function my_func2() {
      //Les booleans
    var my_var = true
    mybool = false

    var A = 10
    var B = 30
    var my_var = ( A > B ) //ça va afficher true ou false dans le message, les parenthèses ne sont pas nécessaires MAIS on les mets c'est mieux

    MessageBox.information (my_var)
}  
function my_func2() {
      //Les booleans

    var A = true
    var B = true
    var C = true
    var D = false
    var my_var = ( A && B && C && D) //vérifie l'ensemble des propositions pour vérifier si tout est true, si un est false il affichera false. C'est comme un sanity check.

    MessageBox.information (my_var)

     var A = 100 == 100
    var B = (5-9)== 100
    var C = ( 5665-9 ) == 89950

    var my_var = ( A || B || C || D) //si au moins une des propositions et true alors ça affiche true
    
    MessageBox.information (my_var)

    /*
    Les Booleans servent surtout en combinaison avec des opérateurs de type if
    */

    if my_var = true
    MessageBox.information ("je suis exécuté")

    // Les strings

    var myvar = "ceci est un exemple de string"
    // c'est une valeur à interpréter isolée par des guillemets
    
   MessageBox.information (my_var)

}  
//je change dans toonboom