import {COUNT} from "../../config";
import {queryTemplate,upsertTemplate,delTemplate} from "../../../../template";

// export async function totalCountAdd(data) {
//     return await addTemplate(COUNT)(data)
// }
//
export async function totalCountDel(data) {
    return await delTemplate(COUNT)(data)
}
//
// export async function totalCountUpdate(data) {
//     return await updateTemplate(COUNT)(data)
// }

export async function totalCountQuery(data) {
    return await queryTemplate(COUNT)(data)
}
export async function totalCountUpsert(data) {
    return await upsertTemplate(COUNT,{primaryKey:'id'})(data)
}