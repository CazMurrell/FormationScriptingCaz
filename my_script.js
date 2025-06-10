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
/*

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

    Les Booleans servent surtout en combinaison avec des opérateurs de type if
    
    if my_var = true
    MessageBox.information ("je suis exécuté")
}

function my_func2() {
    // Les strings
    
    var my_var = "ceci est un exemple de \"string\"🐸"
    // c'est une valeur à interpréter isolée par des guillemets
    
    // on peut associer des strings avec +
    
    var A = "cette formation"
    var B = " très"
    var C = " cool"
    
    var my_var = A + B + C
    var my_var = my_var + B 
    var my_var = my_var + B
    var my_var = my_var + B // cette formation est très très très cool
    
    MessageBox.information (my_var)
    
}  

*/

/* Les ARRAY
function my_func2() {
   
    
    // au lieu de 
    
    var my_var = A
    var my_var = B
    var my_var = C
    
    var my_var = ["A","B","C"]
    
    // si je ne veux afficher que A :
    
    MessageBox.information (my_var[0]) // l'ordre dans la liste de l'array attribue un chiffre, 0 c'est le premier de la liste, c'est la valeur de l'index
    
    var my_int = 2
    var my_string = my_var[my_int] + my_var [2] + my_var [0] // ça fait CCA
    
    var my_var = [10,"B","C"] // on peut changer par des int ou mettre que des int
    
    var my_var = [] // montre que c'est une array
    my_var.push("A") //ajoute "A" à cet array
    
    var my_var = []
    my_var.push("A") // my_var[0] = A 
    my_var.push("B")// my_var[1] = B 
    my_var.push("C")// my_var[2] = C 
    MessageBox.information(my_var) // affichera le contenu avec des virgules entre chaque élément de la liste
    
}  
*/

function my_func2() {
//exercice 

  var mots1 = "Camion"
  var mots2 = "Olive"
  var mots3 = "Original"
  var mots4 = "Long"

  var mots_cache = mots1[0]+mots2[0]+mots3[0]+mots4[0]
  MessageBox.information(mots_cache) // COOL

}





