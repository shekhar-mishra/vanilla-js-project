class EventDispatcher {
    constructor(){
        this.events={}
    }
    onAddEvent= function(eventName,callback){
       if(this.events[eventName]){
            this.events[eventName].push(callback)
        }else{
            this.events[eventName]=[callback]
        }
    }
    onRemoveEvent = function(eventName){
        if(this.events[eventName]){
            delete this.events[eventName]
        }
    }
    onDispatchEvent =function (eventName) {
        let data= this.events[eventName]
        data.forEach(function(event){
          event.call()
        })
    }
}

let e1=new EventDispatcher()
e1.onAddEvent("Add",function(){
    console.log("hello")
})
e1.onAddEvent("Add",function(){
    console.log("hello2")
})
e1.onDispatchEvent('Add');