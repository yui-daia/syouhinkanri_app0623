import React, { useState, useEffect } from 'react';
import { Table, DatePicker, Button, ConfigProvider, Input } from 'antd';
import locale from 'antd/es/date-picker/locale/ja_JP';
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
      try {
        const response = await axios.post(
          'https://gw9jr2td1f.execute-api.ap-northeast-1.amazonaws.com/staging/users',
          {
            action: 'search_date',
            date: date.format('YYYY-MM-DD'),
          },
          { headers: headers },
        );
        setData(response.data.Items);
        setOriginalData(response.data.Items);
      } catch (err) {
        console.error(err);
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

  const columns = Object.keys(data[0] || {}).map(key => ({
    title: key,
    dataIndex: key,
    sorter: (a, b) => a[key].length - b[key].length,
  }));

  return (
    <>
      <ConfigProvider locale={ja_JP}>
        <DatePicker onChange={onDateChange}  />
        <Button onClick={fetchData}>日付でデータ取得</Button>
        <Input placeholder="テーブル内を検索" value={searchText} onChange={handleInputChange} />
        <Button onClick={handleSearch}>テーブル検索</Button>
        <Button onClick={handleReset}>検索クリア</Button>
        <Table dataSource={data} columns={columns} pagination={{ pageSize: 100 }} />
      </ConfigProvider>
    </>
  );
};

export default ItemPage;
