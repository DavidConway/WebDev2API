import _ from "lodash";

class StubAPI {
    constructor() {
        this.items = [];
    }

    getAll() {
        return this.items;
    }

    initialize(items) {
        this.items = items;
    }

    delete(k) {
        let elements = _.remove(this.items, item => item.itemName === k);
        return elements;
    }

    find(id) {
        let index = _.findIndex(
            this.items,
            item => `${item.itemName}` === id
        );
        if (index !== -1) {
            return this.items[index];
        }
        return null;
    }
    add(imageUrl, itemName, options) {
        this.items.push({
            imageUrl,
            itemName,
            options
        });
        return null;
    }
}


export default new StubAPI();