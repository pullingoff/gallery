import React from "react";
import styled from "styled-components";
import { IPhoto } from "../types";

// 컬러에 보색으로 글씨 보이게 하기!
const Photo = ({...props}: IPhoto) => {
    const imgUrl = props.urls.small || ''
    const author = props.user.name
    const authorImg = props.user.profile_image.small
    const authorPortFolio = props.user.portfolio_url
    return (
        <Wrapper color={props.color}>
            {/* <InnerWrapper> */}
                <Img alt={props.alt_description || ''} 
                    src={imgUrl} />
                <DetailWrapper>
                    <Detail>
                        <AuthorDetail href={authorPortFolio} 
                            target='_blank' rel="noreferrer">
                            <img src={authorImg} alt={author} />
                            <br/>
                            <span>{author}</span>
                        </AuthorDetail>
                    </Detail>
                </DetailWrapper>
            {/* </InnerWrapper> */}
        </Wrapper>
    )
}

const Wrapper = styled.li`
max-height: 30vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props)=>props.color};
&:hover {
    > img {
        opacity: 0;
    }
    > div {
        opacity: 1;
    }
}
position: relative; // 오버레이 위함
`

const Img = styled.img`
opacity: 1;
transition: .5s ease;
backface-visibility: hidden;
margin: auto;
max-height: inherit;
max-width: ${({theme}) => theme.photo.maxWidth}; 
`

const DetailWrapper = styled.div`
transition: .5s ease;
opacity: 0;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
text-align: center;
`

const Detail = styled.div`
color: white;
font-size: 16px;
font-weight: bold;
`

const AuthorDetail = styled.a`
color: white;
cursor: pointer;

&:hover { 
    
    font-size: 1.1rem;
}
`


export default Photo;