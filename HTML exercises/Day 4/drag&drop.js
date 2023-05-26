function drag(input)
{
    input.dataTransfer.setData("text", input.target.id);
}

function drop(input2)
{
    var capture = input2.dataTransfer.getData("text");
    input2.target.appendChild(document.getElementById(capture));
    alert("image has been dropped");
}

function allowDrop(input3)
{
    input3.preventDefault();
}

function storeData()
{
    var capture = document.getElementById("data").value;
    localStorage.setItem("Previousname",capture);
}

function retriveData()
{
    document.getElementById("output").innerHTML = localStorage.getItem("Previousname");
    alert("you've retrived it");
}



