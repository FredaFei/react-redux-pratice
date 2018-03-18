import React from 'react';
function EnhanceWrapper(WrappedComponent){
    let inputEle = null;
    function handleClick(){
        inputEle.focus()
    }
    function wrappedComponentStatic(){
        WrappedComponent.sayHello()
    }
    return props=>(<div>
        <WrappedComponent
            inputRef={el=>inputEle = el}
            name="freda" age="12"
            {...props}
        />
        <input type="button" value="focus's child input" onClick={handleClick}/>
        <input type="button" value="call childComponent static" onClick={wrappedComponentStatic}/>
       
    </div>)
}

export default EnhanceWrapper