function AS_Group(name, url, content, mediaType) {
  const obj = {
    type: 'Group',
    name,
    url,
    content,
    mediaType
  };

  const returnObj = {
    get type() { return obj.type; },
    get name() { return obj.name; },
    get content() { return obj.content; },
    get json() { return JSON.parse(JSON.stringify(obj)); }
  }

  return returnObj;
}

module.exports = AS_Group;
