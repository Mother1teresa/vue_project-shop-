var billingNode = document.getElementById("billing");
var shippingNode = document.getElementById("shipping");
var returnNode = document.getElementById("return");
var zoneNode = document.getElementById("zone");
var questionNode = document.getElementById("question");
var question2Node = document.getElementById("question2");

function billing() {
    zoneNode.style.display = "inline-block";
    billingNode.style.backgroundColor = "#008542"
    billingNode.style.color = "white";
}


billingNode.addEventListener("click", function () {
    billing()
    questionNode.style.display = "none";
    question2Node.style.display = "none";
    shippingNode.style.backgroundColor = "rgba(255, 249, 239, 1)"
    returnNode.style.backgroundColor = "rgba(255, 249, 239, 1)";
    shippingNode.style.color = "black";
    returnNode.style.color = "black";
})

function shipping() {
    questionNode.style.display = "inline-block";
    shippingNode.style.backgroundColor = "#008542";
    shippingNode.style.color = "white";
}

shippingNode.addEventListener("click", function () {
    shipping()
    zoneNode.style.display = "none";
    question2Node.style.display = "none";
    billingNode.style.backgroundColor = "rgba(255, 249, 239, 1)"
    returnNode.style.backgroundColor = "rgba(255, 249, 239, 1)";
    billingNode.style.color = "black";
    returnNode.style.color = "black";
})

function return0() {
    question2Node.style.display = "inline-block";
    returnNode.style.backgroundColor = "#008542";
    returnNode.style.color = "white";
}

returnNode.addEventListener("click", function () {
    return0()
    questionNode.style.display = "none";
    zoneNode.style.display = "none";
    billingNode.style.backgroundColor = "rgba(255, 249, 239, 1)";
    shippingNode.style.backgroundColor = "rgba(255, 249, 239, 1)";
    shippingNode.style.color = "black";
    billingNode.style.color = "black";
})
