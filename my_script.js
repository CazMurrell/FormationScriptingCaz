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


//je change dans toonboom