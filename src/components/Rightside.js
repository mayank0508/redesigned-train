import styled from 'styled-components';

const Rightside = props => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to you feed</h2>
          <span>🪐</span>
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#blowit</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
              <a>
                  <Avatar />
              </a>
              <div>
                  <span>#Video</span>
                  <button>Follow</button>
              </div>
          </li>
        </FeedList>
<Recommendations>
    View all recommendations ➡
</Recommendations>
      </FollowCard>
      <BannerCard>
          <img src = "images/photoshop.png" alt="" />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: Rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: Black;
`;

const FeedList = styled.ul`
 margin-top: 16px;
 li {
     display: flex;
     align-items: center;
     margin: 12px 0;
     position: relative;
     font-size: 14px;
     & > div {
         display: flex;
         flex-direction: column;
     }

     button {
         background-color: transparent;
         color: black;
         box-shadow: inset 0 0 0 1px #bfff00;
         padding: 15px;
         align-items: center;
         border-radius: 30px;
         box-sizing: border-box;
         font-weight: bold;
         display: inline-flex;
         justify-content: center;
         max-height: 32px;
         max-width: 1128px;
         text-align: center;
         outline: none;

     }
 }
`;

const Avatar = styled.div`
background-image: url("http://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width: 48px;
height: 48px;
margin-right: 8px;
`;

const Recommendations = styled.a`
color: black;
display: flex;
align-items: center;
font-size: 15px;
`;

const BannerCard = styled(FollowCard)`

`;

export default Rightside;
