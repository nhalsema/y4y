import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import './NavBar.scss'

function NavBar() {
    return (
        <div class="phone">
            <input type="radio" name="s" id="s1" />
            <input type="radio" name="s" id="s2" checked="checked" />
            <input type="radio" name="s" id="s3" />
            <label for="s1"><img src="http://co0kie.github.io/codepen/mobile-nav/facebook.svg" alt="" /></label>
            <label for="s2"><img src="http://co0kie.github.io/codepen/mobile-nav/twitter.svg" alt="" /></label>
            <label for="s3"><img src="http://co0kie.github.io/codepen/mobile-nav/instagram.svg" alt="" /></label>
            <div class="circle"></div>
            <div class="phone_content">
                <div class="phone_bottom">
                    <span class="indicator"></span>
                </div>
            </div>
        </div>
    )
};

export default NavBar;