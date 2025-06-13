/*
function put_glasses_on_dog(){

    scene.beginUndoRedoAccum("putglasses_on_dog") ; // appelle le nom de la fonction sans ça un ctrl Z ds TB enlèvera chaque étape du script individuellement

    node.setTextAttr("Top/GLASSES-P","POSITION.X",0,-12)
    node.setTextAttr("Top/GLASSES-P","POSITION.Y",0,7)

    scene.endUndoRedoAccum() ;

}

ORDRE de FAB nouveau code
// 0 - doc prefences -- function ? 
// 1 - creer un repository pour le projet et cloner le repos en local 
// 2 - creer un bt sur toonboom
// 3 - schema de fonction 
// 4 - coder function par function 


function AL_do_something(){
    
scene.beginUndoRedoAccum("AL_do_something")

// declaration 

// execution 

scene.endUndoRedoAccum();

}


//THIS permet à un fonction de s'autoréférencer en elle-même (ce qu'on ne peut pas faire avec son propre nom)

    function Voiture(){
    this.niveau_de_carburant = 0
    this.demarer = function(_type){
        MessageBox.information("VROUm VROUM")
    }
    this.marque = "citroen "
    this.vitesse = 0
}


function PERSO(){
    this.attaquer = function(){
    }    
    this.sauter = function(){

    }
}


*/



function put_glasses_on_dog(){

    scene.beginUndoRedoAccum("putglasses_on_dog") ; // appelle le nom de la fonction sans ça un ctrl Z ds TB enlèvera chaque étape du script individuellement

    var   = "Top/Glasses-P"

    node.setTextAttr("Top/GLASSES-P","POSITION.X",0,-12)
    node.setTextAttr("Top/GLASSES-P","POSITION.Y",0,7)

    scene.endUndoRedoAccum() ;

}


// exemple d'un script RESET attributes

function reset_attributes(){

    scene.beginUndoRedoAccum("put_glasses_on_dog");

    var glass_peg = selection.selectedNode(0)

    var list_of_attr = ["POSITION.X","POSITION.Y","ROTATION.ANGLEZ","SCALE.SEPARATE"]

    var init_value_table = { 
        "POSITION.X":12,
        "POSITION.Y":12,
        "ROTATION.ANGLEZ":90,
        "SCALE.SEPARATE":"Y"
    }

    for(var i in list_of_attr){
        var attr_name = list_of_attr[i]
        var init_value = init_value_table[attr_name]
        MessageLog.trace(init_value)
        node.setTextAttr(glass_peg,attr_name,0,init_value)
    }
    
    scene.endUndoRedoAccum();
    
}

 
