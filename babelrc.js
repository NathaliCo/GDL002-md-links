const isTest = String(process.env.NODE_ENV) === 'tests'
module.exports = {
  presets: [['env', { modules: isTest ? 'commonjs' : false }]]
}
