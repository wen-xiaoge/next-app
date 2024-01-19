import React, {useState} from 'react';
import { Flex, Input, Select, List } from 'antd';
import axiosInstance from '../utils/api'

const { Option } = Select;
const Novel = () => {
    const [selectValue, setSelectValue] = useState('title');
    const [searchValue, setSearchValue] = useState('')
    const [list, setList] = useState([])
    const selectChange = (value: string) => {
        setSelectValue(value)
        setSearchValue('')
    }
    const selectBefore = (
        <Select value={selectValue} onChange={selectChange}>
          <Option value="title">名称</Option>
          <Option value="author">作者</Option>
        </Select>
    );
    
    const inputSearsh = (e: string) => {
        if (e === '') {
            return
        }
        axiosInstance
            .get(`/fiction/search/${selectValue}/${e}/1/10`)
            .then(res => {
                setList(res.data)
                console.log(res, 'rr');
            })  
    }
    return (
        <div>
            <Flex justify={'center'}>
                <Input.Search
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    addonBefore={selectBefore}
                    placeholder={'请输入小说名称或作者'}
                    onSearch={inputSearsh}
                    style={{width: 320}}
                    allowClear
                />
            </Flex>
            <div style={{width: 500, margin: '0 auto'}}>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item
                            key={item.title}
                            extra={
                                <img
                                    width={80}
                                    alt="logo"
                                    src={item.cover}
                                    />
                            }
                            >
                            <List.Item.Meta
                                title={<div>{item.title}</div>}
                                description={item.descs}
                            />
                            作者：{item.author} 分类：{item.fictionType}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Novel;