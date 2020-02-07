day1
1. nodejs 설치(https://nodejs.org/ko/) LTS버전
2. nvm-window 설치(https://github.com/coreybutler/nvm-windows/releases -> nvm-setup.zip)  * node 버전 여러개 관리 필요 시
3. vs code 설치(https://code.visualstudio.com/)
4. vs code plugin 설치 (ctrl+shift+p -> extensions:install extenstions ) / vetur, vue 2 snippets
5. chrome vue.js devtool 설치 (https://chrome.google.com/webstore/detail/vuejs-devtools)
6. vue.js devtools 설정 (chrome://extensions) 파일 URL에 대한 액세스 허용, 시크릿 모드에서 허용
7. yarn 설치(cmd창 npm install -g yarn)
8. vue-cli 설치(cmd창 yarn global add vue-cli)

과제
javascript Array method / filter, map, recuce, push, splice, slice, find, findIndex, shift, unshift, sort 기능 확인


day2
1. babel 설치

** this와 arrow function!!

1.  js에서의 this?
 : 현재 호출중인 메서드를 보유한 객체를 가리킴 (default)

var obj = { result: 0 };
obj.add = function(x,y) {  
   this.result = x+y;
}
obj.add(3,4)
console.log(obj)

2. this가 바인딩되는 시점 : 메서드, 함수가 호출될 때마다!!!
  --> 메서드를 호출할 때 this를 직접 지정하여 호출할 수 있음
  * apply, call 메서드 : 지정하여 호출까지
  * bind 메서드 : this를 강제로 지정한 새로운 함수를 리턴함.

var add = function(x,y) {  
   this.result = x+y;
}
//add(4,5);

var obj = {};
//add.apply(obj, [4,5])
var add2 = add.bind(obj);
add2(4,5)


3. 함수가 중첩되었을 때의 문제(전통적인 함수에서의...)

var obj = { result:0 };
obj.add = function(x,y) {
  function inner() {
     this.result = x+y;
  }
  //inner();
  //inner.apply(this);
  inner = inner.bind(this);
  inner();
}
obj.add(4,5)


4. 화살표 함수는 lexical binding(X)

var obj = { result:0 };
obj.add = function(x,y) {
  var inner = () => {
     this.result = x+y;
  }
  inner()
}
obj.add(4,5)



===> vue에서는 1차적인 메서드는 전통적인 function 문법을 쓰되,
	그 안의 중첩된 function은 화살표 함수 가능






day5

예제 구조
backend
백엔드 애플리케이션 node + express
/gym 경로에 vue 앱을 배포함.
routertest
vue-router을 이용한 간단한 예제


핵심 설정
routertest의 vue.config.js 파일을 검토 (publicPath)
module.exports = {
    publicPath : "/gym/",
    productionSourceMap : false,
}
package.json의 scripts를 검토(build -> delete target -> copy output)
App.vue의 router 객체의 base 속성 검토
const router = new VueRouter({
  base: "/gym",
  //mode : "history",
  routes : [
    ......
  ]
})

