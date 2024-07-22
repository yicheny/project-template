import {helloTask} from "../apps/hello/helloTask";
import {ttkUserQuery} from "../apps/ttk/tasks/user/query";
import {ttkTagQuery} from "../apps/ttk/tasks/tag/query";
import {ttkEmployeeQuery} from "../apps/ttk/tasks/employee/query";

export const TASK_MAP = Object.freeze({
    '/hello': helloTask,
    '/ttk/user/query': ttkUserQuery,
    '/ttk/tag/query': ttkTagQuery,
    '/ttk/employee/query': ttkEmployeeQuery
})