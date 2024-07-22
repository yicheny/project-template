import {EMPLOYEE} from "../../config";
import {queryTemplate} from "../../../../template/query";

export async function ttkEmployeeQuery(data) {
    return await queryTemplate(EMPLOYEE)(data)
}