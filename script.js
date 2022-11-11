const nameOnCard = document.querySelector(".card-holder-display");
const cardholder = document.querySelector(".cardholder-name");
const numOnCard = document.querySelector(".card-number-display");
const thankYou = document.getElementById("thank-you-header");
const cardnumber = document.querySelector(".card-number");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const expMM = document.querySelector(".expiry-month-display");
const expYY = document.querySelector(".expiry-year-display");
const cvc = document.getElementById("cvc");
const cvcDisplay = document.querySelector(".cvc-display");
const errorMsg = document.getElementById("errorMsg");
const expiryErrorMsg = document.getElementById("expiry-error");
const submit = document.getElementById("submit");
const thankYouSection = document.querySelector(".thank-you");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("myForm");


function inputName()
{

    nameOnCard.innerHTML = cardholder.value;
    console.log(cardholder.value)
    thankYou.innerHTML = `Thank You ${cardholder.value}`;
    if (nameOnCard.innerHTML == "") {
      nameOnCard.innerHTML = 'Jane Appleseed';
    }

}
function inputCardNum()
{
    let cardNumberInput = cardnumber.value;
      // Do not allow users to write invalid characters
    let formattedCardNum = cardNumberInput.replace(/[^\d]/g, "");

    formattedCardNum = formattedCardNum.substring(0, 16);

    let cardNumberSections = formattedCardNum.match(/\d{1,4}/g);
    if(cardNumberSections !== null)
    {
        formattedCardNum = cardNumberSections.join(" ");
    }
    cardnumber.value = formattedCardNum;
 
  numOnCard.innerHTML = cardnumber.value;
    if (numOnCard.innerHTML == "") {
        numOnCard.innerHTML = '0000 0000 0000 0000';
      }
}

function inputMM()
{
let formattedMM = expiry[0].value;
formattedMM = formattedMM.substring(0,2)
expiry[0].value = formattedMM;
if(expiry[0].value === "")
{
    expMM.innerHTML = "00"
}
else
{
    expMM.innerHTML = expiry[0].value;
}
}

function inputYY()
{
let formattedYY = expiry[1].value;
formattedYY = formattedYY.substring(0,4)
expiry[1].value = formattedYY;
if(expiry[1].value === "")
{
    expYY.innerHTML = "0000"
}
else
{
    expYY.innerHTML = expiry[1].value;
}
}
function inputCvc()
{
    let formattedCVC = cvc.value;
    formattedCVC = formattedCVC.substring(0,3)
    cvc.value = formattedCVC;
    if(formattedCVC === "")
    {
        cvcDisplay.innerHTML = "000"
    }
    else{
        cvcDisplay.innerHTML = cvc.value;
    }
}

function  massValidate()
{
function validateName()
{
    let cardholderExp = /^[A-Z a-z]+$/;
    if(cardholder.value.match(cardholderExp))
    {
        errorMsg.textContent = " ";
    }
    else{
        errorMsg.innerHTML = "Please enter cardholder name!";
    }
}
function validateCard()
{
    let cardNumError = document.getElementById("card-num-error");
    if(cardnumber.value.length > 0 && cardnumber.value.length < 16)
    {
        cardNumError.innerHTML = "Wrong format!";
    }
    else if(cardnumber.value == ""){
        cardNumError.innerHTML = "Can't be blank!";
    }
    else
    {
        cardNumError.innerHTML = "";
    }
}
function validateExpiry() {
    let expMonth = /^(0[0-9]|1[1-2]){2}$/;
    let expYear = /^[0-9][0-2]{4}$/;

    if (expiry[0].value.match(expMonth)) {
      expiryErrorMsg.innerHTML = "";
    } else if (
      expiry[0].value.match(expMonth) &&
      expiry[1].value.match(expYear)
    ) {
      expiryErrorMsg.innerHTML = "";
    } else if (expiry[0] == "") {
      expiryErrorMsg.innerHTML = "Can't be blank!";
    } else {
      expiryErrorMsg.innerHTML = "Wrong format!";
    }
  }

  function validateCvc() {
    let cvcErrorMsg = document.getElementById("error-cvc");
    let cvcExp = /^[0-9]{3}$/;
    if (cvc.value === "") {
      cvcErrorMsg.innerHTML = "Can't be blank";
    } else if (cvc.value.match(cvcExp)) {
      cvcErrorMsg.innerHTML = "";
    } else {
      cvcErrorMsg.innerHTML = "Wrong format!";
    }
  }
validateName();
validateCard();
validateExpiry();
validateCvc();

if (
    nameOnCard.innerHTML == cardholder.placeholder ||
    numOnCard.innerHTML == cardnumber.placeholder ||
    expMM.innerHTML == "00" ||
    expYY.innerHTML == "0000" ||
    cvcDisplay.innerHTML == "000" ||
    (cardnumber.value.length > 0 && cardnumber.value.length < 16)
  ) {
    return false;
  } else {
    return true;
  }

}


submit.addEventListener("click",function(){
    massValidate();
    console.log("click")
    if(massValidate() == false)
    {
        event.preventDefault();
    }
    else{
        event.preventDefault();
        form.classList.add("hidden")
        thankYouSection.classList.remove("hidden")
   }
})

continueBtn.addEventListener("click", function () {
    event.preventDefault();
    thankYouSection.classList.add("hidden");
    form.classList.remove("hidden");
    nameOnCard.innerHTML = cardholder.placeholder;
    numOnCard.innerHTML = cardnumber.placeholder;
    expMM.innerHTML = "00";
    expYY.innerHTML = "0000";
    cvcDisplay.innerHTML = "000";
    cardholder.value = "";
    cardnumber.value = "";
    expiry[0].value = "";
    expiry[1].value = "";
    cvc.value = "";
    expiryErrorMsg.innerHTML = "";
  });