var Hp = 100;
var gold = 0;
var numDefeated = 0;

function updateStats(){
    $("#stats").text("Hp: " + Hp + " // Gold:" + gold + " // Ogres Slain: " + numDefeated);
}

function attack(){
    if (Hp > 0) {
        if(Math.random() * )
    }
}

function setup(){
    $("body").append(
        "<h1>Welcome to Ogre Fighter v.1.0<h1>"
        );
        // Stats Section
        $("body").append(
            "<div><h1>STATS</h1><p id= 'stats'></p></div>"
            );
            // Attack Button
            $("body").append(
                "<button unclick='attack()'>attack the Ogre!</button>"
                );
                // Container for Ogre Image
                $("body").append(
                    "<div id='ogres'></div>"
                    );
                    updateStats();
                }
                // 1000: define the attack() function
                $(document).ready(setup);

