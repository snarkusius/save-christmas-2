
export function randomArray(len, n) {

    // Skapa en ny tom array av längd len
    const a = new Array(len)

    // Fyll varje plats i arrayen med ett random heltal
    for (let i = 0; i < a.length; i++) {
        a[i] = randomInt(n)
    }

    return a
}

function randomInt(n) {
    return Math.floor(Math.random() * (n + 1))
}

export function swap(arr,num1,num2) {
    let temporarystorige = arr[num1]
    arr[num1] = arr[num2]
    arr[num2] = temporarystorige
}
const a = [5, 8, 10, 9]

swap(a, 1, 3) // byter plats på a[1] och a[3]

console.log(a) // [5, 9, 10, 8]