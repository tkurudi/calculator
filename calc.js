//display input function
let display = 0;
  function insert(num){
  	display.value = display.value + num
  };

  let totalString;

  function getTotal(){
  	totalString = inputs.join("");
  	(#display).html(eval(totalString));
  }
  $("input").on("click", function(){
  	if(this.value=== "c"){
  		input=[""];
  		update();
  	}
  });