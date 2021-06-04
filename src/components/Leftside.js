import styled from 'styled-components'

const Leftside = (props) => {
     return (
    <Container>
        <ArtCard>
            <UserInfo>
                <CardBackground />
                    <a>
                        <Photo />
                            <Link>WELCOME !</Link>
                    </a>
                        <a>
                            <AddPhotoText>Add Photo</AddPhotoText>
                        </a>
            </UserInfo>
            <Widget>
                <a>
                    <div>
                    <span>Follow ⭐</span>
                    <span>The people who inspire you</span>
                    </div>
                    <span>🐱‍👤</span>
                </a>
            </Widget>
            <Item>
                <span>
                    <a>Saved 📑</a>
                </span>
            </Item>
        </ArtCard>

            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <span>➕</span>
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span> Discover more !</span>
                </a>
            </CommunityCard>
    </Container>
    );
};

const Container = styled.div`
grid-area: Leftside;
`;

const ArtCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 10px;
transition: box-shadow 83ms;
position : relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
border-bottom: 1px solid #ffd5d5;
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
`;

const CardBackground = styled.div`
background: url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
height: 54px;
margin: -12px -12px 0;

`;

const Photo = styled.div`
 box-shadow: none;
 background-image: url("/images/photo.svg");
 width: 72px;
 height: 72px;
 box-sizing: border-box;
 background-clip: content-box;
 background-color: #ffff;
 background-position: center;
 background-size: 60%;
 background-repeat:  no-repeat;
 border: 2px solid #ff1e1e;
 border-radius: 100px;
 margin: -38px auto 12px;

`;

const Link = styled.div`
font-size: 16px;
line-height: 1.5;
font-weight: bold;
color: rgb(0,0,0,0.9);

`;

const AddPhotoText = styled.div`
color: #d53562;
`;

const Widget = styled.div`
border-bottom: 1px solid #ff5d5d;
padding-top: 12px;
padding-bottom: 12px;

& > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
    background-color: #ff9a9a; 
}

    div {
            display: flex;
            flex-direction: column;
            text-align: left;
            span {
                font-size: 16px;
                font-weight: bold;
                line-height: 1.5em;
                &:first-child {
                    color: #ff1e1e;
                }
                &:nth-child {
                    color: #ff5d5d;
                }
            }
        }

    }


    svg {
        color: rgba(0,0,0,0.5);
    }
`;

const Item = styled.a`
border-color: rgba(0, 0, 0, 0.8);
text-align: left;
padding: 10px;
font-size: 15px;
display: block;
span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    
    svg {
        color: rgba(0,0,0,0.5);
    }
}

&:hover {
  background-color: #ffd5d5;
}
`;

const CommunityCard = styled(ArtCard)`
padding: 8px 0 0;
text-align: left;
display: flex;
flex-direction: column;
a {
    color: black;
    padding:  4px 12px 4px 12px;
    font-size: 16px;

&:hover {
    color: #ff5d5d;
}

span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

&:last-child {
    color: #4e0000;
    text-decoration: none;

    border-top: 1px solid #ff5d5d;
    padding: 12px;
    &:hover {
        background-color: #ff5d5d
    }
  }
}
`;



export default Leftside;