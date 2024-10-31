import createApiClient from "./api.service";

class ContactService {
  constructor(baseUrl = "/api/contacts") {
    this.api = createApiClient(baseUrl);
  }

  async getAll() {
    const data = (await this.api.get("/")).data;
    console.log(data);

    return data;
  }

  async create(data) {
    return (await this.api.post("/", data)).data;
  }

  async deleteAll() {
    return (await this.api.delete("/")).data;
  }

  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }

  async get(id) {
    return (await this.api.get(`/${id}`)).data;
  }

  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
}

export default new ContactService();
