import styled from 'styled-components';

const Home = (props) => {
    return (
    <Container>
        <Section>
            <h5>
                <a>
                    Hi Hi Hi !
                </a>
                </h5>
                <p>
                    WELCOME TO THE PLACE WHERE YOU ARE ALLOWED TO HAVE A OPINION !
                </p>   
        </Section>
    </Container>
    );
};

const Container = styled.div`
padding:  52px;
max-width: 100%;
`;

const Content = styled.div`

`;

const Section = styled.section`

`;

export default Home;