import { API, broadcast } from "./util";



export default class FollowToggle {

  constructor(toggleButton) {
    this.toggleButton = toggleButton
    this.handleClick = this.handleClick.bind(this);
    this.toggleButton.addEventListener('click', this.handleClick);
  }

  async handleClick(event) {
    event.preventDefault();
    console.log(this.followState);
  }

  async follow() {
    this.followState = "follow"
    // Your code here
  }

  async unfollow() {
    this.followState = "unfollow"
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}