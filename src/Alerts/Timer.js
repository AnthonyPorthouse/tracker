import Alert from './Alert';

export default class Timer extends Alert
{
    constructor(message, duration)
    {
        super(message);

        this.duration = duration;
    }

    getDuration()
    {
        return this.duration;
    }

    tick()
    {
        this.duration--;
    }

    toString()
    {
        return `${this.message} - ${this.duration} rounds remaining`;
    }
}
