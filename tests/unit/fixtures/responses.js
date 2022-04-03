import path from 'path';

const _require = require;

const cache = {};

export const loadResponse = (filepath) => {
  const dirs = 'tests/unit/fixtures/responses';
  const resolvedPath = path.resolve(dirs, filepath);

  let content = cache[resolvedPath];

  if (!content) {
    try {
      content = _require(resolvedPath);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`Could not load fixture ${resolvedPath}`);
    }
    cache[resolvedPath] = content;
  }

  return content;
};
