var charizard = {"attack":"blaze" ,
"hp":266,
"ledgendary":false,
"types":["fire", "flying"]
};
console.log(charizard.hp); 

charizard.hp =300;

console.log(charizard.hp);

var charizard = {"attack":"blaze" ,
"hp":266,
"ledgendary":false,
"types":["fire", "flying"]
};


function pokemon(hitpoints){
    this.hp =hitpoints;
}

var charizard = pokemon(266);


function Superhero(realName,power){
    this.realName = realName;
    this.power =power
}

var superman = new Superhero ("Kal-el", "mad OP");
