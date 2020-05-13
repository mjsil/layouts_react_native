import styled from 'styled-components/native';

export const Container = styled.View`
    background: #fff;
`;

export const Post = styled.View`

`;

export const PostHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 7px 12px;
    align-items: center;

    border-bottom-width: 1px;
    border-color: #eee;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Author = styled.Text`
    font-weight: bold;
    color: #000;
`;

export const Avatar = styled.Image`
    height: 32px;
    width: 32px;
    border-radius: 16px;
    margin-right: 12px;
`;

export const Icon = styled.View`

`;

export const IconOpacity = styled.TouchableOpacity`

`;

export const Picture = styled.Image`
    width: 100%;
    height: 400px;
`;


export const PostFooter = styled.View`
    padding: 15px;
`;

export const PostInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const PostMore = styled.View`
    flex-direction: row;
`;

export const IconTouchable = styled.TouchableOpacity`
    padding-right: 14px;
`;

export const Like = styled.View`
    flex-direction: row;
    padding: 8px 0 2px;
`;

export const LikeLabel = styled.Text`
    font-weight: bold;
    color: #000;
`;

export const Description = styled.View`

`;

export const DescriptionLabel = styled.Text`
    line-height: 18px;
`;