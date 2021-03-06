import React, { Component } from 'react';
import LinkHeader from './headerlink';
import Carousel from './carousel';
import '../link2.css'

export default class Link2 extends Component {
  render() {
    return(
      <div className="container">
        <LinkHeader />
        <Carousel />
        <div className="info-contain">
          <div className="info">
          <h2>Student Tips and tricks!</h2>
            <p>
            Hi and welcome! My name is Nora, I am a wife, mother, and educator. I have a bachelors degree in elementary education and I am certified in Arizona, Texas, and Florida. I have a masters in educational leadership. In the past eight years, I have taught kindergarten, third, fourth, fifth,and sixth grade. I enjoy working with children and my goal is to help all children reach their max potential.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
