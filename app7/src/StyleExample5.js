import { Button, Alert } from "react-bootstrap";
function StyleExample5(){
    return <>

        {/* <button className="btn btn-primary">Click Me</button> */}
        <Button variant={'danger'} >Click Me</Button>
        <Alert variant={'success'}>This is Example of React-bootstrap Alert</Alert>
        <hr/>
        <Alert variant={'danger'}>
            <Alert.Heading>Error</Alert.Heading>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
        </Alert>
    </>
}

export default StyleExample5;