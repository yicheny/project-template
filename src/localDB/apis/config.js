import {helloTask} from "../apps/hello/helloTask";
import {ttkUserQuery} from "../apps/ttk/tasks/user/query";
import {ttkTagQuery} from "../apps/ttk/tasks/tag/query";
import {ttkEmployeeQuery} from "../apps/ttk/tasks/employee/query";
import {ttkEmployeeAdd} from "../apps/ttk/tasks/employee/add";
import {ttkEmployeeUpdate} from "../apps/ttk/tasks/employee/update";
import {ttkEmployeeDel} from "../apps/ttk/tasks/employee/del";
import {ttkUserAdd} from "../apps/ttk/tasks/user/add";
import {ttkUserUpdate} from "../apps/ttk/tasks/user/update";
import {ttkUserDel} from "../apps/ttk/tasks/user/del";

export const TASK_MAP = Object.freeze({
    '/hello': helloTask,
    '/ttk/user/query': ttkUserQuery,
    '/ttk/user/add': ttkUserAdd,
    '/ttk/user/update': ttkUserUpdate,
    '/ttk/user/del': ttkUserDel,
    '/ttk/tag/query': ttkTagQuery,
    '/ttk/employee/query': ttkEmployeeQuery,
    '/ttk/employee/add': ttkEmployeeAdd,
    '/ttk/employee/update': ttkEmployeeUpdate,
    '/ttk/employee/del': ttkEmployeeDel,
})