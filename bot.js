const Eris = require("eris");
var Acura = new Eris("token");
Acura.on("ready", () => {
    console.log("tm");
    onstart();
});
Acura = "461301625856983041";
nick = "ScreaM ,";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
varAcura 2 = ' ';
  var Acura =   setInterval(function(){

     if (i == v1.length){
     clearInterval(Acura);
     onstart()
      return;
     }
     var v2 = v1[i];
   Acura  += v2;
    Acura.editNickname(Acura);
 
        i++;

     }, 1000);
}
Acura.connect();
