import PropTypes from "prop-types";
import * as React from "react";
import JSONData from "../content/mycontent.json";

const Header = (props) => {
    const [message, changeMessage] = React.useState("");

    React.useEffect(() => {
        const windowParams = new URLSearchParams(window.location.search);
        if (windowParams.has("error")) {
            changeMessage(`There was an error processing your request.\n
											Please give me some time to fix the backend :)\n
								   		If you need to get in touch with me, please contact me directly from the information on my CV`);
        } else if (windowParams.has("message")) {
            changeMessage(windowParams.get("message"));
        }
        setTimeout(() => {
            changeMessage("");
        }, 10000);
    }, []);

    return (
        <header id='header' style={props.timeout ? { display: "none" } : {}}>
            <div className='logo backdrop-blur'>
                <img
                    src={JSONData.MainImage}
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        display: "block",
                        borderRadius: "50%",
                    }}
                ></img>
            </div>
            <div className='content backdrop-blur'>
                <div className='inner backdrop-blur'>
                    <h1>{JSONData.Name}</h1>
                    {message && (
                        <h3 style={{ borderStyle: "dotted", borderWidth: 1 }}>
                            {message}
                        </h3>
                    )}
                    <p>
                        {JSONData.Description.map((item) => {
                            return (
                                <div>
                                    <br />
                                    {item}
                                </div>
                            );
                        })}
                    </p>
                </div>
            </div>
            <nav className='backdrop-blur'>
                <ul>
                    <li>
                        <button
                            onClick={() => {
                                props.onOpenArticle("intro");
                            }}
                        >
                            About Me
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                props.onOpenArticle("work");
                            }}
                        >
                            Work
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                props.onOpenArticle("about");
                            }}
                        >
                            Resume
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                props.onOpenArticle("contact");
                            }}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
};

export default Header;
