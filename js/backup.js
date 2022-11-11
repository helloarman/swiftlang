function inputProcess(){
    var json_file_name = document.getElementById('json_file_name').value;
    var text = document.getElementById('text').value;

    // Restore Copied File For JSON
    var json_copy = document.getElementById('json_copy_btn');
    json_copy.classList.remove("button-copied");
    document.getElementById('json_copy_btn').innerHTML = `Copy JSON <i class="fa-regular fa-copy"></i>`;
    // Restore Copied File For BLADE
    var json_copy = document.getElementById('blade_copy_btn');
    json_copy.classList.remove("button-copied");
    document.getElementById('blade_copy_btn').innerHTML = `Copy Blade <i class="fa-regular fa-copy"></i>`;

    var out = text && text.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(s => s.toLowerCase())
            .join('_');
    
    return [out, text, json_file_name];
}

function output(){
    var processedText = inputProcess();

    var json_output_text = `"${processedText[0]}" : "${processedText[1]}"`;
    var blade_output_text = `{{ ___('${processedText[2]}.${processedText[0]}') }}`;

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

    var json_output_text = `"${out}" : "${text}"`

    var copyText = json_output_text;

    // After Copy 
    var json_copy = document.getElementById('json_copy_btn');
    json_copy.classList.add("button-copied");
    document.getElementById('json_copy_btn').innerHTML = "JSON Copied!"
    
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

    // After Copy 
    var json_copy = document.getElementById('blade_copy_btn');
    json_copy.classList.add("button-copied");
    document.getElementById('blade_copy_btn').innerHTML = "JSON Copied!"
    
    navigator.clipboard.writeText(copyText);
}
