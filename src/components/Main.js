import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostModal from './PostModal';
import { connect } from 'react-redux';
import { getArticlesAPI } from '../actions';
import ReactPlayer from 'react-player';

const Main = props => {
  const [showModal, setShowModal] = useState('close');

  useEffect(() => {
    props.getArticles();
  });

  const handleClick = e => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case 'open':
        setShowModal('close');
        break;
      case 'close':
        setShowModal('open');
        break;
      default:
        setShowModal('close');
        break;
    }
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <p>There are no articles.</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post !
              </button>
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
          <Content>
            {props.loading && <span>⌛</span>}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <span>❗</span>
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImage>
                    <a>
                      {
                      !article.sharedImg && article.videos ? (
                        <ReactPlayer width={'100%'} url={article.video} />
                      ) : (
                        article.sharedImg && <img src={article.sharedImg}  alt ="" />
                      )}
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
                      <a>{article.comments}</a>
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
              ))}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
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
      border: none;
      background-color: white;
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
    border: none;
    background-color: white;
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > span {
    width: 38px;
  }
`;

const mapStateToProps = state => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles
  };
};

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticlesAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
