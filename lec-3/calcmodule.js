const sum = (a, b) => {
    return a + b;
}
const sub = () => {
    let a = 10;
    b = 5;
    console.log(`sub:-${a - b}`)
}
const arr = [21, 7, true, 8]

const users = [
    {
        id: 1,
        name: 'Arik',
        age: 25,
        phone: '1234567890'
    }
    
]
const obj = {
    name: 'Arik',
    age: 25,
    phone: '1234567890',   
}
module.exports = { sum, sub, arr, users, obj };