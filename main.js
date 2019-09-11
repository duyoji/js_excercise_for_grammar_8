class User {
  constructor({name}) {
    this.username = name;
    this.iconUrl = '';
  }

  async getProfile() {
    const response = await fetch('https://example.com/api/user/1');
    const data = await response.json();
    const iconUrl = data.iconUrl;

    this.username = data.username;
    this.iconUrl = iconUrl;
  }
}