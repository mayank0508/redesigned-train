import styled from 'styled-components';

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
                    <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a>
                                <img src="/images/nav-home1.svg" alt="" />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-messaging.svg" alt="" />
                                <span>Message</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-notifications.svg" alt="" />
                                <span>notifications</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-work.svg" alt="" />
                                <span>Work</span>
                            </a>
                        </NavList>
                    </NavListWrap>
                    </Nav>
                </Content>
        </Container>
    );
};

const Container = styled.div`
 background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100; 
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
        border-radius: 10px;
        box-shadow: none;
        background-color: #eaeaea;
        color: rgba(0, 0, 0, 0.9);
        width: 218px;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height: 34px;
        border-color: #ff1e1e;
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
    background: white;
    width: 100%;
}
`;


const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;

.active {
    span:after {
        content: "";
        transform: scaleX(1);
        border-bottom: 5px solid var(--white, #fff);
        bottom: 0;
        left: 0;
        position: absolute;
        transition: transform 0.2s ease-in-out;
        width: 100%;
        border-color: #ff1e1e;
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
    font-weight: 400;
    justify-content: center;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
        color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
    }
    @media (max-width: 768px) {
        min-width: 130px;
    }
}
&:hover,
&.active {
 a {
     span {
         color: #ff1e1e;
     }
 }
}
`;


export default Header;