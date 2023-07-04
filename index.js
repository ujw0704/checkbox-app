// const  form =document.querySelector("form");
// const checkbox = document.querySelectorAll("input [type-checkbox]");

// const massage = document.querySelector("#massage")
// let output = " ";
// form.onsubmit= function(e){
//     e.preventDefault()
//     // console.log("hello")
//     for(let i =0;i<checkbox.length;i++){
//         console.log("hello")
//         if(checkbox[i].checked){
//             output =checkbox[i].value;

//         }
//         if(output.length===0)
//             massage.innerHTML ="no hobbies is selected"

//         else
//             massage .innerHTML = "selected hobbies"+output


//     }


// }

const checkboxes = document.querySelectorAll("input[type=checkbox]");
const form = document.querySelector("form");
const messageDiv = document.querySelector("#message");
let output = "";


form.onsubmit = function (e) {
    e.preventDefault()
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            output = checkboxes[i].value
        }
    }
    if (output.length === 0)
        messageDiv.innerHTML = " no hobbies"
    else
        messageDiv.innerHTML = "hobbies selected :" + output;
}