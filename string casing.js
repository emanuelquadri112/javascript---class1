var yourname = prompt("what is your name");
var firstletter = yourname.slice(0,1);
var uppercasefirstletter = firstletter.toUpperCase();
var remaingletters = yourname.slice(1,yourname.length);
var capitalisedname = uppercasefirstletter + remaingletters;
alert ("hello " + capitalisedname);
 