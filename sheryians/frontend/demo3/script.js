

// Higher oerder functions -> aisa fnc jo accept kr le ek aur fnc ya fir vo return kare ek aur fnc.
// parameter mei ek function accept kr raha hai.
function abcd(val){

}
abcd(function(){})




// constructor
// normal fnc jisme 'this' ka istemaal ho & aap fnc ko call karte waqt new keyboard use karein
// jab apke pas aisa koi bhi mauka ho ke aapko ek jaisi properties wale bahout saare elements banane hai uss waqt aap constructor fnc use kr sakte ho.
function sanchaOfBiscuit(){
    this.width = 12;
    this.height = 22;
    this.color = "green";
    this.taste = "sugary";
}
var bis1 = new sanchaOfBiscuit();
var bis2 = new sanchaOfBiscuit();
var bis3 = new sanchaOfBiscuit();








