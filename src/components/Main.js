import PropTypes from "prop-types";
import * as React from "react";
import JSONData from "../content/mycontent.json";
import ReCAPTCHA from "react-google-recaptcha";

const Main = (props) => {
    const [buttonText, changeButtonText] = React.useState("Send Message");
    const [captchaToken, changeCaptchaToken] = React.useState("");

    const onCaptchaChange = (token) => {
        changeCaptchaToken(token);
    };

    let close = (
        <div
            className='close'
            onClick={() => {
                props.onCloseArticle();
            }}
        ></div>
    );

    // let closeStyle = {"display":"inline-block","position":"absolute", "top":"0px", "right":"0px", "margin-right":"3%","margin-top":"3%", "cursor":"pointer"};

    return (
        <div
            ref={props.setWrapperRef}
            id='main'
            style={props.timeout ? { display: "flex" } : { display: "none" }}
        >
            <article
                id='intro'
                className={`${props.article === "intro" ? "active" : ""} ${
                    props.articleTimeout ? "timeout" : ""
                }`}
                style={{ display: "none" }}
            >
                <h2 className='major'>About Me</h2>
                <span className='image main'>
                    <div>
                        <img src={JSONData.AboutImage} alt='' />
                    </div>
                </span>
                {/* <p> */}
                {JSONData.AboutContent.map((item) => {
                    return (
                        <div>
                            <br />
                            {item}
                        </div>
                    );
                })}
                {/* </p> */}
                {/* not visible in gatsby build */}
                {close}
                {/* <div style={closeStyle} onClick={() => props.onCloseArticle()}>
            ← Back
          </div> */}
            </article>

            <article
                id='work'
                className={`${props.article === "work" ? "active" : ""} ${
                    props.articleTimeout ? "timeout" : ""
                }`}
                style={{ display: "none" }}
            >
                <h2 className='major'>Work</h2>
                <span className='image main'>
                    <img src={JSONData.WorkImage} alt='' />
                </span>

                {JSONData.WorkContent}
                <br />
                <br />
                {JSONData.InternshipsStartLine}
                <ul>
                    {JSONData.InternShips.map((item) => {
                        return (
                            <li>
                                <a href={item.link}>{item.name}</a>
                                <br />
                            </li>
                        );
                    })}
                </ul>
                {JSONData.ProjectsStartLine}
                <ul>
                    {JSONData.Projects.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.link}>{item.name}</a>
                                <br />
                            </li>
                        );
                    })}
                </ul>

                {/* not visible in gatsby build */}
                {close}
                {/* <div style={closeStyle} onClick={() => props.onCloseArticle()}>
            ← Back
          </div> */}
            </article>

            <article
                id='about'
                className={`${props.article === "about" ? "active" : ""} ${
                    props.articleTimeout ? "timeout" : ""
                }`}
                style={{ display: "none" }}
            >
                <h2 className='major'> CV </h2>
                {/* <span className="image main">
            <img  />
          </span> */}
                {/* <p> */}
                {JSONData.CVStartLine}
                <br />
                <br />
                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <a href={JSONData.Resume}>Resume</a>
                </div>
                {/* </p> */}
                {/* not visible in gatsby build */}
                {close}
                {/* <div style={closeStyle} onClick={() => props.onCloseArticle()}>
            ← Back
          </div> */}
            </article>

            <article
                id='contact'
                className={`${props.article === "contact" ? "active" : ""} ${
                    props.articleTimeout ? "timeout" : ""
                }`}
                style={{ display: "none" }}
            >
                <h2 className='major'>Contact</h2>
                <form method='post' action={JSONData.emailid} type='text/plain'>
                    <div className='field half first'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' />
                    </div>
                    <div className='field half'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' />
                    </div>
                    <div className='field'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            name='message'
                            id='message'
                            rows='4'
                        ></textarea>
                    </div>
                    <input
                        type='hidden'
                        value={captchaToken}
                        readOnly
                        name='token'
                    />
                    <ReCAPTCHA
                        sitekey={JSONData.recaptchaKey}
                        onChange={onCaptchaChange}
                    />
                    <ul className='actions'>
                        <li>
                            <input
                                type='submit'
                                value={buttonText}
                                className='special'
                                disabled={!captchaToken}
                                onClick={() =>
                                    changeButtonText("Sending Message...")
                                }
                            />
                        </li>
                        <li>
                            <input type='reset' value='Reset' />
                        </li>
                    </ul>
                </form>
                <ul className='icons'>
                    <li>
                        <a href={JSONData.twitter} className='icon fa-twitter'>
                            <span className='label'>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href={JSONData.github} className='icon fa-github'>
                            <span className='label'>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href={JSONData.linkedin}
                            className='icon fa-linkedin'
                        >
                            <span className='label'>Linkedin</span>
                        </a>
                    </li>
                </ul>
                {/* not visible in gatsby build */}
                {close}
                {/* <div style={closeStyle} onClick={() => props.onCloseArticle()}>
            ← Back
          </div> */}
            </article>
        </div>
    );
};

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
