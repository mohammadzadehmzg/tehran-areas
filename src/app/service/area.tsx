interface Area {
    id: number;
    name: string;
}

interface IAreaService {
    getByName(areaName: string): Area;
}