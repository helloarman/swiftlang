function output(){
    var json_file_name = document.getElementById('json_file_name').value;
    var text = document.getElementById('text').value;

    var out = text && text.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(s => s.toLowerCase())
            .join('_');

    var json_output_text = `"${out}" => "${text}"`
    var blade_output_text = `{{ ___('${json_file_name}.${out}') }}`

    document.getElementById('json_text_for_output').innerHTML = json_output_text;
    document.getElementById('blade_text_for_output').innerHTML = blade_output_text;
}


function copyjson(){
    var json_file_name = document.getElementById('json_file_name').value;
    var text = document.getElementById('text').value;

    var out = text && text.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(s => s.toLowerCase())
            .join('_');

    var json_output_text = `"${out}" => "${text}"`

    var copyText = json_output_text;
    
    navigator.clipboard.writeText(copyText);
}

function copyblade(){
    var json_file_name = document.getElementById('json_file_name').value;
    var text = document.getElementById('text').value;

    var out = text && text.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(s => s.toLowerCase())
            .join('_');

    var blade_output_text = `{{ ___('${json_file_name}.${out}') }}`

    var copyText = blade_output_text;
    
    navigator.clipboard.writeText(copyText);
}