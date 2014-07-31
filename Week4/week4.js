/**
 * 자바스크립트에서의 namespace 사용
 *
 * 1. 사용법
 * 	- 전역 변수를 남용하면 개발한 모듈이 다른 파일의 코드와 충돌할 위험이 높고, 전역 공간의 오염 위험도 높아진다. 객체 기능을 사용해 네임스페이스를 구현하면 이와 같은 문제를 회피할 수 있다.
 * 	- 네임스페이스 역할을 하는 빈 객체를 생성하고, 이 안에서 함수를 생성한다.
 * 		- 객체를 전역 공간에 선언해 놓고 여기에 모든 함수나 객체, 변수를 추가하여 사용한 뒤 (전역객체명).(사용을 원하는 객체명).(함수) 와 같은 형식으로 사용할 수 있다. 전역 객체의 네임스페이스를 사용하여 세부 내용에 접근하므로 다른 라이브러리 코드 등과의 이름 충돌로 인한 문제를 최소화할 수 있다.
 * 2. 장점
 * 	- 모듈의 네임스페이스를 검사하여 모듈이 사용가능한 상태인지, 또는 생성해야 하는지 간단하게 파악할 수 있다.
 * 	- 효과적으로 캡슐화된 코드를 만들 수 있다.
 * 	- 전역 네임스페이스에 생기는 오염과 혼란을 막을 수 있다.
 * 	- 기능과 제공자를 파악하기 쉬운 API 제작이 가능하다. ex) com.google.search() 같은 형식으로 API가 제공된다면 누가 만든 어떤 기능의 API인지 쉽게 파악할 수 있다.
 *
 * 3. 예제
 */

var globalModule;
if (!globalModule) {
	(function() {
		globalModule = {};
	})();
};
if (!globalModule.localModule1) {
	globalModule.localModule1 = function(arg) {
		console.log(arg);
	};
};
if (!globalModule.localModule2) {
	globalModule.localModule2 = function(arg) {
		alert(arg);
	};
};

globalModule.localModule1("생성 체크");
globalModule.localModule2("생성 체크");

