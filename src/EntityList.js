export default class EntityList
{
    constructor(options) {
        this.list = [];
    }

    addEntity (entity)
    {
        this.list.push(entity);
    }
}
