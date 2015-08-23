import Entity from './Entity';

export default class NPC extends Entity
{
    constructor (name, modifier)
    {
        super(name);

        this.initiative = this.calculateInitiative(modifier);
    }

    calculateInitiative (modifier)
    {
        let roll = Math.ceil(Math.random() * 20);
        return roll + modifier;
    }
}
