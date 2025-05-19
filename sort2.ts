export function merge2(c1: number[], c2: number[], c3: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = c2.length - 1, k = 0;

    while (i < c1.length || j >= 0 || k < c3.length) {
        const a: number[] = [];
        if (i < c1.length) a.push(c1[i]);
        if (j >= 0) a.push(c2[j]);
        if (k < c3.length) a.push(c3[k]);

        let min = a[0];
        for (const val of a) {
            if (val < min) min = val;
        }

        if (i < c1.length && min === c1[i]) i++;
        else if (j >= 0 && min === c2[j]) j--;
        else if (k < c3.length && min === c3[k]) k++;

        result.push(min);
    }

    return result;
}
