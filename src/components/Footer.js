import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <p className="copyright">
         Built with <a href="https://gatsby-dimension.surge.sh">Gatsby.js</a> and ❤️ by <a href="https://www.sakshampuri.com"> Saksham Puri</a>  
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
