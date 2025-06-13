
-------------------- A METTRE DANS UN FICHIER.html 

<html>

<body>
    <div>
        <div id="titre_page"> ON EST SORTI DE TOONBOOM !  </div>
    </div>
    <button onclick="generate_accreditation();">
        GET ANNECY ACCREDITATION 
    </button>
</body>

<script>

    var text = ""
    console.log("UN MESSAGE SECRET VENANT DU LOG ?  peut être... très tèrs mystèrieux ")
    

    function generate_accreditation(){
        console.log("VOILA l'accredition  ")
        document.getElementById("titre_page").innerHTML = "VOILA l'accredition  "
        
    }

    

</script>


</html>


