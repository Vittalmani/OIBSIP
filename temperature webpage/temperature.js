function convert(){
    var type;
    if (document.getElementById('celsius').checked){
    type = document.getElementById('fahrenheit').value;
    }
    var temp = document.getElementById("c").value;
    
    if(type == 'celsius')
    document.getElementById("result").innerHTML = temp*9 /5 +32;
    else
    document.getElementById("result").innerHTML = (temp - 32) * 5/9;
}