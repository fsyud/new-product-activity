import React, { FC, useEffect } from 'react';
import {
  Modal, Result, Button, Form, Input,
} from 'antd';
import isNull from 'lodash/isNull'
import VeriFun from '@/utils/common/verify'
import UploadShowImg from '@/components/UploadShowImg';
import { uploadInfo } from '@/utils/common/variable';
import { UploadAction } from '@/utils/common/constant'
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

const OperationModal: FC<OperationModalProps> = (props) => {
  const [form] = Form.useForm();

  const { done, visible, current, onDone, onCancel, onSubmit } = props;

  useEffect(() => {
    if (form && !visible) {
      form.resetFields();
    }
  }, [props.visible]);

  useEffect(() => {
    if (current) {
      form.setFieldsValue({
        ...current
      });
    }
  });

  const handleSubmit = () => {
    if (!form) return;
    form.submit();
  };

  const handleFinish = (values: { [key: string]: any }) => {
    const operationState = current ? 'edit' : 'add'

    if (onSubmit) {
      onSubmit(values as Data, operationState);
    }
  };

  const handleUploadChange = (info: uploadInfo): void => {
    // eslint-disable-next-line no-nested-ternary
    const urlInfo = info.param === 'showimg' 
      ? { showimg: info.url }
      : info.param === 'wximg'
      ? { wximg: info.url } : {h5img: info.url}

    form.setFieldsValue(urlInfo)
  }

  const modalFooter = done
    ? { footer: null, onCancel: onDone }
    : { okText: '保存', onOk: handleSubmit, onCancel };

  const formInitState = {
    state: 'default',
    type: '0'
  }

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
    
    return (
      <Form
        {...formLayout}
        form={form}
        onFinish={handleFinish}
        initialValues={formInitState}
      >
        <Form.Item
          name="href"
          label="链接地址"
          rules={[VeriFun(true, 'href')]}
        >
          <Input placeholder="请输入链接地址" />
        </Form.Item>
        <Form.Item
          name="position"
          label="当前顺序"
          rules={[VeriFun(true, 'position')]}
        >
          <Input placeholder="请输入顺序" />
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

  return (
    <Modal
      getContainer={false}
      forceRender
      title={done ? null : `Banner${current ? '编辑' : '添加'}`}
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
