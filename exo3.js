function sampleDialog(){ // imported de la doc TB d'ici https://docs.toonboom.com/help/harmony-24/scripting/script/classDialog.html et modifié

/*
{
    var my_dialog = new Dialog(); //nDialog crée une boîte de dialogue
    my_dialog.title = "ici on change le titre".toUpperCase(); //le touppercase c'est juste pour exemple pour pas oublier qu'il y a plein d'options

    // ajouter un input line edit (dans la doc TB il n't a pas les parenthèses)
    var input1 = new LineEdit(); //lineEdit c'est pour input du texte
    input1.label = "Sample Line Edit";
    my_dialog.add( input1 );
    //on peut multiplier cette partie pour ajouter une ligne d'input


    var input2 = new NumberEdit(); //pour les chiffres
    input2.label = "number";
    my_dialog.add( input2 );

  if ( my_dialog.exec()){ // cette partie exécute my_dialog, sinon ça marche pas

    //après que le user aie appuyé sur OK


    var user_text = input1.text // pour les textes
    var user_number = input2.value; // pour les chiffres

    MessageLog.trace("The input text is " + user_number + ".");
    MessageBox.information (user_text)
    MessageBox.information (user_number)
    
    MessageBox.information (user_text[user_number-1])
    MessageBox.information (selected_node)


  }
}
*/

    var my_dialog = new Dialog(); //nDialog crée une boîte de dialogue
    my_dialog.title = "ici on change le titre".toUpperCase(); //le touppercase c'est juste pour exemple pour pas oublier qu'il y a plein d'options

    // ajouter un input line edit (dans la doc TB il n't a pas les parenthèses)
    var input1 = new LineEdit(); //lineEdit c'est pour input du texte
    input1.label = "Sample Line Edit";
    my_dialog.add( input1 );
    //on peut multiplier cette partie pour ajouter une ligne d'input


    var input2 = new NumberEdit(); //pour les chiffres
    input2.label = "number";
    my_dialog.add( input2 );

  if ( my_dialog.exec()){ // cette partie exécute my_dialog, sinon ça marche pas

    var user_text = input1.text // pour les textes
    var user_number = input2.value; // pour les chiffres

    //après que le user aie appuyé sur OK

    var selected_node = selection.selectedNode(0)
    var selected_node_split = selected_node.split("/")
    var node_name = selected_node_split [selected_node_split.length-1]

    MessageBox.information (selected_node)
    MessageBox.information (user_text + " : " + node_name)

    //rename node

    // https://docs.toonboom.com/help/harmony-24/scripting/script/classnode.html#a064bfa68c4415a5bc0506ee169d86a73
    

    var renamed_node = node.rename(selected_node, node_name+user_text) 
    
    if (renamed_node == true){
        MessageBox.information ("node succesfully renamed")
    }


  }
}

function exo_input()
{

    // ajoute une string donné par l'utilisateur au nom du node selectioné et qui l'affiche 


  var my_dialog = new Dialog();
  my_dialog.title = "Show the letter"

  // ajouter un input line edit 
  var input1 = new LineEdit;
  input1.label = "mots";
  my_dialog.add( input1 )

  
  if(my_dialog.exec()){

    var selected_nodes = selection.selectedNodes()
    // aprs que le user a appuyé sur OK 
    var user_text = input1.text

    for(var i in selected_nodes){
        //add_suffixe(selected_nodes[i],user_text)
        var padding = 100
        var new_x = i*100
        var new_y = 0
        node.setCoord(selected_nodes[i],new_x,new_y)
    }

  }


}


function add_suffixe(_node_path,_suffixe){
    var node_path = _node_path
    var adress_split = node_path.split("/")
    var node_name = adress_split[adress_split.length-1]
    var new_name = _suffixe+"_"+node_name+"_"+_suffixe
    var new_path = "Top/"+new_name
    node.rename(node_path,new_name)

}

// les RANDOM 

var new_x = Math.random()*200 //done un chiffre de 0 à 200
var random_index = Math.round(Math.random()*(selected_nodes.length-1)) //pour arrondir le chiffre puis donner un chiffre entre 0 et la longueur max de l'array (du chiffre à un numéro d'array qui compte à partir de zéro)

//CREER UN PEG

// https://docs.toonboom.com/help/harmony-24/scripting/script/classnode.html#a1ba4b761c5527117a403fb2f4d0e977e

node.add("Top",user_text,"PEG",new_x,new_y,0); //pour exemple

