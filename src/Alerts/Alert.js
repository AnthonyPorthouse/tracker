export default class alert
{
    constructor (message)
    {
        this.message = message;
    }

    getMessage()
    {
        return this.message;
    }

    tick()
    {

    }

    dispatch()
    {
        console.log(`Dispatching Alert: ${this.toString()}`);
        let event = new CustomEvent('tracker:alert', {
            detail: this
        });
        document.dispatchEvent(event);
    }


    toString()
    {
        return this.message;
    }
}
