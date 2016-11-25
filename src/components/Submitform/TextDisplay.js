/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { Component } from 'react';


class TextDisplay extends Component {

    handleClick (event){
        // console.log(this, 'button clicked');
        this.props.deleteLetter()
    }


    render () {
        return (
            <div>
                <br />
                <div>I am going to display text:<br />
                    {this.props.text}
                </div>
                <br /><br />
                <button onClick={this.handleClick.bind(this)}>Delete the shit</button>
            </div>
        )
    }
}

export default TextDisplay;

