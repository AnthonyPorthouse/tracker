export default class Entity
{
    constructor (name)
    {
        this.name = name;
        this.initiative;
    }

    getInitiative()
    {
        return this.initiative;
    }

    toString()
    {
        return `${this.name} (${this.initiative})`;
    }
}
