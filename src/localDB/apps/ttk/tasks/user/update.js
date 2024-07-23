import {USER} from "../../config";
import {updateTemplate} from "../../../../template/update";

export async function ttkUserUpdate(data) {
    return await updateTemplate(USER)(data)
}