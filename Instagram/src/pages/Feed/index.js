import React from 'react';

import { Container } from './styles';

import Posts from '../../components/Feed/Posts';

export default function Feed() {
    return (
        <Container>
            <Posts />
        </Container>
    );
}