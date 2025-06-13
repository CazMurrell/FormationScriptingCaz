/*
//exemple recherche de mot : 
    var phrase = "le chat est gris"

    MessageBox.information(phrase)
    MessageBox.information(has_word(phrase,"chien"))
    MessageBox.information(where_is_word(phrase,"chat"))
    MessageBox.information(where_is_word(phrase,"chien"))
    
    
}

function has_word(_phrase,_searched_word){
    var words = _phrase.split(" ")
    for (var i in words){
        var current_word = words[i]
        if(current_word==_searched_word){
            return true
        }
    }
    MessageBox.information(_searched_word+" was not found ! ")
    return false
}

function where_is_word(_phrase,_searched_word){
    var words = _phrase.split(" ")
    for (var i in words){
        var current_word = words[i]
        if(current_word==_searched_word){
            return parseInt(i)+1
        }
    }
    return -1 // en langage conventionel ça veut dire qu'il n'y est pas
}
*/

// EXERCICE : GLASSES ON DOG



//ici c'est la partie qui trouve les coordonnées dans le nom du drawing


/*
function glasses(){
    var node_name = "GLASSES_X12_Y7"
    var coords = find_coord_in_string(node_name)
    MessageBox.information(JSON.stringify(coords))
}

function is_number(il faudrait mettre un argument ici){
    if("0123456789".indexOf(second_char)==-1){
        return false
    }
    return true
}


"POSITION.X"
"POSITION.Y"

*/
function glasses(){ 
    var wanted_coords = get_wanted_coords()
    if(wanted_coords==false){
        return 
    }
    var glass_peg = get_glass_peg()
    move_peg(glass_peg,wanted_coords)
    
    function get_glass_peg(){
        var all_peg = node.getNodes(["PEG"])
        for(var i in all_peg){
            var current = all_peg[i]
            if((current.indexOf("GLASSES")!=-1 && current.indexOf("-P")!=-1)==true){
                return current
            }
        }
        return false
    }
    
    function move_peg(_peg,_coord){
        node.setTextAttr(_peg,"POSITION.X",0,-_coord.x)
        node.setTextAttr(_peg,"POSITION.Y",0,_coord.y)
    }
    
    function get_wanted_coords(){
        var all_read = node.getNodes(["READ"])
        var coords = false
        for(var i in all_read){
            var current_read = all_read[i]
            if((current_read.indexOf("GLASSES")!=-1 && current_read.indexOf("X")!=-1)==false){
                continue
            }
            coords = find_coord_in_string(current_read)
            return coords
        }
        return false
    }
    
    
    function is_coord(_string){
        var frist_char = _string[0]
        if( (frist_char=="Y" || frist_char=="X") == false ){
            return false
        }
        var split_first_char = _string.split(frist_char)
        var after_first = split_first_char[1]
        if(isNaN(parseInt(after_first))==true){
            return false
        }
        return true
    }
    
    function extract_number(_string){
        var frist_char = _string[0]
        var split_first_char = _string.split(frist_char)
        var after_first = split_first_char[1]
        return parseInt(after_first)
    }
    
    function find_coord_in_string(_string){
        
        var split_underscore = _string.split("_") // ["GLASSES","X12","Y7"]
        var coords ={
            "x":0,
            "y":0
        }
        
        for ( var i in split_underscore){
            var current_split = split_underscore[i]
            if(is_coord(current_split)==false){
                continue
            }
            var frist_char = current_split[0]
            var number = extract_number(current_split)
            if(frist_char=="X"){
                coords.x = number
                continue
            }        
            if(frist_char=="Y"){
                coords.y = number
                continue            
            }
        }
        
        return coords
        
    }
}
    