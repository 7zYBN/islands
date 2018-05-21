
//засовывать каждую строку в отдельный массив и сравнивать позиции единиц в этих
//одномерных массивах. внутри самого одномерного массива смотреть число рядомстоящих
//единиц. потом в двух соседних массивах сверять позиции столбцов. если есть хоть
//одно совпадение, то не увеличивать кол-во островов.если отличаются позиции, то 
//делать +1 остов

var n = prompt("n");
var m = prompt("m");
document.getElementById("container").style['grid-template-columns'] = "repeat(" + n + ", 1fr)";
document.getElementById("container").style['grid-template-row'] = "repeat(" + m + ", 1fr)";
for (var j = 1; j <= m; j++){
    for (var i = 1; i <= n; i++){
    var new_div = document.createElement("div");
    var new_span = document.createElement("span");
    new_span.appendChild(document.createTextNode(Math.floor(Math.random() * 2)));
    new_div.appendChild(new_span);
    if (new_span.innerHTML == "1"){
        new_div.style['background'] = "green";
    }
    else{
        new_div.style['background'] = "blue";
    }
    document.getElementById("container").appendChild(new_div);
    }
}

