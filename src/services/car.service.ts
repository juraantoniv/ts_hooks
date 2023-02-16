import {ICar} from "../interfaces";
import {apiService, IRes} from "./api.service";
import {urls} from "../configs";


const carService ={
    getAll: (): IRes<ICar[]> => apiService.get(urls.base)
}

export {
    carService
}