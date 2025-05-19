export function merge(c1: number[], c2: number[], c3: number[]): number[] {
    const merged = [...c1, ...c2, ...c3];

    for (let i = 0; i < merged.length - 1; i++)
        {
        for (let j = 0; j < merged.length - 1 - i; j++)
            {
            if (merged[j] > merged[j + 1])
                {
                const temp = merged[j];
                merged[j] = merged[j + 1];
                merged[j + 1] = temp;
            }
        }
    }

    return merged;
}
