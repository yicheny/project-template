import {EMPLOYEE} from "../../config";
import {updateTemplate} from "../../../../template/update";

export async function ttkEmployeeUpdate(data) {
    return await updateTemplate(EMPLOYEE)(data)
}