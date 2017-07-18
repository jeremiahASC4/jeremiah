var terrakion = {"attack":129,
"hp":91,
"defense":90,
"ledgendary":true,
"type":["rock","fighting"]
};



var zekrom  = {"attack":150,
"defense":120,
"hp":100,
"ledgendary":true,
"name":zekrom,
"type":["dragon","electric"]
};

function Pokemon(name,hp,atk,def){
    this.name = name;
    this.hp = hp;
    this.attack =atk;
    this.defense = def;
}
var jigglypuff = new Pokemon("jigglypuff",120,80,110);
var dragon = new Pokemon("dragonite",91,134,95);
var opgod = new Pokemon("arceus",120,120,120);
var blade = new Pokemon("gallade",68,125,65);
