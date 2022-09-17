export interface IDeveloper {
    id: number;
    photo: string;
    name: string;
    category: number;
    stack: number | string;
    state: number | string;
    description: string;
}

export interface IStack {
    id: number;
    label: string;
}

export interface IState{
    id: number;
    value: string;
}
