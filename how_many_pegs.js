/*
include("C:\Users\Travail-6\Documents\Formation_TB_scripting\FormationScriptingCaz\useful_functions.js")
//ici on peut appeler le chemin d'un autre script, attention de changer les \ par des / en utilisant ctrl+f
// comme ça on peut appeler la fonction inclue (attention de noter le nom de la fonction, elle ne sera pas proposée ici automatiquement)
//ça s'appelle un "include"


//Exercice :show how many pegs have rotation values different from 0

function show_how_many_pegs(){

    var array_of_peg = node.getNodes(["PEG"])
    MessageLog.trace(array_of_peg)

    var list_of_rotated_pegs = []

    for(var index in array_of_peg){

        var current_peg = array_of_peg[index]
        var peg_rotation = get_rotation(current_peg)
        MessageLog.trace(" Rotation of "+current_peg+" = "+peg_rotation)

        if(peg_rotation != 0){
            MessageLog.trace(current_peg+ " has rotation not equal to 0 ! ")
            list_of_rotated_pegs.push(current_peg)
        }

    }

    MessageBox.information(list_of_rotated_pegs.join("\n"))

}

function get_rotation(_peg){ //les fonctions sont même si elle sont notées après l'endroit où elles sont appelées (ici par exemple elle est appelée au dessus)

    var rotation = node.getTextAttr(_peg,frame.current(),"ROTATION.ANGLEZ")
    return rotation
}

>>>> le quizz d'Alex ! <<<< https://github.com/alarigger/AL_ScriptingCourseHelp

*/

//SET ROTATION

//https://docs.toonboom.com/help/harmony-24/scripting/script/classnode.html ()

function rotate_peg_90_degrees (_peg){
var selected_node = selection.selectedNode(0) //selection. c'est un outil TB pour indiquer quel node est sélectionné dans la nodeview on pourrait aussi mettre selectedNodes()[0] (ça choisit le premier dans un array de nodes selectionés)
    MessageBox.information(selected_node)


}


function set_rotation(_peg,_angle){
    node.setTextAttr(_peg,"ROTATION.ANGLEZ",frame.current()= "90")
}


    