import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native';

import {
    ContainerPost, PostFooter, Author, Avatar, Picture, Like, TextDescription, PostHeader,
    UserInfo, PostInfo, PostMore, ImageTouchable, TextStrong
} from './styles';


export default function Feed() {
    const posts = [
        {
            id: '1',
            author: 'cristiano',
            avatar_url: 'https://instagram.fbsb14-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67310557_649773548849427_4130659181743046656_n.jpg?_nc_ht=instagram.fbsb14-1.fna.fbcdn.net&_nc_ohc=R6VJeF3j0c0AX9H9mln&oh=2f69406ee0e91f20260cfc5dd676c68f&oe=5ECCF153',
            picture_url: 'https://www.vip.pt/sites/default/files/styles/slider/public/vip-pt-47025-noticia-cristiano-ronaldo-de-bracos-abertos-deixa-conselho-aos-fas.jpg?itok=QCRcyhJd',
            likes: 'milhares de pessoas',
            description: 'Never forget where you came from 🙏 Home sweet home 💙'
        },
        {
            id: '2',
            author: 'neymarjr',
            avatar_url: 'https://instagram.fbsb14-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87604026_178684873552764_4834091657081126912_n.jpg?_nc_ht=instagram.fbsb14-1.fna.fbcdn.net&_nc_ohc=fPQ3uw3yA4EAX_dxBY-&oh=abdca7ed2051a6269e41e802e687771d&oe=5ECBB28D',
            picture_url: 'https://contigo.uol.com.br/images/large/2020/04/21/neymar-posa-com-volume-gigante-na-bermuda-1234578.jpg',
            likes: 'milhares de pessoas',
            description: 'One more day 💪🏽 keep strong and stay safe 🙏🏽'
        },
        {
            id: '3',
            author: 'loemessi',
            avatar_url: 'https://instagram.fbsb14-1.fna.fbcdn.net/v/t51.2885-19/s150x150/43818140_2116018831763532_3803033961098117120_n.jpg?_nc_ht=instagram.fbsb14-1.fna.fbcdn.net&_nc_ohc=Tsfmu1EMwEAAX-X1-gB&oh=b67b06ad1f9db95f30bc84e60426470f&oe=5ECBF70A',
            picture_url: 'https://dynhb2kccft5e.cloudfront.net/uploads/noticias/lg-b56f5ade-4860-426b-8041-50eb967bf5fc.jpg',
            likes: 'milhares de pessoas',
            description: 'Gracias por todo, míster. Seguro que te irá genial allá donde vayas porque, además de ser un gran profesional, sos una magnífica persona. Mucha suerte y un abrazo grande.'
        }
    ]

    return (
        <FlatList
            data={posts}
            keyExtractor={post => post.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: post }) => (
                <ContainerPost>
                    <PostHeader>
                        <UserInfo>
                            <Avatar source={{ uri: post.avatar_url }} />
                            <Author>{post.author}</Author>
                        </UserInfo>
                        <View>
                            <TouchableOpacity>
                                <Feather name='more-vertical' size={25} color='#000' />
                            </TouchableOpacity>
                        </View>
                    </PostHeader>
                    <Picture source={{ uri: post.picture_url }} />
                    <PostFooter>
                        <PostInfo>
                            <PostMore>
                                <ImageTouchable>
                                    <Feather name='heart' size={25} color='#000' />
                                </ImageTouchable>
                                <ImageTouchable>
                                    <Feather name='message-circle' size={25} color='#000' />
                                </ImageTouchable>
                                <ImageTouchable>
                                    <Feather name='send' size={25} color='#000' />
                                </ImageTouchable>
                            </PostMore>
                            <View>
                                <TouchableOpacity>
                                    <Feather name='bookmark' size={25} color='#000' />
                                </TouchableOpacity>
                            </View>
                        </PostInfo>
                        <Like>
                            <Text>Curtido por </Text>
                            <TextStrong>{post.likes}</TextStrong>
                        </Like>
                        <View>
                            <TextDescription>
                                <Author>{post.author} </Author>
                                {post.description}
                            </TextDescription>
                        </View>
                    </PostFooter>
                </ContainerPost>
            )}
        />
    );
}