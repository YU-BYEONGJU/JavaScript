function outter() {
    var title = 'coding everybody';
    return function() {
        alert(title);
    }
}

var inner = outter();
inner();