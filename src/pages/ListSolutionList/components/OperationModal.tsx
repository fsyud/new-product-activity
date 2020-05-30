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

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const typeArr: Array<{val: string, txt: string}> = [
  { val: '0', txt: '社招解决方案' },
  { val: '1', txt: '校招解决方案' }
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
        ...current
      });
    }
  });

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

  // 开关状态判断
  const onLineChange = (sta: boolean): void => {
    setOnlineSta(sta)
    if(current) {
      const currOnline = sta ? 'on' : 'off'
      current.online = currOnline
      form.setFieldsValue({ online:  currOnline})
    }
  }

  // 表单footer按钮字段显示
  const modalFooter = done
    ? { footer: null, onCancel: onDone }
    : { okText: '保存', onOk: handleSubmit, onCancel };

  // 表单初始化默认状态设置
  const formInitState = {
    state: 'default',
    type: '0'
  }

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

    const ImgFun = (pam: any, type: string): {url?: string, uid?: string} => {
      return pam && !isNull(pam[type])
        ? {url: pam[type], uid: pam.id}
        : {}
    }

    const [
      showimgInfo
    ] = [
      ImgFun(current, 'showimg'),
    ]
    
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
          label="类型"
          rules={[VeriFun(true, 'sotype')]}
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
            // defaultChecked={onlineSta}
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
          name="title"
          label="标题"
          rules={[VeriFun(true, 'sotitle')]}
        >
          <Input placeholder="请输入标题" />
        </Form.Item>
        <Form.Item
          name="link1"
          label="按钮1名称"
          rules={[VeriFun(true, 'link1')]}
        >
          <Input placeholder="请输入链接地址" />
        </Form.Item>
        <Form.Item
          name="link1href"
          label="按钮1链接"
          rules={[VeriFun(true, 'link1href')]}
        >
          <Input placeholder="请输入链接1地址" />
        </Form.Item>
        <Form.Item
          name="link2"
          label="按钮2名称"
          rules={[VeriFun(false, 'link')]}
        >
          <Input placeholder="请输入链接2名称" />
        </Form.Item>
        <Form.Item
          name="link2href"
          label="按钮2链接"
          rules={[VeriFun(false, 'link')]}
        >
          <Input placeholder="请输入链接2地址" />
        </Form.Item>
        <Form.Item
          name="link3"
          label="按钮3名称"
          rules={[VeriFun(false, 'link')]}
        >
          <Input placeholder="请输入链接3名称" />
        </Form.Item>
        <Form.Item
          name="link3href"
          label="按钮3链接"
          rules={[VeriFun(false, 'link')]}
        >
          <Input placeholder="请输入链接3地址" />
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
        
      </Form>
    );
  };

  // forceRender 强制渲染 Modal
  // getContainer 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom
  return (
    <Modal
      getContainer={false}
      forceRender
      title={done ? null : `最新解决方案${current ? '编辑' : '添加'}`}
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
