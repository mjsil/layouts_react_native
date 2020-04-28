import React from 'react';

import { FundoImagem, FundoImagemFalse, ImageProfile } from './styles';

export default function Profile() {
    return (
        <FundoImagem>
            <FundoImagemFalse>
                <ImageProfile source={{ uri: 'https://instagram.fbsb14-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67310557_649773548849427_4130659181743046656_n.jpg?_nc_ht=instagram.fbsb14-1.fna.fbcdn.net&_nc_ohc=R6VJeF3j0c0AX9H9mln&oh=2f69406ee0e91f20260cfc5dd676c68f&oe=5ECCF153' }} />
            </FundoImagemFalse>
        </FundoImagem>
    );
}