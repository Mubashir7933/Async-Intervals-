const sayMubashir = function(){
    console.log("Syed Mubashir Ahmed");

}

const changeText =  function(){
    document.querySelector('h1').innerHTML = "MyAsycLearning";
}

 const Stopped =  setTimeout(changeText, 2000);
 document.querySelector('#Stop').addEventListener('click', function(){
    clearTimeout(Stopped);
    console.log("Stopped")
 })