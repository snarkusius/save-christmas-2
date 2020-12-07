import { randomArray} from './helpers.js'
import { swap} from './helpers.js'
const a = randomArray(100, 10)

function bubelsort(arr) {
    let newarr = arr
    for (let i = 0; i < newarr.length; i++) {
        for (let i2 = 0; i2 < newarr.length - i; i2++) {
            if (newarr[i2] > newarr[(i2+1)]){
                swap(newarr,i2,(i2+1))
            }
            
        }
    }
    return newarr
}
console.log (bubelsort([9,8,7,690,4,3,2,1]))