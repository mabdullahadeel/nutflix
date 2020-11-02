// Components
import JumbotronContainer from '../containers/JumbotronContainer';
import FooterContainer from '../containers/FooterContainer';
import FaqsContainer from '../containers/FaqsContainer';
import HeaderContainer from '../containers/HeaderContainer';
import OptForm from '../components/opt-form';
import Feature from '../components/features';


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programms and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel Anytime</Feature.Subtitle>
                    <OptForm style={{ margin: "30px 100px 0 100px" }}>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}