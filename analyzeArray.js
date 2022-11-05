function analyzeArray(array){
    let min = Math.min(...array)
    let max = Math.max(...array)
    let length = array.length
    let average = array.reduce((previousVal, currentVal) => previousVal + currentVal, 0) / array.length

    let object = {
        min: min,
        max: max,
        length: length,
        average: average
    }
    return object
}
module.exports = analyzeArray