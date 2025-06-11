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