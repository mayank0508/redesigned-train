import styled from 'styled-components'

const Login = (props) => {
    return <Container>
        <Nav>
            <a href="/">
                <img src="/images/blowit.svg" alt="" />
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
        <Section>
            <Hero>
                <h1>Welcome to the place made for journalist 📰</h1>
                <img src="/images/login-hero.svg" alt="" />
            </Hero>
            <Form>
                <Google>
                    <img src="/images/google.svg" alt="" />
                    Sign in with Google
                </Google>
            </Form>
            </Section>
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

const Section = styled.section`
align-content: start;
display: 'flex';
min-height: 700px;
padding-bottom: 138px;
padding-top: 40px;
padding: 60px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width:1128px;
align-items: center;
margin: auto;
@media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
}
`;

const Hero = styled.div`
width: 100%;
h1 {
    padding-bottom: 0px;
    width: 55%;
    font-size: 60px;
    font-weight: 800;
    color: #800000;
    line-height: 70px;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 20px;
    }
}

img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
        top: 50px;
        width: initial;
        position: initial;
        height: initial;
    };
}
`

const Form = styled.div`
margin-top: 100px;
width: 408px;
@media (max-width: 768px) {
    margin-top: 20px;
}
`;

const Google = styled.button`
display: flex;
justify-content: center;
background-color:#fff;
align-items: center;
height: 56px;
width: 100%;
border-radius: 120px;
box-shadow: inset 0 0 0 1px rgb(0,0,0 / 60%),
 inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 2px rgb(0 0 0 / 0%);
 vertical-align: middle;
 z-index: 0;
 transition-duration: 167ms;
 font-size: 20px;
 color: #b30000;
 &:hover {
     background-color: #ff9a9a;
     color: rgba(255, 0, 0)
 }
`;



export default Login;

