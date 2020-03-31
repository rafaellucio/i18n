import XHR from './xhr'

function getDefaults() {
  return {
    allowMultiLoading: true,
    parse: JSON.parse,
    crossDomain: false,
    parsePayload: (payloads, lng, namespaces) => ({ [lng]: { [namespaces[0]]: payloads } }),
    xhr: XHR
  };
}

class BackendMultLoadPath {
  constructor(services, options = {}) {
    this.init(services, options);

    this.type = 'backend';
  }

  init(services, backendOptions, i18nextOptions) {
    this.services = services;
    this.options = { ...getDefaults(), ...backendOptions, ...i18nextOptions }
  }

  readMulti(languages, namespaces, callback) {
    const lng = this.services.languageDetector.detect()
    let loadPath = this.options.loadPath;
    if (typeof this.options.loadPath === 'function') {
      loadPath = this.options.loadPath(languages, namespaces);
    }

    let urls = loadPath.map(path =>
      this.services.interpolator.interpolate(path, {
        lng,
        ns: namespaces.join('+')
      })
    );

    const promisses = urls.map(url => this.loadUrl(url, callback))

    Promise
      .all(promisses)
      .then(responses => {
        callback(null, this.options.parsePayload(responses, lng, namespaces))
      })
  }

  loadUrl(url) {
    const self = this
    return new Promise((resolve, reject) => {
      this.options.xhr(url, this.options, (data, xhr) => {
        if (xhr.status >= 500 && xhr.status < 600) reject(`failed loading ${url}`, true /* retry */);
        if (xhr.status >= 400 && xhr.status < 500) reject(`failed loading ${url}`, false /* no retry */);

        try {
          resolve(self.options.parse(data, url))
        } catch (e) {
          reject(`failed parsing ${url} to json`)
        }
      });
    })
  }
}

export { BackendMultLoadPath }
