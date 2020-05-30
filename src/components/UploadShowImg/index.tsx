import React, { FC, useState, useEffect } from 'react'
import { getBase64, JudgeImg } from '@/utils/lib/tool'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, message  } from 'antd'
import { uploadInfo } from '@/utils/common/variable'

// 组件之间传值 upAction: 上传链接 handleChange：上传状态改变
interface UploadShowImgProps {
  upAction: string;
  handleChange: (info: uploadInfo) =>void;
  imgInfo: any;
  visible?: boolean;
  type?: string | undefined;
}

// FC 函数式组件，提醒你必须返回一个ReactNode
const UploadShowImg: FC<UploadShowImgProps> = (props) => {
  const { upAction, handleChange, imgInfo, visible, type } = props

  // 设置上传 Modal 默认状态
  const [
    previewVisible, setPreviewVisible
  ] = useState<boolean>(false)
  const [
    previewImage, setPreviewImage
  ] = useState<string>('')
  const [
    previewTitle, setPreviewTitle
  ] = useState<string>('')

  // 初始化上传列表
  const [fileList, setFilelist] = useState<any>([])

  // 设置上传图片列表
  useEffect(() => {
    
    const CurList = imgInfo && Object.keys(imgInfo).length > 0 ? [imgInfo] : []

    setFilelist(CurList)

    // 清空上传列表，因为上传组件独立
    if(!visible) setFilelist([])
  }, [props.imgInfo ]);

  // 点击文件链接或预览图标时的回调
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      // eslint-disable-next-line no-param-reassign
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    )
  };

  // 上传后把上传值放入列表中 把值传给父组件
  const uploadChange = (fileInfo: any): void => {
    // 文件格式验证
    const fileStatus = fileInfo.file.status !== 'removed'

    if(JudgeImg(fileInfo.file) === '1' && fileStatus) {
      message.error('您只能上传JPG/PNG文件!');
      return;
    }

    if (JudgeImg(fileInfo.file) === '2' && fileStatus) {
      message.error('图像必须小于2MB!');
      return;
    }

    if(fileInfo) setFilelist(fileInfo.fileList)
    
    // 判断是否上传完后 上传数据放入 form 传递给父级
    if(handleChange
      && fileInfo.fileList.length >=1
      && fileInfo.fileList[0].response
    ) {
      handleChange({
        url: fileInfo.fileList[0].response.data.url,
        param: type
      })
    } else {
      handleChange({
        url: undefined,
        param: type
      })
    }
  }

  const beforeUpload = (file: any): (boolean | Promise<any>) => {
    return JudgeImg(file, true)
  }

  // 关闭预览modal
  const handleCancel = (): void => setPreviewVisible(false)

  // 定义上传按钮组建
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">上传</div>
    </div>
  );

  return (
    <div>
      <Upload
        action={upAction}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={uploadChange}
        beforeUpload={beforeUpload}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  )
}

export default UploadShowImg;
