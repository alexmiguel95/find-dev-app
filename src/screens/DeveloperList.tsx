import { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import { IDeveloper } from '../models/developer';
import developerService from '../service/developer.service';

const DeveloperList = () => {
    const [developerList, setDeveloperList] = useState<IDeveloper[]>([]);

    useEffect(() => {
        developerService.getAllDeveloper().then(setDeveloperList);
    }, []);

    // return <FlatList data={developerList} renderItem={item => <>{item.item.name}</>} />;
    return <Text>Alex Miguel</Text>
};

export default DeveloperList;
