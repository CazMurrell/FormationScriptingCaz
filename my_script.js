/*
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

function my_func2() {
    //exercice 
    
    var mots1 = "Camion"
    var mots2 = "Olive"
    var mots3 = "Original"
    var mots4 = "Long"
    
    var mots_cache = mots1[0]+mots2[0]+mots3[0]+mots4[0]
    MessageBox.information(mots_cache) // COOL
    
}


function my_func2() {
    //exercice 
    
    var my_array = ["jeanpierre",10,false] on peut mettre des string des int des bool
    var my_array = [["jeanpierre","jeanmarc"],["lucie-Carole","Josianne-Marie"]] // on peut mettre des array dans des array

}


function my_func2() {
    //exercice 
    
    var my_array = ["jeanpierre",10,false] on peut mettre des string des int des bool
    var my_array = [["jeanpierre","jeanmarc"],["lucie-Carole","Josianne-Marie"]] // on peut mettre des array dans des array
    
    MessageLog.information(my_var)      
}

function my_func2() {
    var my_string = "the quick brown fox jumps over the lazy dog" 
    
    MessageBox.information(my_string.length) // réponse : 43, le .length compte le nombre de caratère
    
    var words = my_string.split(" ") // retire l'espace
    
    MessageBox.information(words) // compte le nombre de mots qu'il y a dans la phrase
    
    var string_no_spaces = words.join("")
    
    MessageBox.information("String no spaces : "+string_no_spaces) // réponse : thequickbrownfoxjumpsoverthelazydog
    MessageBox.information("String no spaces length : "+string_no_spaces.length)
    
    //on peut associer les étapes
    
    var string_no_spaces = words.split(" ").join("") //retire les espaces et colle les caractères ensemble
    
}

function my_func2() {
    //Les OBJECTS : exemple
    
    var character_data = {
        "name":"Mario",
        "HP":100 // exemple de couple clé/valeur
        "stamina":52,
        "weapon"{
            "name":"axe"
            "damage":30
            "buff":{
                "type":"ice_damage",
                "damage":"+10"
            }
            "stuff":["hat", "..."]
        },
        
        
    }
    
    
    MessageLog.information(character_data.weapon) // Le "." nous permet de nous promener dans l'arborescence
    
    character_data.weapon.buff.type = "fire_damage"
    
    MessageLog.information(character_data.weapon.buff.type) //réponse : fire damage
    
    // exemple :
    
    function my_func2() {
        
    var my_var = 10 // variable
    
    var marion_brain = {  //c'est marion_brain la variable
    "current_brain_capicty":100, // la propriété de l'objet marion_brain (nomenclature)
    "damage_per_new_information":10 // amage_per_new_information est une propriété de marion_brain
}

marion_brain.current_brain_capicty -= marion_brain.damage_per_new_information
marion_brain.current_brain_capicty -= marion_brain.damage_per_new_information
marion_brain.current_brain_capicty -= marion_brain.damage_per_new_information
marion_brain.current_brain_capicty -= marion_brain.damage_per_new_information
marion_brain.current_brain_capicty -= marion_brain.damage_per_new_information

MessageBox.information(marion_brain.current_brain_capicty.)

MessageBox.information(marion_brain["current_brain_capicty"]) //autre façon d'appeler la même chose
}

// autre exemple

function my_func2() {
  
var arbre = {
  "tronc":{   // on est pas obligés de mettre les guillemets mais c'est plus clair
  "branche1":{
    "branche2":{
            "fruits":['pomme1','pomme2']
          },
          "branche3":{
            "fruits":['pomme3','pomme4']
          }
        }
      }
    }
    
    
    MessageBox.information(arbre.tronc.branche1.branche2.fruits[1]) //résultat pomme2
    
    // attention si on applique ensuite une opération sur une propriété du genre "tronc" = "pourri" alors on perd tout le reste de l'arborescence est remplacé et donc plus accessible
  }
  
  // Les Opérateurs
  
  function my_func2() {
    
  var my_var = true
  
  if(my_var){
    MessageBox.information("my_var est true")
  }else{
    MessageBox.information("my_var est false")
  
}
}

function my_func2() {
  
var HP = 100

var fire_ball_damage = 35
var fire_bolt_damage = 115

var attaque = fire_bolt_damage


HP -= fire_ball_damage

MessageBox.information("current health = "+HP)

if( HP > 0 ){
  
MessageBox.information("mon perso est vivant") 

}else{

MessageBox.information("mon perso est mort")
}


}

function my_func2() {
  
var HP = 100

var fire_ball_damage = 35
var fire_bolt_damage = 115

var attaque = fire_bolt_damage


HP -= fire_ball_damage

MessageBox.information("current health = "+HP)

if( HP > 0 ){
  
MessageBox.information("mon perso est vivant") 

}else{
  
MessageBox.information("mon perso est mort")
}


}


function my_func2() {
  
var HP = 100

var fire_ball_damage = 35
var fire_bolt_damage = 115
var attaque = fire_bolt_damage
var nb_cat_life = 1

HP -= attaque
MessageBox.information("current health = "+HP)


if( HP <= 0 ){
  MessageBox.information("le chat perd une vie")
  nb_cat_life -=1
}

if( nb_cat_life == 0 ){
  MessageBox.information("le chat est mort")
}

}


function my_func2() {
  
function addition(_A,_B){ // Alex met des underscore pour les distinguer d'une variable normale, mais c'est pas obligé > (_A,_B) c'est ça l'argument
var somme = _A + _B // déclarer la variation n'est pas nécessaire mais c'est plus lisible (on pourrait mettre direct return _A +_B)
return somme
}

MessageBox.information(10,10) //resultat : 20, les chiffres sont passés par la fonction addition
}

function my_func() {
  
var A = 30
var B = 30
var fruit = "pomme"



function manger(_aliment){
  return "miam j'ai mangé "+_aliment  
}

function bonjour(_nom,_prenom){
  return "bonjour je m'appelle "+_nom+" "+_prenom+" ! "
}


function insulte(){
  return "wesh t'es pas sympa"
}  

function affiche_a_et_b(_a,_b){
  MessageBox.information(_a+" "+_b)
}

//MessageBox.information(somme)
MessageBox.information(manger(fruit))
MessageBox.information(bonjour(fruit,"Dappy"))
MessageBox.information(insulte())
affiche_a_et_b("toto","tutu")

}
*/

//EXERCICE créer des fonctions qui comptent le nombre de mots et le nombre de lettres

function my_func2(){

 //VARIABLES
  var my_phrase = "the quick brown fox jumps over the lazy dog"


  //FONCTIONS
function count_the_words(_argument){  // réexplication : une fonction n'est qu'un outil transformatif, on n'appelle pas une variable en particulier, on nomme un "argument"
    var word_array = _argument.split(" ") //rappel mettre un coup de tab pour bien décaler la partie fonction (lisibilité)
    var nb_words = word_array.length
    return nb_words
}


function count_the_letters(_argument){
    var letters_array = _argument.split(" ").join("")
    var nb_letters = letters_array.length
    return nb_letters
}

function show_interesting_info_about(_phrase,_pretty_char){ //on peut faire une fonction pour les message box
  MessageBox.information(_pretty_char+" nb words "+count_the_words(_phrase)) //c'est ici qu'on remplace l'argument par la variable voulue
  MessageBox.information(_pretty_char+" "+count_the_letters(_phrase)) 
}

show_interesting_info_about(my_phrase,"****")  
  

}

//Travailler dans TB

/*

https://docs.toonboom.com/help/harmony-24/scripting/script/classnode.html

*/

function show_nb_of_pegs(){ // un script pour lister les nodes d'une scène

  var list_de_type_de_nodes = ["PEG"]
  var list_of_nodes = node.getNodes(list_de_type_de_nodes)
  var compiled_peg_list = list_of_nodes.join("\n")
  MessageBox.information("number of peg nodes : "+list_of_nodes.length)

  var first_peg = list_of_nodes[0]
  MessageBox.information(first_peg)
}

// LES FOR LOOPS

var i = 0

for (var 1 = 0 ; i<= 10 ; i++) // boucle qui compte jusqu'à 10

// Exemple de "mot secret" une for loop qui compose au fur et à mesure un mot secret à

function my_func(){

  var list_of_words = ["Carotte","Olive","Orange","Lotus"]
  var secret_word = ""

  for(var i = 0 ; i < list_of_words.length ; i++){
    var current_word = list_of_words[i]
    MessageBox.information(current_word)
    var first_letter = current_word[0]
    secret_word += first_letter
    MessageBox.information(secret_word)
  }

  
  MessageBox.information(secret_word)

}


function

var list_of_pegs = ["PEG"]