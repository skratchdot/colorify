/*
 * using a slightly modified version of code found here:
 * https://github.com/dr-dimitru/SHB-js
 *
 */
import React, { Component } from 'react';
import getSocialButtonLib from '../../lib/shb';

const id = 'social-button-container';
const title = 'Colorify: a collection of color tools';
const SHB = getSocialButtonLib();

class SocialButtons extends Component {
  componentDidMount() {
    SHB.build({
      elementID: id,
      pref: {
        btnSizeClass: 'btn-xs',
        url: 'http://projects.skratchdot.com/colorify',
        twitterName: 'skratchdot',
        desc: title,
        title: title,
      },
      buttons: {
        fbLike: true,
        fbShare: true,
        tweet: true,
        plusOne: true,
        plusShare: true,
        linkedInShare: true,
        pinterest: true,
        customButton: {
          iconClass: 'fa-github',
          iconURL: 'https://github.com/skratchdot/colorify',
          iconParams: {},
        },
      },
    });
  }
  render() {
    return (
      <div id={id}>
        <strong>Share: &nbsp;</strong>
      </div>
    );
  }
}

export default SocialButtons;
