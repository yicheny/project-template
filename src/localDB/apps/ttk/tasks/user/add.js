import {USER} from "../../config";
import {addTemplate} from "../../../../template/add";

export async function ttkUserAdd(data) {
    return await addTemplate(USER)(data)
}