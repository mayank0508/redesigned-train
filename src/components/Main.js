import styled from 'styled-components';

const Main = props => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
            <img src="/images/user.svg" alt="" />
            <button>Start a post !</button>
        </div>
        <div>
          <button>
            <span>📷</span>
            <span>Photo</span>
          </button>

          <button>
            <span>🎥</span>
            <span>Video</span>
          </button>

          <button>
            <span>🌆</span>
            <span>Events</span>
          </button>

          <button>
            <span>📃</span>
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: Main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 0 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: black;
      font-size: 15px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    &:first-child {
        display: flex;
        align-items: center;
        padding: 8px 16px 0px 16x;
        img {
            width: 48px;
            border-radius: 25px;
            margin-right: 8px;
            }

        button {
            margin: 4px 0;
            flex-grow: 1;
            padding-left: 16px;
            border: 1px solid #bfff00;
            border-radius: 35px;
            background-color: white;
            text-align: left;
        }
    }

  &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
          span {
              margin: 0 4px 0 -2px;
          }
      }
  }
`;

export default Main;
