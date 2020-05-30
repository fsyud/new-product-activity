export const onlineArr: Array<string> = ['上线', '下线']

// 图片上传路径
export const UploadAction: string = 'http://10.100.60.28/phalapi/public/?s=App.Crm_activity.Upload'

// 活动过滤按钮列表
export const actHeadList: Array<{key: number, val: string, txt: string}> = [
    { key: 1, val: 'default', txt: '默认' },
    { key: 2, val: '0', txt: '最新活动' },
    { key: 3, val: '1', txt: '产品专区' },
]

// 解决方案过滤按钮列表
export const solHeadList: Array<{key: number, val: string, txt: string}> = [
    { key: 1, val: 'default', txt: '默认' },
    { key: 2, val: '0', txt: '社招解决方案' },
    { key: 3, val: '1', txt: '校招解决方案' },
]