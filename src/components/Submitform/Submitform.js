/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Submitform.css';
import TextDisplay from './TextDisplay';

class Submitform extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: 'intitial text'
        }
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
        console.log(event.target.value);
    }


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
            <input
                type="text"
                placeholder="This is text"
                value={this.state.inputText}
                onChange={this.handleChange.bind(this)}
            />
          <a
            className={s.link}
            href="https://gitter.im/kriasoft/react-starter-kit"
          >Ask a question</a>
          <span className={s.spacer}>|</span>
          <a
            className={s.link}
            href="https://github.com/kriasoft/react-starter-kit/issues/new"
          >Report an issue</a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Submitform);
