import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path, options = {}) {
    return this.makeRequest(path, options);
  }

  post(path, options = {}) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options.body,
      headers: options.headers,
    });
  }

  async makeRequest(path, options = {}) {
    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value);
      });
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method || 'GET',
      body: JSON.stringify(options.body),
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
