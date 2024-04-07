import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    const contentType = response.headers.get('content-type');

    let body = null;
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }

  async post(path, body) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${this.baseURL}${path}`, {
      body: JSON.stringify(body),
      method: 'POST',
      headers,
    });

    const contentType = response.headers.get('content-type');

    let bodyResponse = null;
    if (contentType.includes('application/json')) {
      bodyResponse = await response.json();
    }

    if (response.ok) {
      return bodyResponse;
    }

    throw new APIError(response, bodyResponse);
  }
}

export default HttpClient;
