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
                    <span>Groups 👨‍👨‍👦‍👦</span>
                </a>
                <a>
                    <span>
                        Events 🌲
                        <span>➕</span>
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags 🤘</span>
                </a>
                <a>
                    <span> Discover more 📡</span>
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
background-color: black;
border-radius: 10px;
transition: box-shadow 83ms;
position : relative;
border: black;
box-shadow: 0 0 0 2px;
`;

const UserInfo = styled.div`
border-bottom: 1px solid #ffee00;
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
 background-color: #ffee00;
 background-position: center;
 background-size: 60%;
 background-repeat:  no-repeat;
 border: 2px solid black;
 border-radius: 100px;
 margin: -38px auto 12px;

`;

const Link = styled.div`
font-size: 16px;
line-height: 1.5;
font-weight: bold;
color: #ffee00;

`;

const AddPhotoText = styled.div`
color: #ffee00;
`;

const Widget = styled.div`
border-bottom: 1px solid #ffee00;
padding-top: 12px;
padding-bottom: 12px;

& > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
    background-color: #ffee00; 
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
                    color: white;
                }
                &:nth-child(2) {
                    color: white;
                }
            }
        }

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
    color: white
}

&:hover {
  background-color: #ffee00;
 
}
`;

const CommunityCard = styled(ArtCard)`
padding: 8px 0 0;
text-align: left;
display: flex;
flex-direction: column;
a {
    color: white;
    padding:  4px 12px 4px 12px;
    font-size: 16px;

&:hover {
    color: #ffee00;
}

span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

&:last-child {
    color: white;
    text-decoration: none;

    border-top: 1px solid #ffee00;
    padding: 12px;
    &:hover {
        background-color: #ffee00
    }
  }
}
`;



export default Leftside;