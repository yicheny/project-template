import _ from 'lodash'
import {Total} from "../../../_common/class/Total";

class CountTotal extends Total {

    totalRecent(specDays){
        const oneDayInfos = this._textToInfos(this._source)
        const specInfos = oneDayInfos.slice(-1 * specDays, oneDayInfos.length);
        const dayInfos = this._infosToDays(specInfos)
        console.log('daysInfos', dayInfos)
    }

    totalMonthInfo() {
        const data = _.groupBy(this.getData(), 'month')
        return _.map(data, (x, k) => {
            return this._total(x)
        })
    }

    totalWeekInfo(){
        // const weekMap = ['日','一','二','三','四','五','六']
        const data = _.groupBy(this.getData(), 'week')
        return _.map(data, (x, k) => {
            const i = _.head(x).week;
            const totalItem = this._total(x)
            return {i, ...totalItem}
        })
    }

    _total(data) {
        const days = data.length;
        const accCounts = _.reduce(data, (acc, x) => acc + x.count, 0)
        const accValidDays = _.reduce(data, (acc, x) => {
            if (x.count) acc++
            return acc;
        }, 0)

        return {
            days,
            accCounts,
            accValidDays,
        }
    }

    getData() {
        const oneDayInfos = this._textToInfos(this._source)
        return this._infosToDays(oneDayInfos)
    }

    _textToInfos(text){
      return text.split('\n').filter((x) => x.trim() !== '')
    }

    _infosToDays(infos){
        return _.map(infos, (oneDayInfo) => {
            const [dateString, count] = _.split(oneDayInfo, '-')
            const month = dateString.slice(0, 2);
            const day = dateString.slice(2, 4);
            const date = new Date(this._year, month - 1, _.toNumber(day))
            const week = date.getDay()

            return {
                date,
                month,
                day,
                week,
                count: _.toNumber(count),
            }
        })
    }
}

export function createCountTotal(...params){
    return new CountTotal(...params)
}