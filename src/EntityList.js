EntityList = function () {
    var list = [];

    return {
        addEntity: function (entity) {
            list.push(entity);
        }
    }
};

module.exports = EntityList;