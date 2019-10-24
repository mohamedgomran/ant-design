---
order: 2
title:
  zh-CN: 方向
  en-US: Direction
---

## zh-CN

这里列出了支持 `rtl` 方向的组件，您可以在演示中切换方向。

## en-US

Components which support rtl direction are listed here, you can toggle the direction in the demo.

```jsx
import {
  Input,
  Col,
  Row,
  Select,
  InputNumber,
  ConfigProvider,
  Cascader,
  Radio,
  Switch,
  Tree,
  Modal,
  Button,
} from 'antd';

import { Search as SearchIcon, Smile } from '@ant-design/icons';

const InputGroup = Input.Group;
const { Option } = Select;
const { TreeNode } = Tree;
const { Search } = Input;

const cascaderOptions = [
  {
    value: 'tehran',
    label: 'تهران',
    children: [
      {
        value: 'tehran-c',
        label: 'تهران',
        children: [
          {
            value: 'saadat-abad',
            label: 'سعادت آیاد',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: 'اردبیل',
    children: [
      {
        value: 'ardabil-c',
        label: 'اردبیل',
        children: [
          {
            value: 'primadar',
            label: 'پیرمادر',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: 'گیلان',
    children: [
      {
        value: 'rasht',
        label: 'رشت',
        children: [
          {
            value: 'district-3',
            label: 'منطقه ۳',
          },
        ],
      },
    ],
  },
];

class Page extends React.Component {
  state = { modalVisible: false };
  selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  );

  selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  // ==== Cascader ====
  cascaderFilter = (inputValue, path) => {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  };

  onCascaderChange = value => {
    console.log(value);
  };
  // ==== End Cascader ====

  // ==== Modal ====
  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };
  // ==== End Modal ====
  render() {
    return (
      <div className="direction-components example">
        <Row>
          <Col span={24}>
            <Cascader
              suffixIcon={<SearchIcon />}
              options={cascaderOptions}
              onChange={this.onCascaderChange}
              placeholder="یک مورد انتخاب کنید"
              popupPlacement={this.props.popupPlacement}
            />
            &nbsp;&nbsp;&nbsp;&nbsp; With search:
            <Cascader
              suffixIcon={<Smile />}
              options={cascaderOptions}
              onChange={this.onCascaderChange}
              placeholder="Select an item"
              popupPlacement={this.props.popupPlacement}
              showSearch={this.cascaderFilter}
            />
            &nbsp;&nbsp;
            <Switch defaultChecked />
            &nbsp;&nbsp;
            <Switch loading defaultChecked />
            &nbsp;&nbsp;
            <Switch size="small" loading />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            <Tree
              showLine
              checkable
              defaultExpandedKeys={['0-0-0', '0-0-1']}
              defaultSelectedKeys={['0-0-0', '0-0-1']}
              defaultCheckedKeys={['0-0-0', '0-0-1']}
            >
              <TreeNode title="parent 1" key="0-0">
                <TreeNode title="parent 1-0" key="0-0-0" disabled>
                  <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                  <TreeNode title="leaf" key="0-0-0-1" />
                </TreeNode>
                <TreeNode title="parent 1-1" key="0-0-1">
                  <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                </TreeNode>
              </TreeNode>
            </Tree>
          </Col>
        </Row>
        <br />
        <div>
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </InputGroup>
          <br />
          <InputGroup compact>
            <Input style={{ width: '20%' }} defaultValue="0571" />
            <Input style={{ width: '30%' }} defaultValue="26888888" />
          </InputGroup>
          <br />
          <InputGroup compact>
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input style={{ width: '50%' }} defaultValue="input content" />
            <InputNumber />
          </InputGroup>
          <br />
          <Search placeholder="input search text" enterButton="Search" size="large" />
          <br />
          <br />
          <div style={{ marginBottom: 16 }}>
            <Input
              addonBefore={this.selectBefore}
              addonAfter={this.selectAfter}
              defaultValue="mysite"
            />
          </div>
          <br />

          <Row>
            <Col span={24}>
              <Select mode="multiple" defaultValue="مورچه" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="مورچه">مورچه</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Select defaultValue="مورچه" style={{ width: 120 }} disabled>
                <Option value="مورچه">مورچه</Option>
              </Select>
              <Select defaultValue="مورچه" style={{ width: 120 }} loading>
                <Option value="مورچه">مورچه</Option>
              </Select>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="سعید">سعید</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <div>
                <Button type="primary" onClick={this.showModal}>
                  Open Modal
                </Button>
                <Modal
                  title="پنچره ساده"
                  visible={this.state.modalVisible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                </Modal>
              </div>
            </Col>
          </Row>
        </div>
        <br />
        <hr />
        <div className="grid-demo">
          <div className="code-box-demo">
            <p>
              <strong>* Note:</strong> Every calculation in RTL grid system is from right side
              (offset, push, etc.)
            </p>
            <Row>
              <Col span={8}>col-8</Col>
              <Col span={8} offset={8}>
                col-8
              </Col>
            </Row>
            <Row>
              <Col span={6} offset={6}>
                col-6 col-offset-6
              </Col>
              <Col span={6} offset={6}>
                col-6 col-offset-6
              </Col>
            </Row>
            <Row>
              <Col span={12} offset={6}>
                col-12 col-offset-6
              </Col>
            </Row>
            <Row>
              <Col span={18} push={6}>
                col-18 col-push-6
              </Col>
              <Col span={6} pull={18}>
                col-6 col-pull-18
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    direction: 'ltr',
    popupPlacement: 'bottomLeft',
  };

  changeDirection = e => {
    const directionValue = e.target.value;
    this.setState({ direction: directionValue });
    if (directionValue === 'rtl') {
      this.setState({ popupPlacement: 'bottomRight' });
    } else {
      this.setState({ popupPlacement: 'bottomLeft' });
    }
  };

  render() {
    const { direction } = this.state;
    return (
      <div>
        <div className="change-direction">
          <span style={{ marginRight: 16 }}>Change direction of components: </span>
          <Radio.Group defaultValue="ltr" onChange={this.changeDirection}>
            <Radio.Button key="ltr" value="ltr">
              LTR
            </Radio.Button>
            <Radio.Button key="rtl" value="rtl">
              RTL
            </Radio.Button>
          </Radio.Group>
        </div>
        <ConfigProvider direction={direction}>
          <Page className={direction} popupPlacement={this.state.popupPlacement} />
        </ConfigProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
.direction-components {
  padding-top: 16px;
  border-top: 1px solid #d9d9d9;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

[dir='rtl'] .example > * {
  margin-right: auto;
  margin-left: 8px;
}

.change-direction {
  margin-bottom: 16px;
}
```