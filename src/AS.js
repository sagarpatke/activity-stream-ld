const AS_Group = require('./AS_Group');
const AS_Link = require('./AS_Link');
const AS_CreateActivity = require('./AS_CreateActivity');

function parse(inputJSON) {
  if(inputJSON.type === 'Create') {
    const actor = new AS_Link(inputJSON.actor.name, inputJSON.actor.href);
    const target = new AS_Group(inputJSON.target.name, inputJSON.target.url, inputJSON.target.content);
    const context = new AS_Link(inputJSON.context.name, inputJSON.context.href);
    const object = new AS_Link(inputJSON.object.name, inputJSON.object.href);

    return new AS_CreateActivity(actor, object, target, context);
  }
}

module.exports = {parse};
