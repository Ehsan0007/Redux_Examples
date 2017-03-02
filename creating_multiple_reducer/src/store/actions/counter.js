export default class CounterAction{

    static INCREAMENTS = "INCREAMENT"
    static DECREMENTS = "DECREMENT"

    static increament(){
        return {
            type: 'INCREAMENT'
        }
    }

    static decrement(){
        return {
            type : 'DECREMENT'
        }
    }

}