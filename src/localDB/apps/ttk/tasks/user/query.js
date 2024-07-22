import {USER} from "../../config";
import {queryTemplate} from "../../../../template/query";

export async function ttkUserQuery(data) {
    return await queryTemplate(USER)(data)
}