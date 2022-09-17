export interface IDeveloper {
    id: number;
    photo: string;
    name: string;
    category: number;
    stack: number | string;
    state: number;
    description: string;
}

export interface IStack {
    id: number;
    label: string;
}
