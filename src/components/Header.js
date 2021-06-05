import styled from 'styled-components';
import { connect } from 'react-redux';
import { signOutAPI } from '../actions';

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo2.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="type" placeholder="Search" />
          </div>
          <SearchIcon>
            <span>🔎</span>
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <span>🏠</span>
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <span>💌</span>
                <span>Message</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <span>🌍</span>
                <span>Notifications</span>
              </a>
            </NavList>
              
            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>

              <SignOut onClick={() => props.signOut()}>
                <a>Sign out 👋</a>
              </SignOut>
            </User>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  background-color: black;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: 3px solid black;
      border-radius: 20px;
      box-shadow: none;
      background-color: #fee00e;
      color: black;
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: black;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: black;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: black;
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: bold;
    justify-content: center;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: #ffee00;
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      font-weight: bold;
      min-width: 130px;
    }
  }
  &:hover,
  &.active {
    a {
      span {
        color: white;
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: black;
  color: #c4ff14;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
