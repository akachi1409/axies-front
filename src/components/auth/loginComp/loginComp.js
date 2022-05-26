import "./loginComp.css";
import { Container, Row, Col } from "react-bootstrap";
import Line1 from "../../../basic/line/line1"
import Button1 from "../../../basic/button/button1";
import Button2 from "../../../basic/button/button2"
import Input1 from "../../../basic/button/input1"
import Checkbox1 from "../../../basic/button/checkbox1"
function LoginComp () {
    return (
        <div className="login-layout">
            <Container>
                <Row>
                    <h2 className="login-title">Login To NFTs</h2>
                </Row>
                <Row>
                    <Line1 title="Login with Social"/>
                </Row>
                <br/>
                <Row>
                    <Col lg="6" style={{display:"flex"}}>
                        <Button1 option="Google"/>
                    </Col>
                    <Col lg="6" style={{display:"flex", flexDirection:"row-reverse"}}>
                        <Button1 option="Facebook"/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Line1 title=" Or login with email"/>
                </Row>
                <br/>
                <Row>
                    <Input1 text="Your Full Name"/>
                </Row>
                <br/>
                <Row>
                    <Input1 text="Your Email Address"/>
                </Row>
                <br/>
                <Row style={{marginTop: "1em"}}>
                    <Col lg="6" style={{display:"flex"}}>
                        <Checkbox1 title= "Remeber me"/>
                    </Col>
                    <Col lg="6" style={{display:"flex", flexDirection:"row-reverse"}}>
                        <h6  className="login-title">Forgot Password?</h6>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Button2 title="Login"></Button2>
                </Row>
                <br/>
            </Container>
        </div>
    )
}
export default LoginComp;