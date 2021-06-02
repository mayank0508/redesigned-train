import styled from 'styled-components'

const Login = (props) => {
    return <Container>
        <Nav>
            <a href="/">
                <img src="/images/journalstop2.svg" alt="" />
            </a>
            <div>
                <Join>
                    GET IN✨
                </Join>
                <SignIn> 
                    SIGN IN 🔙
                </SignIn>
            </div>
        </Nav>
    </Container>
};

const Container = styled.div`
 padding: 0px;
`;

const Nav = styled.nav` 
 max-width: 1128px;
 margin: auto;
 padding: 12px 0 16px;
 display: flex;
 align-items: center;
 position: relative;
 justify-content: space-between;
 flex-wrap: nowrap;

 & > a {
     width: 135px;
     height: 34px;
     @media (max-width: 768px) {
         padding: 0 5px;
     }
 }
`;

const Join = styled.a`
 font-size: 16px;
 padding: 10px 12px;
 text-decoration: none;
 color: #b30000;
 border-radius:120px ;
 margin-right: 12px;
 &:hover {
    background-color: #ff9a9a;
    color: rgb(255,0,0);
    text-decoration: none;
 }
`;

const SignIn = styled.a`
 box-shadow: inset 0 0 0 1px rgba(255,0,0);
 color: #b30000;
 border-radius: 120px;
 transition-duration: 167ms;
 font-size: 16px;
 font-weight: 1000;
 line-height: 40px;
 padding: 10px 24px;
 text-align: center;
 background-color: rgba(0,0,0,0);
 &:hover {
     background-color: #ff9a9a;
     color: rgba(255,0,0);
     text-decoration: none;
 }

`;

export default Login;

