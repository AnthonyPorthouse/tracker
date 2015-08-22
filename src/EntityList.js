export default class EntityList
{
    constructor(options) {
        this.list = [];
    }

    /**
     * Get the underlying data structure for the EntityList
     * @return {Array} The underlying array containing Entities
     */
    getList ()
    {
        return this.list;
    }

    /**
     * [addEntity description]
     * @param {Entity} entity [description]
     */
    addEntity (entity)
    {
        this.list.push(entity);
    }

    /**
     * [getEntity description]
     * @param  {Number} index [description]
     * @return {Entity}       [description]
     */
    getEntity (index)
    {
        return this.list[index];
    }
}
