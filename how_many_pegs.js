function my_func(){

    var list_of_nodes = ["PEG"]
    var list_of_peg_nodes = node.getNodes(list_of_nodes)
    var compiled_peg_list = list_of_peg_nodes.join("\n")


    MessageBox.information(list_of_peg_nodes)
    MessageBox.information("number of peg nodes : "+compiled_peg_list.length)

}

