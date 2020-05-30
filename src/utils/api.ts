
import indexOf from 'lodash/indexOf'

const basic: string = '/api/?s=App.Crm_activity.'

// GetallAct 获取所有数据 显示所有活动
// AddAct 插入数据	新增一个活动
// DelAct 删除数据	删除活动
// UpdateAct 更新数据	更新活动页面内容
// GetallSol 获取所有数据	显示所有解决方案
// AddSol 插入数据	新增一个解决方案
// UpdateSol 更新数据	更新解决方案内容
// DelSol 删除数据	删除解决方案
// GetallBan 获取所有数据	显示所有banner
// AddBan 插入数据	新增一个banner
// DelBan 删除数据	删除banner
// Upload 图片文件上传	只能上传单个图片文件

const apiList: Array<string> = [
    'GetallAct',
    'AddAct',
    'DelAct',
    'UpdateAct',
    'GetallSol',
    'AddSol',
    'UpdateSol',
    'DelSol',
    'GetallBan',
    'AddBan',
    'DelBan',
    'Upload'
]

const getApi = (pam: string): string => {
    let api: string = ''
    if (apiList.includes(pam)) {
        api = basic + apiList[
            indexOf(apiList, pam)
        ]
    }
    return api
}

export default getApi