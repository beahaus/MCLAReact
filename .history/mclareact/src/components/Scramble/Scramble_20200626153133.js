import React, { Component } from "react";

export default class TextScrambler extends Component {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
    this.queue = [];
    this.frame = 0;
  }

  componentDidMount() {
    var phrases = ["MCLA"];
    //   // word scrambler text
    var el = document.querySelector(".text");
    const fx = new TextScramble(el);
    let counter = 0;
    this.next(phrases, el, fx, counter);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);

    this.update();
    return promise;
  }

  update = () => {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };
  randomChar = () => {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  };

  //   words to be displayed

  next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2500);
    });
    counter = (counter + 1) % phrases.length;
  };

  render() {
    return <div></div>;
  }
}
