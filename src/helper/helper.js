import _ from 'lodash';

export function getSum(transaction, type){
    const sum = _(transaction)
            .groupBy('type')
            .map((obj, key)=>{
                if (!type) return _.sumBy(obj,'amount') // [300, 350, 500]
                return {
                    'type': key,
                    'color': obj[0].color,
                    'total': _.sumBy(obj, 'amount')
                }
            })
            .value()
    return sum
}

export function getLabels(transaction){
    const amountSum = getSum(transaction, 'type')
    const total = _.sum(getSum(transaction))
    let percent = _(amountSum)
    .map((obj)=> { return _.assign(obj,{percent: (100*obj.total/total)})})
    .value()

return percent
}

export function chart_Data(transaction, custom) {
    let bg = _.map(transaction, a=> {return a.color})
    bg = _.uniq(bg)
    console.log(bg)
    const dataValue = getSum(transaction)
    const config = {
        data: {
            datasets: [{
                data: dataValue,
                backgroundColor: bg,
                hoverOffset: 4,
                borderRadius: 30,
                spacing: 10
              }]
        },
        options: {
            cutout: 115
        }
      }

      return custom ?? config;


}

export function getTotal(transaction) {
    return _.sum(getSum(transaction))
}

