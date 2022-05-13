let control = document.getElementById("your-files");
let arrayForm = new Array();
let currentColor = "#444444"; 

let mainCont = document.getElementById("main-container");
let conatainerForm = document.createElement('div');
conatainerForm.className = "conatainerForm";
mainCont.append(conatainerForm);

let idNumber = 0;
function idFormGenerator(){
    let id = "form" + idNumber;
    idNumber++;
    return id;
}

control.addEventListener("input", function(event) {
    
let form = document.createElement('form');
arrayForm.push(form);
  form.className = "main__form";
  form.setAttribute("id", idFormGenerator());
  conatainerForm.append(form);
    
    files = control.files;
    let reader = new FileReader();

  reader.readAsText(files[0]);

  let fileRes;
  let obj;

 reader.onload = function() {
    fileRes = reader.result;
    obj = JSON.parse(fileRes);


 //property name
    let h1 = document.createElement('h1');
    h1.className = "heading-form";
    h1.innerHTML = obj.name;
    form.append(h1);

if(obj.fields){
    inputsDraw(obj.fields, form);
}
if(obj.references){
    chekboxDraw(obj.references, form);
}
if(obj.buttons){
    buttonsDraw(obj.buttons, form);
}

  };
  document.querySelector('input[type=file]').value = '';

});

//property fields

function inputsDraw(fields, form) {

    for (let i = 0; i < fields.length; i++) {

        if (fields[i].label){
        let lable = document.createElement('lable');
        lable.className = "lable-fields-form";
        lable.innerHTML = fields[i].label;
        form.append(lable); 
        }
        if (fields[i].input.type == "text"){
            let input = document.createElement('input');
            input.className = "input-fields-form";
            input.type = fields[i].input.type;
            input.required = fields[i].input.required;
            if (fields[i].input.placeholder){
                input.placeholder = fields[i].input.placeholder;
            }
            form.append(input);
        }
        if (fields[i].input.type == "number"){
            let input = document.createElement('input');
            input.className = "input-fields-form";
            input.type = fields[i].input.type;
            input.required = fields[i].input.required;
            if (fields[i].input.placeholder){
                input.placeholder = fields[i].input.placeholder;
            }
            form.append(input);
        }

        if (fields[i].input.type == "email"){
            let input = document.createElement('input');
            input.className = "input-fields-form";
            input.type = fields[i].input.type;
            input.required = fields[i].input.required;
            if (fields[i].input.placeholder){
                input.placeholder = fields[i].input.placeholder;
            }
            form.append(input);
        }
        if (fields[i].input.type == "technology"){

            let contTech = document.createElement('div');
            contTech.className = "contTech";
            form.append(contTech);

            for(let j = 0; j < fields[i].input.technologies.length; j++){
                let labelTech = document.createElement('label');
                labelTech.className = "label-checkbox-technology";
                labelTech.innerHTML = fields[i].input.technologies[j];
                contTech.append(labelTech);

                let input = document.createElement('input');
                input.className = "input-fields-form";
                input.type = "checkbox";
                input.multiple = fields[i].input.multiple;
                labelTech.append(input);
            }
                        
        }
         if (fields[i].input.type == "file"){
            let input = document.createElement('input');
            input.className = "input-file-fields-form";
            input.type = fields[i].input.type;
            input.required = fields[i].input.required;
            if (fields[i].input.multiple){
                input.multiple = fields[i].input.multiple;
            }
            if (fields[i].input.filetype){
                let acceptedFiles = "";
                for(let j=0; j < fields[i].input.filetype.length; j++){
                    acceptedFiles += "." + fields[i].input.filetype[j] + ",";
                }
                acceptedFiles = acceptedFiles.slice(0, -1);
                input.accept = acceptedFiles;
            }
           
            form.append(input);
        }

        if (fields[i].input.type == "textarea"){
            let textarea = document.createElement('textarea');
            textarea.className = "textarea-fields-form";
            textarea.required = fields[i].input.required;
            form.append(textarea);
        }

        if (fields[i].input.type == "date"){
            let input = document.createElement('input');
            input.className = "input-fields-form";
            input.type = fields[i].input.type;
            input.required = fields[i].input.required;
            form.append(input);
        }

        if (fields[i].input.type == "password"){
            let input = document.createElement('input');
            input.className = "input-fields-form";
            input.type = fields[i].input.type;
            input.required = fields[i].input.required;
            if (fields[i].input.placeholder){
                input.placeholder = fields[i].input.placeholder;
            }
            form.append(input);
        }

        if (fields[i].input.type == "checkbox"){
            let input = document.createElement('input');
            input.className = "input-fields-form";
            input.setAttribute('id', 'checkbox');
            input.type = fields[i].input.type;
            input.checked = fields[i].input.checked;
            form.append(input);

            let checkboxClick = document.querySelector("#checkbox");
            let formMain = document.querySelector(".conatainerForm");

            checkboxClick.addEventListener("click", function() {
            formMain.style.color = currentColor;
              });
        }
        if (fields[i].input.type == "color"){

            contColor = document.createElement('div');
            contColor.className = "contColor";
            form.append(contColor);

            let input = document.createElement('input');
            input.className = "input-colors-fields-form";
            input.setAttribute('id', 'currentColor')
            input.type = fields[i].input.type;
            input.value = fields[i].input.colors[0];
            input.setAttribute('list','selectColor');
            contColor.append(input);

            input.addEventListener("input", function() {
                currentColor = input.value;
            });
          
            datalist = document.createElement('datalist');
            datalist.setAttribute('id', 'selectColor');
            contColor.append(datalist);

            for(let j = 0; j < fields[i].input.colors.length; j++){
                let option = document.createElement('option');
                option.innerHTML = fields[i].input.colors[j];
                datalist.append(option);
            }  
              }
    }
}
  
// property references

function chekboxDraw(references, form) {

    let contRef = document.createElement('div');
    contRef.className = "contRef";
    form.append(contRef);
  
    if (references[0].input && references.length == 2){

        let lableCheckboxRef = document.createElement('label');
        lableCheckboxRef.className = "lableCheckboxRef-form";
        lableCheckboxRef.innerHTML = references[1]['text without ref'];
        contRef.append(lableCheckboxRef); 

        let checkbox = document.createElement('input');
        checkbox.className = "checkbox-references-form";
        checkbox.type = references[0].input.type;
        checkbox.required = references[0].input.required;
        checkbox.checked = references[0].input.checked;
        lableCheckboxRef.append(checkbox); 
    
    if (references[1].text){
        let textRef = document.createElement('a');
        textRef.className = "ref-text";
        textRef.innerHTML = references[1].text;
        textRef.href = references[1].ref;
        contRef.append(textRef); 
    }
    }

    if (!references[0].input){
        for (let i=0; i < references.length; i++){
            if (references[i]['text without ref']){
             let textWref = document.createElement('div');
             textWref.className = "textWithoutRef-form";
             textWref.innerHTML = references[i]['text without ref'];
             contRef.append(textWref); 
             }
            if (references[i].text){
             let textRef = document.createElement('a');
             textRef.className = "ref-text";
             textRef.innerHTML = references[i].text;
             textRef.href = references[i].ref;
             contRef.append(textRef); 
            }
    }
    }
}

// property buttons

function buttonsDraw(buttons, form){
    for (let i = 0; i < buttons.length; i++) {
        let button = document.createElement('button');
        button.className = "button-fields-form";
        button.innerHTML = buttons[i].text;
        form.append(button); 
    }
}

let btnRemoveForm = document.querySelector("#btnRemoveForm"); 

btnRemoveForm.addEventListener("click", function() {
   document.querySelector('input[type=file]').value = '';

   for (let i = 0; i < arrayForm.length; i++){
    arrayForm[i].remove();
   }
   
});
