export enum ItemCategory {
    CAKE,
    BOOK,
    TOY,
}

export interface Item {
    getCategory(): ItemCategory;
}
