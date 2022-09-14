import { useEffect } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import developerService from '../service/developer.service';

const DeveloperList = () => {
    useEffect(() => {
        developerService.getAllDeveloper().then(reponse => console.log('reponse', reponse));
    }, []);

    return <></>;
};

export default DeveloperList;
