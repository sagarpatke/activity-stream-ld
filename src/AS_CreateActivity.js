function AS_CreateActivity(actor, object, target, context) {
  const obj = {
    '@context': 'https://www.w3.org/ns/activitystreams',
    type: 'Create',
    actor: actor.json,
    object: object.json,
    target: target.json,
    context: context.json
  }

  const returnObj = {
    get context() { return context.json; },
    get type() { return obj.type; },
    get name() { return obj.name; },
    get actor() { return actor.json; },
    get object() { return object.json; },
    get target() { return target.json; },
    get json() { return JSON.parse(JSON.stringify(obj)) }
  }

  Object.defineProperty(returnObj, '@context', { get: function() { return obj['@context']; } });

  return returnObj;
}

module.exports = AS_CreateActivity;
