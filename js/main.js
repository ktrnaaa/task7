



const elGenderList = document.getElementById("gender")
const elFemaleAnswer = document.querySelector(".femaleanswer")
const elMaleAnswer = document.getElementById("year")
const elBTN = document.querySelector(".btn")
const elHello = document.querySelector(".userHello")

elMaleAnswer.style.display = "none";
elFemaleAnswer.style.display = "none"; 

elGenderList.addEventListener('change', (ev) => {

    let GenderChoose = ev.target.value;



    if (GenderChoose === 'female'){

        elFemaleAnswer.style.display = "block";

    }
    else {
        elMaleAnswer.style.display = "block";
        elFemaleAnswer.style.display = "none"; 

    }
})



for (let year = 1920; year <= 2023; year++) {


    let options = document.createElement("OPTION");
    document.getElementById("year").appendChild(options).innerHTML = year;


  }

  elBTN.addEventListener('click', () =>{

    function takeName(){
        let input = document.querySelector('input')
        console.log(input.value)
        elHello.innerText = 'Вітаю,' + input.value + '!'
    }
    takeName();
})
