class User {
  constructor({name}) {
    this.username = name;
    this.bookmarkCount = 0;
  }

  async getProfile() {
    const response = await fetch('https://example.com/api/user/1');
    const data = await response.json();
    const bookmarkCount = data.bookmarkCount;

    this.username = data.username;
    this.bookmarkCount = bookmarkCount;
  }
}