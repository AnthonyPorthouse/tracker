export default class EntityList
{
    constructor(options) {
        this.list = [];
    }

    getList ()
    {
        return this.list;
    }

    addEntity (entity)
    {
        this.list.push(entity);
    }

}
