import {EMPLOYEE} from "../../config";
import {delTemplate} from "../../../../template/del";

export async function ttkEmployeeDel(data) {
    return await delTemplate(EMPLOYEE)(data)
}