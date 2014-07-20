function callee(arg1, arg2){
	this.arg1 = arg1;
	this.arg2 = arg2;

	return this;
}

function caller(arg1, arg2){
	callee.call(this, arg1, arg2);
	this.arg3 = "third argument";
}

var called = new caller("first", "second");
//이곳에서 caller를 new로 호출하게 되므로 caller 내부에서 사용한 call함수의 this는 caller가 된다. 
//따라서 called는 아래와 같은 형태의 caller가 된다.
//{arg1: "first", arg2: "second", arg3: "third argument"}

function caller2(arg1, arg2){
	callee.call(window, arg1, arg2);
	this.arg3 = "third argument";
}

var called2 = new caller2(1, 2);
//caller2에서 call함수를 사용할 때 this 인자의 값으로 window를 사용했다.
//따라서 callee의 this로 window가 지정되고, arg1과 arg2라는 이름의 전역변수가 생성된다.(값은 caller2에서 지정한 대로 1과 2)
//called2는 caller2에서 지정한 arg3만을 가진 아래와 같은 object가 된다. (new로 생성했기 때문에 caller2 object가 생성되고, 여기서의 this는 caller2 자신을 가리키기 때문)
//{arg3: "third argument"}



//call 함수를 호출하기 위해 this 값과 원하는 인자들을 각자 전달하였지만, apply 함수를 사용한다면 아래 예와 같이 this 값과 함께 원하는 인자들을 포함한 한 개의 array를 전달한다.
var callArgs = ["arg001", "arg002"];

function caller3(){
	callee.apply(this, callArgs);
	this.arg3 = "arg0003";
}

var called3 = new caller3();

//위 내용의 실행 결과, called3는 다음과 같은 caller3 object가 된다.
//{arg1: "arg001", arg2: "arg002", arg3: "arg0003"}