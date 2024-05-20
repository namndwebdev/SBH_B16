export function currency(txt){
    var number = Number(txt)
    number = isNaN(number) ? 0 : number
    number = Math.abs(number)

    return number.toLocaleString('vi', {style:"currency", currency:"VND"})
}