interface Area {
    name: string;
}

interface IAreaService {
    getByName(areaName: string): Area;
}