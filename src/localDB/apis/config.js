import {helloTask} from "../apps/hello/helloTask";
import {ttkUserQuery} from "../apps/ttk/tasks/query";

export const TASK_MAP = Object.freeze({
    '/hello': helloTask,
    '/ttk/user/query': ttkUserQuery
})