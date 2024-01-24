var enterPress = document.getElementById("body");
enterPress.onkeyup = function(runOnKeyPress){
    if(runOnKeyPress.keyCode == 13){
      output();
    }
}

// Condition For Get Prefix From Local Storage 
if(localStorage.getItem('prefixvalue') == null){
    var prefixvalue = "__(";
}else{
    var prefixvalue = localStorage.getItem('prefixvalue');
}

//global variable
let json_list = [];
console.log(json_list);
let json_output_text;

// Selected Prefix 
if( prefixvalue == "__("){
    document.getElementById("prefix1").checked = true;
}else if(prefixvalue == "___("){
    document.getElementById("prefix2").checked = true;
}else if(prefixvalue == "trans("){
    document.getElementById("prefix3").checked = true;
}else if(prefixvalue == "_trans("){
    document.getElementById("prefix4").checked = true;
}


function inputProcess(){
    // Text
    var json_file_name = document.getElementById('json_file_name').value;
    var text = document.getElementById('text').value;

    // Make Snake Case Text 
    var out = text && text.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(s => s.toLowerCase())
            .join('_');
    
    return {out, text, json_file_name};
}

function output(){
    var processedText = inputProcess();
    
    // Restore Copied File For JSON
    var json_copy = document.getElementById('json_copy_btn');
    json_copy.classList.remove("button-copied");
    document.getElementById('json_copy_btn').innerHTML = `Copy JSON <i class="fa-regular fa-copy"></i>`;
    // Restore Copied File For BLADE
    var json_copy = document.getElementById('blade_copy_btn');
    json_copy.classList.remove("button-copied");
    document.getElementById('blade_copy_btn').innerHTML = `Copy Blade <i class="fa-regular fa-copy"></i>`;

    var hasFileName = processedText.json_file_name == '' ? '' : '.';
    json_output_text = `"${processedText.out}" : "${processedText.text}"`;
    var blade_output_text = `{{ ${prefixvalue}'${processedText.json_file_name}${hasFileName}${processedText.out}') }}`;

    document.getElementById('json_text_for_output').innerHTML = json_output_text;
    document.getElementById('blade_text_for_output').innerHTML = blade_output_text;

    json_list.push(json_output_text);
    multilineJson();
}

function copyjson(){
    var processedText = inputProcess();

    var json_output_text = `"${processedText.out}" : "${processedText.text}"`

    var copyText = json_output_text;

    // After Copy 
    var json_copy = document.getElementById('json_copy_btn');
    json_copy.classList.add("button-copied");
    document.getElementById('json_copy_btn').innerHTML = "JSON Copied!"
    
    navigator.clipboard.writeText(copyText);
}

function copyblade(){
    var processedText = inputProcess();
    var hasFileName = processedText.json_file_name == '' ? '' : '.';

    var blade_output_text = `{{ ${prefixvalue}'${processedText.json_file_name}${hasFileName}${processedText.out}') }}`

    var copyText = blade_output_text;

    // After Copy 
    var json_copy = document.getElementById('blade_copy_btn');
    json_copy.classList.add("button-copied");
    document.getElementById('blade_copy_btn').innerHTML = "Blade Copied!"
    
    navigator.clipboard.writeText(copyText);
}

function multilineJson(){
    let json_line = json_list.map( text => `<li>${json_list}</li>`);
    document.getElementById('Multiple_blade_text_for_output').innerHTML = json_line;
}

function savesettings(){
    var prefix = document.getElementsByName("prefix");
    var i;
    for(i=0; i<=prefix.length; i++){
        if(prefix[i].checked){
            prefixvalue=prefix[i].value;
            localStorage.setItem('prefixvalue', prefixvalue);
            $('#settingsModal').modal('hide');
        }
    }
}

