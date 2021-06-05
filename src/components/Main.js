import styled from 'styled-components';
import PostModal from './PostModal';

const Main = props => {
  return (
    <Container>
      <ShareBox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoUrl} alt="" />
          ) : (
            <img src="/images/user.svg" alt="" />
          )}
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
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <span>❗</span>
            </button>
          </SharedActor>
          <Description>description</Description>
          <SharedImage>
            <a>
              <img src="/images/mc.jpg" alt="" />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <span>👍</span>
                <span>🔥</span>
                <span>100</span>
              </button>
            </li>
            <li>
              <a>5 discussion</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <span>👍</span>
              <span>Like</span>
            </button>
            <button>
              <span>💬</span>
              <span>Comment</span>
            </button>
            <button>
              <span>⏩</span>
              <span>Share</span>
            </button>
            <button>
              <span>📑</span>
              <span>Save</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal />
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
  background-color: black;
  border-radius: 10px;
  position: relative;
  border: black;
  box-shadow: 0 0 3px black; /*rgba(0, 0, 0 /15%), 0 0  0 1px rgba(0, 0, 0 / 20%)*/ ;
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 11px 1px 8px;
  background: black;
  div {
    button {
      outline: none;
      color: white;
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
        border: 1px solid #ffee00;
        border-radius: 35px;
        background-color: black;
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
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 11px 1px 08px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 5px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 1;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: bold;
          color: #ffee00;
        }
      }

      &:nth-child(n + 1) {
        font-size: 12px;
        color: white;
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: #ffee00;
  font-size: 15px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: transparent;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #ffee00;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8 px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: black;
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
export default Main;
