import {USER} from "../../config";
import {delTemplate} from "../../../../template/del";

export async function ttkUserDel(data) {
    return await delTemplate(USER)(data)
}