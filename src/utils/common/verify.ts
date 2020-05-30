import ForIn from 'lodash/forIn'

const baseInfo: string = '请输入'
const extraInfo: string = '请上传'


interface viInfo {
    required: boolean;
    message: string
}

const VerificObj = {
    position: '顺序',
    showimg: '展示图URL',
    wximg: '微信url',
    h5img: 'H5url',
    des: '产品描述',
    href: '活动链接',
    type: '活动类型',
    state: '活动状态',
    link1: '链接1名称',
    link1href: '请输入链接1地址',
    sotype: '解决方案类型',
    sotitle: '标题'
}

const extraInfoArr: Array<string> = [
    'showimg'
]

const VeriFun = (req: boolean, pam?: string): viInfo => {
  let Info: string = ''
  ForIn(VerificObj, (v, k) => {
    if(pam === k) {
      Info = `${extraInfoArr.includes(k) ? extraInfo: baseInfo}${VerificObj[k]}`
    }
  })
  return {
    required: req,
    message: Info
  }
}

export default VeriFun