export class HojaTrabajo {
    id: number;
    name: string;

    constructor(
        id: number,
        name: string
    ) {
        this.id = id;
        this.name = name;
    }
}

export class HojaResp {
    hojasDetrabajo:HojaTrabajo[]
}
