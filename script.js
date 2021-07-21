const figure = [
    ["Base", "Lado 1", "Lado2", "Altura"],
    ["Radio"],
    ["Lado"]
]

const figureValues = {
    Triangle:0,
    Circle:1,
    Square:2
};

function addingTags(indexID) {
    amount = figure[indexID].length
    var formulario = document.getElementById("containerId");
    var i = 0;

    try {
        var formInputs = document.getElementsByClassName("main__inputs").length
        while (formInputs != 0) {
            formulario.removeChild(formulario.lastElementChild);
            formInputs = formInputs - 1;
        }
    }

    finally {
        while (i < amount){
            var elementLabel = document.createElement('label');
            var element = document.createElement('input');
            var labelvalue = figure[indexID][i]


            elementLabel.setAttribute('for',labelvalue);
            elementLabel.setAttribute('class','main__inputs');
            elementLabel.innerHTML = labelvalue;
            formulario.appendChild(elementLabel);

            element.setAttribute('type','text');
            element.setAttribute('class',labelvalue + ' main__inputs');
            formulario.appendChild(element);
            i++;
        }
    }



}



var figureSelected = document.getElementById('figure');
addingTags(figureValues[figureSelected.value]);

document.getElementById('figure').onchange = function () {
    // access text property of selected option
    figureSelected.value = figureSelected.options[figureSelected.selectedIndex].text;
    addingTags(figureValues[figureSelected.value]);
}