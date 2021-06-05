import styled from 'styled-components';
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const Home = (props) => {
    return (
    <Container>
        {!props.user && <Redirect to ="/" />}
        <Section>
                <h5>
                <i>
                <p>
                    WELCOME TO THE PLACE WHERE EVERYONE IS A JOURNALIST OF HIS/HER OWN INTRESTS 🚀💖 !
                </p>
                </i>
                </h5>   
        </Section>
        <Layout>
            <Leftside />
            <Main />
            <Rightside />
        </Layout>
    </Container>
    );
};

const Container = styled.div`
padding:  52px;
max-width: 100%;
`;

const Content = styled.div`
 max-width: 1128px;
 margin-left: auto;
 margin-right: auto;


`;

const Section = styled.section`
 min-height: 50px;
 padding: 15px 0;
 box-sizing: content-box;
 text-align: center;
 text-decoration: underline;
 display: flex;
 justify-content: center;
 h5 {
     color: black;
     font-size: 20px;
 }

 @media (max-width: 768px) {
     flex-direction: column;
     padding: 0 5px;

 }
`;

const Layout = styled.div`
display: grid;
grid-template-areas: "Leftside Main Rightside";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
column-gap: 25px;
row-gap: 25px;
/* grid-template-rows: auto; */
margin: 25px 0;
@media (max-width: 768px) {
display: flex;
flex-direction: column;
padding: 0 5px;
}
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Home);