const TextManager = (()=>{
    // let value = 'hello world';
    // 문자열타입을 안하고 객체타입으로 만드는 이유.
    // 문자열은 원시값이다. 원시값의 특징은 불변, 
    //원시자료형으로 만들고 인스턴스를 계속 만들면, 같은 값을 계속 복사해서 만들기 때문에 낭비 된다. 
    // 원시값으로 만들면 인스턴스간에 공유가 불가능하다.
    // 딥다이브 11장 참고.

    let value = { data: "Hello Lions!" };

    function innerTextManager() { }

    innerTextManager.prototype.getValue = function () {
        return value.data;
    }

    innerTextManager.prototype.setValue = function (newValue) {
        value = newValue;
    }

    return innerTextManager;
})();

const myInstance = new TextManager();