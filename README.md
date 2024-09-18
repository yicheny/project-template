# 当前分支
maja-base

# 项目意义
本项目的目标是实现一个开箱即用的模板项目，这个项目是为个人开发使用的。

# 配置功能
模板项目包含以下功能：
1. [x] 路由系统
2. 配置扩展
   1. [x] 配置`alias`
   2. [x] 服务代理
3. [x] 菜单

# 依赖库
> 级别：0-基础，必安装；1-推荐；2-按需安装；

## 第三方
1. 0 `react-router-dom` 路由库，提供基础路由功能
2. 1 `lodash` 简化数据操作
3. 1 `clsx` 简化`className`处理
4. 1 `antd` 最流行的`react ui`库
5. 1 `react-app-rewired` 覆盖默认配置
6. 1 `customize-cra` 简化配置过程
7. 1 `sass` 支持`sass`扩展
8. 2 `@sentry/react` 前端错误监控
9. 2 `localforage` 简单且效率极高的JS存储库

## 自实现
1. 2 `indexeddb-logger` 前端日志记录

# 公共代码实现
## common
### hooks
1. [x] `useAutoRefresh`
2. [x] `useOpenInfo`
3. [x] `usePost`

### utils
1. [x] `hasData`
2. [x] `execute`
3. [x] `generateUniqueId`
4. [x] `tryExecute`
5. [x] `getLeafs`

# 项目要求
- node【推荐 >=20】