function AS_Link(name, href, mediaType) {
  const obj = {
    type: 'Link',
    name,
    href,
    mediaType
  };

  const returnObj = {
    get type() { return obj.type },
    get name() { return obj.name },
    get href() { return obj.href },
    get json() { return JSON.parse(JSON.stringify(obj)); }
  }

  return returnObj;
}

AS_Link.prototype.parseJSON = function(inputJSON) {

}

module.exports = AS_Link;
