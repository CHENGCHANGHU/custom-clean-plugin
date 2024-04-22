import { rmSync } from 'node:fs';

export default class CustomCleanPlugin {
  constructor(paths) {
    this.paths = paths;
  }

  apply(compiler) {
    compiler.hooks.beforeRun.tap('CustomCleanPlugin', (compilation) => {
      console.log('CustomCleanPlugin', this.paths);
      if (!Array.isArray(this.paths)) {
        return;
      }
      this.paths.forEach(p => {
        rmSync(p, { recursive: true, force: true });
      });
    });
  }
}
