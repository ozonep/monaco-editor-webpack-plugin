module.exports = {
  css: {
    entry: [
      'vs/basic-languages/css/css.contribution',
      'vs/language/css/monaco.contribution',
    ],
    worker: {
      id: 'vs/language/css/cssWorker',
      entry: 'vs/language/css/css.worker',
      output: 'css.worker.js',
      fallback: 'vs/language/css/cssWorker',
    },
    alias: undefined,
  },
  html: {
    entry: [
      'vs/basic-languages/html/html.contribution',
      'vs/language/html/monaco.contribution',
    ],
    worker: {
      id: 'vs/language/html/htmlWorker',
      entry: 'vs/language/html/html.worker',
      output: 'html.worker.js',
      fallback: 'vs/language/html/htmlWorker',
    },
    alias: undefined,
  },
  javascript: {
    entry: 'vs/basic-languages/javascript/javascript.contribution',
    worker: undefined,
    alias: undefined,
  },
  json: {
    entry: 'vs/language/json/monaco.contribution',
    worker: {
      id: 'vs/language/json/jsonWorker',
      entry: 'vs/language/json/json.worker',
      output: 'json.worker.js',
      fallback: 'vs/language/json/jsonWorker',
    },
    alias: undefined,
  },
  python: {
    entry: 'vs/basic-languages/python/python.contribution',
    worker: undefined,
    alias: undefined,
  },
  typescript: {
    entry: [
      'vs/basic-languages/typescript/typescript.contribution',
      'vs/language/typescript/monaco.contribution',
    ],
    worker: {
      id: 'vs/language/typescript/tsWorker',
      entry: 'vs/language/typescript/ts.worker',
      output: 'typescript.worker.js',
      fallback: 'vs/language/typescript/tsWorker',
    },
    alias: undefined,
  }
};
