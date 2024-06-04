export function merge (collection_1 : number[], collection_2 : number[], collection_3 : number[]) : number[] {
    let i : number = 0;
    let j : number = collection_2.length-1;
    let k : number = 0;
    let result : number[] = []
    while (i<collection_1.length || j>=0 || k<collection_3.length){
        let min = Infinity
        if (i<collection_1.length){
            min = Math.min(min, collection_1[i])
        }
        if (j>=0){
            min = Math.min(min, collection_2[j])
        }
        if (k<collection_3.length){
            min = Math.min(min, collection_3[k])
        }
        result.push(min)
        if (min==collection_1[i]){
            i++;
        }
        else if (min==collection_2[j]){
            j--;
        }
        else {
            k++;
        }
    }
    return result
}