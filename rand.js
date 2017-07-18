

function rand(upperBd){
     return Math.floor(Math.random()*upperBd);

  }

    var lunches = ["chinese", "craibbean", "mexican", "italian", "pizza"];

    var lunch_today = lunches[rand(lunches.length)];

        console.log(lunch_today);

