export class Total {
    constructor(source, year) {
        this._source = source
        this._year = year;
        this._data = this.getData()
    }

    getSource() {
        return this._source
    }

    empty() {
        return this._source === ''
    }

    //==========接口定义==========
    getData() {
        throw new Error('由子类实现！')
    }

    totalInfo() {
        throw new Error('由子类实现！')
    }
}
