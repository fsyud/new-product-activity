import React, { FC, useEffect, useState } from 'react';
import {
  Modal, Result, Button, Form, Input, Radio, Switch
} from 'antd';
import isNull from 'lodash/isNull'
import VeriFun from '@/utils/common/verify'
import UploadShowImg from '@/components/UploadShowImg';
import { uploadInfo } from '@/utils/common/variable';
import { onlineArr, UploadAction } from '@/utils/common/constant'
import { Data } from '../data'
import styles from '../style.less';


// 定义父级元素的传值类型 函数类型
interface OperationModalProps {
  done: boolean;
  visible: boolean;
  current: Partial<Data> | undefined;
  onDone: () => void;
  onSubmit: (values: Data, operation: string) => void;
  onCancel: () => void;
}

const { TextArea } = Input;
const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const typeArr: Array<{val: string, txt: string}> = [
  { val: '0', txt: '最新活动' },
  { val: '1', txt: '产品专区' }
]

const stateArr: Array<{val: string, txt: string}> = [
  { val: 'default', txt: 'default' },
  { val: 'new', txt: 'new' },
  { val: 'hot', txt: 'hot' },
]

const OperationModal: FC<OperationModalProps> = (props) => {
  const [form] = Form.useForm();

  const { done, visible, current, onDone, onCancel, onSubmit } = props;

  const [onlineSta, setOnlineSta] = useState<boolean>(true)

  // resetFields 会重置整个 Field
  // 因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。
  useEffect(() => {
    if (form && !visible) {
      form.resetFields();
    }
  }, [props.visible]);

  // 使用 form.setFieldsValue 来动态改变表单值。 
  // 你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可
  // [props.current]
  useEffect(() => {
    if (current) {
      form.setFieldsValue({
        ...current,
        state: current.state === 'default' ? 'default' : current.state,
        type: current.type?.length === 0 ? '0' : '1'
      });
    }
  });

  // 重置 switch 状态
  useEffect(() => {
    if(current) {
      setOnlineSta(current.online === 'on')
    }
  }, [onlineSta, current]);

  // 表单提交 主要作为验证
  const handleSubmit = () => {
    if (!form) return;
    form.submit();
  };

  // 完成提交 提交表单且数据验证成功后回调事件
  const handleFinish = (values: { [key: string]: any }) => {
    const operationState = current ? 'edit' : 'add'
    if (onSubmit) {
      onSubmit(values as Data, operationState);
    }
  };

  // 上传按钮
  const handleUploadChange = (info: uploadInfo): void => {
    // eslint-disable-next-line no-nested-ternary
    const urlInfo = info.param === 'showimg' 
      ? { showimg: info.url }
      : info.param === 'wximg'
      ? { wximg: info.url } : {h5img: info.url}

    form.setFieldsValue(urlInfo)
  }

  // 表单footer按钮字段显示
  const modalFooter = done
    ? { footer: null, onCancel: onDone }
    : { okText: '保存', onOk: handleSubmit, onCancel };

  // 弹窗窗口信息展示
  const getModalContent = () => {
    if (done) {
      return (
        <Result
          status="success"
          title={`${current ? '编辑' : '添加'}成功`}
          extra={
            <Button type="primary" onClick={onDone}>
              知道了
            </Button>
          }
          className={styles.formResult}
        />
      );
    }

    // 图片验证判断
    const ImgFun = (pam: any, type: string): {url?: string, uid?: string} => {
      return pam && !isNull(pam[type])
        ? {url: pam[type], uid: pam.id}
        : {}
    }

    // 定义显示图片列表
    const [
      showimgInfo, wximgInfo, h5imgInfo
    ] = [
      ImgFun(current, 'showimg'),
      ImgFun(current, 'wximg'),
      ImgFun(current, 'h5img'),
    ]

    // 开关状态判断
    const onLineChange = (sta: boolean): void => {
      setOnlineSta(sta)
      if(current) {
        const currOnline = sta ? 'on' : 'off'
        current.online = currOnline
        form.setFieldsValue({ online:  currOnline})
      }
    }

    // 表单初始化默认状态设置
    const formInitState = {
      state: 'default',
      type: '0',
      online: true
    }
    
    // VeriFun 此处为默认， 如需满足个人需求，请在函数里配置扩展
    return (
      <Form
        {...formLayout}
        form={form}
        onFinish={handleFinish}
        initialValues={formInitState}
      >
        <Form.Item
          name="type"
          label="活动类型"
          rules={[VeriFun(true)]}
        >
          <Radio.Group>
            {
              typeArr.map(item => (
                <Radio.Button key={item.val} value={item.val}>{item.txt}</Radio.Button>
              ))
            }
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="online"
          label="上线状态"
          rules={[VeriFun(true)]}
        >
          <Switch
            checked={onlineSta}
            checkedChildren={onlineArr[0]}
            unCheckedChildren={onlineArr[1]}
            onClick={onLineChange}
          />
        </Form.Item>
        <Form.Item
          name="position"
          label="顺序"
          rules={[VeriFun(true, 'position')]}
        >
          <Input placeholder="请输入顺序" />
        </Form.Item>
        <Form.Item
          name="href"
          label="链接地址"
          rules={[VeriFun(true, 'href')]}
        >
          <Input placeholder="请输入链接地址" />
        </Form.Item>
        <Form.Item
          name="showimg"
          label="展示图上传"
          rules={[VeriFun(true, 'showimg')]}
        >
          <UploadShowImg 
            upAction={UploadAction}
            handleChange= {handleUploadChange}
            imgInfo={showimgInfo}
            visible={visible}
            type='showimg'
          />
        </Form.Item>
        <Form.Item
          name="wximg"
          label="海报二维码"
          rules={[VeriFun(false, 'wximg')]}
        >
          <UploadShowImg 
            upAction={UploadAction}
            handleChange= {handleUploadChange}
            imgInfo={wximgInfo}
            visible={visible}
            type='wximg'
          />
        </Form.Item>
        <Form.Item
          name="h5img"
          label="h5二维码"
          rules={[VeriFun(false, 'h5img')]}
        >
          <UploadShowImg 
            upAction={UploadAction}
            handleChange= {handleUploadChange}
            imgInfo={h5imgInfo}
            visible={visible}
            type='h5img'
          />
        </Form.Item>
        <Form.Item
          name="des"
          label="文案描述"
          rules={[Object.assign(VeriFun(true, 'des'), {min: 5})]}
        >
          <TextArea rows={2} placeholder="请输入至少五个字符" />
        </Form.Item>
        <Form.Item
          name="state"
          label="活动状态"
          rules={[VeriFun(true)]}
        >
          <Radio.Group>
            {
              stateArr.map(item => (
                <Radio.Button key={item.val} value={item.val}>{item.txt}</Radio.Button>
              ))
            }
          </Radio.Group>
        </Form.Item>
      </Form>
    );
  };

  // forceRender 强制渲染 Modal
  // getContainer 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom
  return (
    <Modal
      getContainer={false}
      forceRender
      title={done ? null : `活动${current ? '编辑' : '添加'}`}
      className={styles.standardListForm}
      width={640}
      bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
      visible={visible}
      cancelText="取消"
      {...modalFooter}
    >
      {getModalContent()}
    </Modal>
  );
};

export default OperationModal;
