import styled from 'styled-components';

const PostModal = props => {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a new post</h2>
          <button>
            <span>❌</span>
          </button>
        </Header>
      </Content>
    </Container>
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
padding: 16px 2px;
border-bottom: 3px solid black;
font-size: 16px;
line-height: 1.5;
color: black;
justify-content: space-between;
display: flex;
align-items: center;
button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: black;
    border-radius: 120px;
}
`;


export default PostModal;
