function whoisPaying(names){
    var numberOfpeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfpeople);
    var randomPerson = names[randomPersonPosition];
    
    return randomPerson + "is going to buy lunch today";
}