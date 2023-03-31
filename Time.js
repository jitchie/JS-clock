export class Time {
    #currentTime
    #seconds
    #minutes
    #hour
    constructor(){
        this.#currentTime = new Date(); 
        this.#setSeconds();
        this.#setMinute();
        this.#setHour();
        this.update();
    }
    #setSeconds(){
        this.#seconds = this.#currentTime.getSeconds();
    }
    get seconds(){
        return this.#seconds;
    }
    #setMinute(){
        this.#minutes = this.#currentTime.getMinutes();
    }
    get minutes(){
        return this.#minutes
    }

    #setHour(){
        this.#hour = this.#currentTime.getHours();
    }
    
    get hour(){
       return this.#hour
    }
    update(){
        this.#currentTime = new Date()
        this.#hour = this.#currentTime.getHours();
        this.#minutes = this.#currentTime.getMinutes();
        this.#seconds = this.#currentTime.getSeconds();
        setTimeout(()=> this.update(),1000);
    }
}