import faqsData from '../fixtures/faqs.json';
import Accordian from '../components/accordian';
import OptForm from '../components/opt-form';

export default function FaqsContainer() {
    return (
        <Accordian>
            <Accordian.Frame>
                <Accordian.Title>Frequently Asked Questions</Accordian.Title>
                {faqsData.map((item) => (
                    <Accordian.Item key={item.id}>
                        <Accordian.Header>{item.header}</Accordian.Header>
                        <Accordian.Body>{item.body}</Accordian.Body>
                    </Accordian.Item>
                ))}
            </Accordian.Frame>

            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
        </Accordian>
    )
}
