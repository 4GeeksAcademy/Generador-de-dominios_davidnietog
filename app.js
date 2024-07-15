function generador() {
    var palabras = {
         pronoun: [ "The", "Your", "Our", "Mine", "They"],
         adj: [ "big", "great", "amazing", "Illegal", "Large", "Obese", "Hot"],
         noun: [ "Advice", "Website", "Racoon", "Lion", "Band", "Newspapper", "Console", "Call-center", "Assistant", "Bike"],
    }
    var ejemplos = []
        
        for(p = 0; p < palabras.pronoun.length; p++){
            for(a = 0; a < palabras.adj.length; a++){
                for(n = 0; n < palabras.noun.length; n++){
                   ejemplos.push(palabras.pronoun[p] + palabras.adj[a] + palabras.noun[n] + ".com")
                 }
            }
        }
        return(ejemplos);
    }
    
    console.log(generador);
  