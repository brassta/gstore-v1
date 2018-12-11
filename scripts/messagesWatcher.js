// lapin

function reactIntlAggregatePlugin(pluginOptions) {
  this.pluginOptions = pluginOptions || {};
}

const { execSync } = require('child_process');

reactIntlAggregatePlugin.prototype.apply = compiler => {
  compiler.plugin('emit', (compilation, callback) => {
    execSync('npm run make-translations');

    callback();
  });
};

module.exports = reactIntlAggregatePlugin;
