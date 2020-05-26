function sum(a: number, b: number) {
    return a + b
}

const result = sum(3, 2)

console.log(result);

function fullName(firstName: string): (lastName: string) => string {
    return function(lastName: string) {
        return `${firstName} ${lastName}`
    }
}

const userName = fullName("Ricardo")
const userFullName = userName("Aguilar")

console.log(userFullName);
