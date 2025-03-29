// create a type that represents the above data and use it to declare two variables. the first line is the name of the list

export type Warhammer40kList = {
    name: string;
    points: number;
    battleSize: string;
    battleSizePoints: number;
    faction: string;
    detachment: Detachment;
    units: Unit[];
    meta: Meta;
};

type Detachment = {
    name: string;
};

type Unit = {
    category: string;
    name: string;
    points: number;
    models: Model[];
};

type Model = {
    name: string;
    count: number;
    weapons: Weapon[];
    enhancements: string[];
    warlord: boolean;
};

type Weapon = {
    name: string;
    count: number;
};

type Meta = object
