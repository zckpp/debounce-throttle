const debounce = (fn,delay) => {
    let timer = null;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,args);
        }, delay)
    }
}

const throttle = (fn,delay) => {
    let timer = null;
    return function() {
        let context = this;
        let args = arguments;
        if(!timer){
            timer = setTimeout(() => {
                fn.apply(context,args);
                timer = null;
            }, delay)
        }
    }
}