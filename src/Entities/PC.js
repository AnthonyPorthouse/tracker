import Entity from './Entity';

export default class PC extends Entity
{
    constructor (name, initiative)
    {
        super(name);

        this.initiative = initiative;
    }
}
