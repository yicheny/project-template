import {EMPLOYEE} from "../../config";
import {addTemplate} from "../../../../template/add";

export async function ttkEmployeeAdd(data) {
    return await addTemplate(EMPLOYEE)(data)
}