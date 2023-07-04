import React, { useState, useEffect } from 'react';
import { Table, DatePicker, Button, ConfigProvider, Input, Modal, Spin, message } from 'antd';
import locale from 'antd/es/date-picker/locale/ja_JP';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Auth } from 'aws-amplify';
import ja_JP from 'antd/locale/ja_JP';
import moment from 'moment';
import 'moment/locale/ja';

moment.locale('ja');

const ItemPage = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(null);
  const [headers, setHeaders] = useState({});
  const [searchText, setSearchText] = useState('');
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const token = user.signInUserSession.idToken.jwtToken;
      setHeaders({
        Authorization: `${token}`,
      });
    };

    fetchUser();
  }, []);

  const onDateChange = dates => {
    setDate(dates);
  };

  const fetchData = async () => {
    if (date) {
      setLoading(true);
      try {
        const response = await axios.post(
          'https://gw9jr2td1f.execute-api.ap-northeast-1.amazonaws.com/staging/users',
          {
            action: 'search_date',
            date: date.format('YYYY/MM/DD 00:00'),
          },
          { headers: headers },
        );
  
        // Mapping table
        const headerMapping = {
          '発注番号': 'B_OrderNumber',
          '入荷年月日': 'E_Date',
          '仕入先ｺｰﾄﾞ': 'G_SupplierCode',
          '仕入先正式名称': 'H_supplier',
          '商品ｺｰﾄﾞ': 'L_ItemCode',
          '商品正式名称': 'M_ItemName',
          '入荷数量': 'R_qaunty',
          '入荷単位名称': 'T_unit',
          '発注備考': 'AB_detail1',
          '明細備考': 'AC_detail2'
        };
  
        const dataWithMappedColumns = response.data.Items.map(item => {
          const mappedItem = {};
          for (const key in item) {
            mappedItem[headerMapping[key] || key] = item[key];
          }
          return mappedItem;
        });
  
        setData(dataWithMappedColumns);
        setOriginalData(dataWithMappedColumns);
      } catch (err) {
        message.error('データの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSearch = () => {
    const filteredData = originalData.filter(entry =>
      Object.values(entry).some(
        v => v && v.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setData(filteredData);
  };

  const handleReset = () => {
    setData(originalData);
    setSearchText('');
  };

  const handleInputChange = e => {
    setSearchText(e.target.value);
  };

  const onSelectChange = selectedKeys => {
    setSelectedRowKeys(selectedKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const headerMapping = {
    '発注番号': 'B_OrderNumber',
    '入荷年月日': 'E_Date',
    '仕入先ｺｰﾄﾞ': 'G_SupplierCode',
    '仕入先正式名称': 'H_supplier',
    '商品ｺｰﾄﾞ': 'L_ItemCode',
    '商品正式名称': 'M_ItemName',
    '入荷数量': 'R_qaunty',
    '入荷単位名称': 'T_unit',
    '発注備考': 'AB_detail1',
    '明細備考': 'AC_detail2'
  };

  // Generate columns excluding 'id'
  const columns = Object.keys(data[0] || {})
    .filter(key => key !== 'id')
    .map(key => ({
      title: headerMapping[key] || key, // Convert header using mapping table
      dataIndex: headerMapping[key] || key, // Also convert dataIndex using mapping table
      sorter: (a, b) => a[headerMapping[key] || key].length - b[headerMapping[key] || key].length,
    }));

  return (
    <>
      <ConfigProvider locale={ja_JP}>
        <DatePicker onChange={onDateChange}  />
        <Button onClick={fetchData}>日付でデータ取得</Button>
        <Input placeholder="テーブル内を検索" value={searchText} onChange={handleInputChange} />
        <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch} onBlur={handleSearch}>
        テーブル検索
        </Button>
        <Button onClick={handleReset}>検索クリア</Button>
        <Table dataSource={data} rowKey="id" rowSelection={rowSelection} columns={columns} pagination={{ pageSize: 100 }} scroll={{ x: 800 }} />
      </ConfigProvider>
      <Modal
        visible={loading}
        title="Please wait"
        footer={null}
        closable={false}
      >
        <Spin />
      </Modal>
    </>
  );
};

export default ItemPage;
