function output(){
    var jsonfile = document.getElementById('json_file_name').value;
    var text = document.getElementById('text').value;

    var out = text && text.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(s => s.toLowerCase())
            .join('_');

    

    document.getElementById('snake_output').innerHTML = out;
    document.getElementById('snake_output2').innerHTML = out;
    document.getElementById('filename').innerHTML = jsonfile;
    document.getElementById('text_input').innerHTML = text;
    
    var invited = `"`;
}
function copyjson(){
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value); 
}