import styled from 'styled-components';
import { useState } from 'react';

const PostModal = props => {
  const [editorText, setEditorText] = useState('');
  const [shareImage, setShareImage] = useState('');

  const handleChange = e => {
    const image = e.target.files[0];

    if (image === '' || image === undefined) {
      alert(`not a image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const reset = e => {
    setEditorText('');
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === 'open' && (
        <Container>
          <Content>
            <Header>
              <h2>Create a new post</h2>
              <button onClick={event => reset(event)}>
                <span>❌</span>
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={e => setEditorText(e.target.value)}
                  placeholder="Feeling Dangerous today ?"
                  autoFocus={true}
                />
                <UploadImage>
                  <input
                    type="file"
                    accept="image/gif, image/jpeg, image/png"
                    name="image"
                    id="file"
                    style={{ display: 'none' }}
                    onChange={handleChange}
                  />
                  <p>
                    <table htmlFor="file">Select an </table>
                  </p>
                </UploadImage>
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAsset>
                <AssetButton>
                  <span>📸</span>
                </AssetButton>
                <AssetButton>
                  <span>🎥</span>
                </AssetButton>
              </AttachAsset>
              <SharedComment>
                <AssetButton>
                  <span>💬</span>
                  wanna say something
                </AssetButton>
              </SharedComment>

              <PostButton disabled={!editorText ? true : false}>
                {' '}
                Post
              </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.85);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #ffee00;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 3px solid black;
  font-size: 16px;
  line-height: 1.5;
  font-weight: bold;
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: black;
    border-radius: 120px;
  }
  span {
    pointer-events: none;
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24 px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50px;
  }
  span {
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
`;

const AttachAsset = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const SharedComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid black;
  ${AssetButton} {
    svg {
      margin-right: 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  font-weight: bold;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${props => (props.disabled ? '#ff1e1e' : '#ffee00')};
  color: ${props => (props.disabled ? '#ff1e1e' : 'black')};
  &:hover {
    background-color: ${props => (props.disabled ? '#ff1e1e' : '#ffee00')};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div``;

export default PostModal;
