import React from 'react';
import github from '../../img/GitHub-Mark-64px.png';
import '../css/footer.css'

export default function Footer() {
    return (
        <footer>
            <span className='footer-text'>Designed and developed by Matthew Long</span>
            <a href='https://github.com/MattLong87/winrate-client'><img src={github} className='github-logo' alt='GitHub Repo'/></a>
        </footer>
    )
}