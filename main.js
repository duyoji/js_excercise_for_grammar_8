class User {
  constructor({name}) {
    this.username = name;
    this.numberOfFollows = 0;
  }

  async getProfile() {
    const response = await fetch('https://example.com/api/user/1');
    const data = await response.json();

    this.username = data.username;
    this.numberOfFollows = data.followCount;
  }
}