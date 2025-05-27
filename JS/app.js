let values = ["A","Q","K","J","2","3","4","5","6","7","8","9","10"];
let suites = ["C", "D", "S","H"];
function makeDeck(values, suites){
    let deck = [];
    for (let i=0; i<values.length; i++){
        for (let j=0; j<suites.length; j++)
            
            deck.push(values[i] +"-" + suites[j]);
    } 
    console.log(deck);
}
makeDeck(values, suites);
