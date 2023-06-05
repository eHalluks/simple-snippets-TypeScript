interface InventoryItem {
    name: string;
    type: string;
    quantity: number;
}

const groupBy = <T>(arr: T[], getKey: (item: T) => string): Record<string, T[]> => {
    const groups: Record<string, T[]> = {};
    arr.forEach((item) => {
        const key = getKey(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
    });
    return groups;
};

const inventory: InventoryItem[] = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

const result2 = groupBy(inventory, ({ type }) => type);
console.log(result2);
