import _ from 'lodash'

export function hasData(data){
    return _.isArray(data) && !_.isEmpty(data)
}

export function execute(func,...props){
    if(_.isFunction(func)) func(...props)
}