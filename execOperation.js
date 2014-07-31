function execOperation(operator){
	return function(x){
		return function(y){
			return operator(x, y);
		}
	}
}
function add(x, y){
	return x + y;
}
function mul(x, y){
	return x * y;
}


var myFunction = {
	getName : function(){
		return this.name;
	},
	setName : function(newName){
		this.name = newName;
	}
}

var mySns = {name : "LINE"};
var myProduct = {name : "jisu", phone : "iPhone"};

var nameObj;

myFunction.setName.call(nameObj, mySns.name);

myFunction.getName.call(nameObj);

nameObj;


var myFunction = {
	name : "jisu",
	getName : function(){
		return function(){
			debugger;
			return this.name;
		}
	},
	setName : function(newName){
		this.name = newName;
	}
}

myFunction.getName();


var myFunction = {

   getName : function() {
       setTimeout(function() {
               console.log(this.phone);
           }.bind(this),1500); 
           /**
 * 
 * 원래 setTimeout은 window에 포함되어 있음(window.setTimeout). 
 * 따라서 this를 사용하면 기본적으로 window로 넘어가는 문제가 있는데, 
 * 이를 해결하기 위해 bind해서 현재 스코프의 this를 컨텍스트로 사용하도록 하는 것.
 * */
   },
   setName : function(newName) {
       this.name = newName;
   }
}

var myProduct = {phone : "iphone", com: "apple"}

myFunction.getName.apply(myProduct);

//scope는 선언될 때 결정되고 this는 실행될 때 결정된다. (this는 debugger 찍어보면서 쓰는 게 속편하다)

//함수 내 지역변수는 함수 결과를 어디에 사용하면 (var xx = myFunction();) 메모리에 그대로 남아있다. GC 대상이 되지 않음