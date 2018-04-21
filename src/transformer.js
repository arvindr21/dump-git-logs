const util = require('util');
const Transform = require('stream').Transform;
// Parsers
const DefaultParser = require('./parsers/default.parser.js').default;
const DecorateParser = require('./parsers/decorate.parser.js').default;
const RawParser = require('./parsers/raw.parser.js').default;
const ShortParser = require('./parsers/short.parser.js').default;
const FullParser = require('./parsers/full.parser.js').default;
const FullerParser = require('./parsers/fuller.parser.js').default;
const EmailParser = require('./parsers/email.parser.js').default;
const OnelineParser = require('./parsers/oneline.parser.js').default;

function Transformer(opts) {
  this.opts = opts;
  Transform.call(this, opts);
}

util.inherits(Transformer, Transform);

Transformer.prototype._transform = function(data, encoding, callback) {
  let out = '';

  if (this.opts.type === 'default') {
    out = DefaultParser(data.toString(), this.opts);
  }
  if (this.opts.type === 'decorate') {
    out = DecorateParser(data.toString(), this.opts);
  }
  if (this.opts.type === 'raw') {
    out = RawParser(data.toString(), this.opts);
  }
  if (this.opts.type === 'short') {
    out = ShortParser(data.toString(), this.opts);
  }
  if (this.opts.type === 'full') {
    out = FullParser(data.toString(), this.opts);
  }
  if (this.opts.type === 'fuller') {
    out = FullerParser(data.toString(), this.opts);
  }
  if (this.opts.type === 'email') {
    out = EmailParser(data.toString(), this.opts);
  }
  if (this.opts.type === 'oneline') {
    out = OnelineParser(data.toString(), this.opts);
  }

  callback(null, out);
}


export default Transformer;
