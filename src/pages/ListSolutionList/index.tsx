import React, { FC, useRef, useState, useEffect } from 'react';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  List,
  Menu,
  Modal,
  Radio,
  Row,
  Tooltip
} from 'antd';

import { findDOMNode } from 'react-dom';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { solHeadList } from '@/utils/common/constant'
import OperationModal from './components/OperationModal';
import { StateType } from './model';
import { Data } from './data.d';
import styles from './style.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;

interface ListActivityListProps {
  listSolutionList: StateType;
  dispatch: Dispatch;
  loading: boolean;
}

const Info: FC<{
  title: React.ReactNode;
  value: React.ReactNode;
  bordered?: boolean;
}> = ({ title, value, bordered }) => (
  <div className={styles.headerInfo}>
    <span>{title}</span>
    <p>{value}</p>
    {bordered && <em />}
  </div>
);

// 定义函数组件行内列表内容
const ListContent = ({
  data: {type, position, link1, link1href ,online},
}: {
  data: Data;
}) => (
  <div className={styles.listContent}>
    <div className={styles.listContentItem}>
      <span>上线状态</span>
      <p>{online === 'on' ? '上线' : '下线'}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>类型</span>
      <p>{type === '0' ? '社招解决方案' : '校招解决方案'}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>当前顺序</span>
      <p>{position}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>按钮1名称</span>
      <p>{link1}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>按钮1链接</span>
      <p>
        <Tooltip placement="leftBottom" title={link1href}>
          <a href={link1href}>{link1href}</a>
        </Tooltip>  
      </p>
    </div>
  </div>
);

// ListBasicListProps 类型参数和参数
export const ListSolutionList: FC<ListActivityListProps> = (props) => {
  const addBtn = useRef(null);

  const {
    loading,
    dispatch,
    listSolutionList: { prolist }
  } = props;


  // 设置弹窗默认状态值
  const [done, setDone] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<Data> | undefined>(undefined);

  const [currList, setCurrList] = useState<Data[]>([]);
  
  // 表头列表状态定义
  const [headRadioVal, setHeadRadioVal] = useState<string>('default');

  // 全局刷新列表
  const RefreshList = (): void => {
    dispatch({
      type: 'listSolutionList/proFetch',
      payload: {},
    });
  }

  // react hooks 更改函数组件的状态值
  useEffect(() => {
    RefreshList()
  }, [1]);

  // 初始化列表
  useEffect(() => {
    setCurrList(prolist)
  }, [prolist]);

  const paginationProps = {
    showSizeChanger: true, 
    total: prolist.length,
    defaultPageSize: 10,
  };

  const showModal = () => {
    setVisible(true);
    setCurrent(undefined);
  };

  const showEditModal = (item: Data) => {
    setVisible(true);
    setCurrent(item);
  };

  const deleteItem = (id: number) => {
    dispatch({
      type: 'listSolutionList/ProDelete',
      payload: { id },
    });

    setHeadRadioVal('default')
  };

  // 表头过滤 event
  const onlineStaFileter = (e: any): void => {
    const curList = prolist.filter((s) => {
      return e.target.value === 'default' ? true : s.type === e.target.value
    })
    setHeadRadioVal(e.target.value)
    setCurrList(curList)
  }

  // 删除函数
  const editAndDelete = (key: string, currentItem: Data) => {
    if (key === 'edit') showEditModal(currentItem);
    else if (key === 'delete') {
      Modal.confirm({
        title: '删除',
        content: '确定删除该活动么？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          deleteItem(currentItem.id)
        }
      });
    }
  };

  const extraContent = (
    <div className={styles.extraContent}>
      <RadioGroup
        value={headRadioVal}
        onChange={onlineStaFileter}
      >
        {solHeadList.map(item => (
          <RadioButton key={item.key} value={item.val}>
            {item.txt}
          </RadioButton>
        ))}
      </RadioGroup>
      <Search className={styles.extraContentSearch} placeholder="请输入" onSearch={() => ({})} />
    </div>
  );

  const MoreBtn: React.FC<{
    item: Data;
  }> = ({ item }) => (
    <Dropdown
      overlay={
        <Menu onClick={({ key }) => editAndDelete(key, item)}>
          <Menu.Item key="delete">删除</Menu.Item>
        </Menu>
      }
    >
      <a>
        更多 <DownOutlined />
      </a>
    </Dropdown>
  );

  const setAddBtnblur = () => {
    if (addBtn.current) {
      // eslint-disable-next-line
      const addBtnDom = findDOMNode(addBtn.current) as HTMLButtonElement;
      setTimeout(() => addBtnDom.blur(), 0);
    }
  };

  const handleDone = () => {
    setAddBtnblur();
    setDone(false);
    setVisible(false);
  };

  const handleCancel = () => {
    setAddBtnblur();
    setVisible(false);
  };

  const handleSubmit = (values: Data, operation: string) => {
    const id = current ? current.id : '';
    setAddBtnblur();
    setDone(true);
    if(operation === 'add') {
      dispatch({
        type: 'listSolutionList/ProSubmit',
        payload: { id, ...values },
      });
    } else {
      dispatch({
        type: 'listSolutionList/proEdit',
        payload: { id, ...values },
      });
    }

    setHeadRadioVal('default')
  };

  return (
    <div>
      <PageHeaderWrapper>
        <div className={styles.standardList}>
          <Card bordered={false}>
            <Row>
              <Col sm={8} xs={24}>
                <Info title="项目数" value={prolist.length} bordered />
              </Col>
            </Row>
          </Card>
          <Card
            className={styles.listCard}
            bordered={false}
            title="基本列表"
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
            extra={extraContent}
          >
            <Button
              type="dashed"
              style={{ width: '100%', marginBottom: 8 }}
              onClick={showModal}
              // ref={addBtn}
            >
              <PlusOutlined />
              添加
            </Button>
            <List
              size="large"
              rowKey="id"
              loading={loading}
              pagination={paginationProps}
              dataSource={currList}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <a
                      key="edit"
                      onClick={(e) => {
                        e.preventDefault();
                        showEditModal(item);
                      }}
                    >
                      编辑
                    </a>,
                    <MoreBtn key="more" item={item} />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar src={item.showimg} shape="square" size="large" />
                    }
                    title={item.title}
                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </PageHeaderWrapper>
      
      {/* 弹窗组件 */}
      <OperationModal
        done={done}
        current={current}
        visible={visible}
        onDone={handleDone}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default connect(
  ({
    listSolutionList,
    loading,
  }: {
    listSolutionList: StateType;
    loading: {
      models: { [key: string]: boolean };
    };
  }) => ({
    listSolutionList,
    loading: loading.models.listSolutionList,
  }),
)(ListSolutionList);
