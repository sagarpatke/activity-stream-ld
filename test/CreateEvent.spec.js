const chai = require('chai');

chai.should();

const AS_Group = require('../src/AS_Group');
const AS_Link = require('../src/AS_Link');
const AS_CreateActivity = require('../src/AS_CreateActivity');
const AS = require('../src/AS');

describe('Create Activity', function() {
  describe('Anis has created a new calendar wave18 for stackroute', function() {
    describe('Generation', function() {
      const target = new AS_Group('Stackroute', 'http://groups.com/group/Stackroute','http://avatar.com/group/stackroute');
      const actor = new AS_Link('Anis', 'http://profile.com/user/anis');
      const object = new AS_Link('wave18', 'http://profile.com/calendar-link');
      const context = new AS_Link('Calendar', 'http://tools.com/tools/calendar');

      const createActivity = new AS_CreateActivity( actor, object, target, context);

      const activityJSON = createActivity.json;

      it('should be of type Create', function() {
        activityJSON.should.have.property('type');
        activityJSON.type.should.be.equal('Create');
      });
       
      it('should have an id',function(){
         activityJSON.should.have.property('id');
         activityJSON.id.should.be.equal('27d13830-5efa-4fec-9317-abe2e444d9c6');
       });

      it('should have an @context', function() {
        activityJSON.should.have.property('@context');
        activityJSON['@context'].should.be.equal('https://www.w3.org/ns/activitystreams');
      });

      it('should have a name', function() {
        activityJSON.should.have.property('name');
        activityJSON.name.should.be.equal('Anis has created a new calendar wave18 for Stackroute');
      });

      it('should have a target', function() {
        activityJSON.should.have.property('target');
        activityJSON.target.should.have.property('type');
        activityJSON.target.type.should.be.equal('Group');
        activityJSON.target.should.have.property('name');
        activityJSON.target.name.should.be.equal('Stackroute');
        activityJSON.target.should.have.property('content');
        activityJSON.target.content.should.be.equal('http://avatar.com/group/stackroute');
      });

      it('should have an actor', function() {
        activityJSON.should.have.property('actor');
        activityJSON.actor.should.have.property('type');
        activityJSON.actor.type.should.be.equal('Link');
        activityJSON.actor.should.have.property('name');
        activityJSON.actor.name.should.be.equal('Anis');
        activityJSON.actor.should.have.property('href');
        activityJSON.actor.href.should.be.equal('http://profile.com/user/anis');
      });

      it('should have an object', function() {
        activityJSON.should.have.property('object');
        activityJSON.object.should.have.property('type');
        activityJSON.object.type.should.be.equal('Link');
        activityJSON.object.should.have.property('name');
        activityJSON.object.name.should.be.equal('wave18');
        activityJSON.object.should.have.property('href');
        activityJSON.object.href.should.be.equal('http://profile.com/calendar-link');
      });

      it('should have a context', function() {
        activityJSON.should.have.property('context');
        activityJSON.context.should.have.property('type');
        activityJSON.context.type.should.be.equal('Link');
        activityJSON.context.should.have.property('name');
        activityJSON.context.name.should.be.equal('Calendar');
        activityJSON.context.should.have.property('href');
        activityJSON.context.href.should.be.equal('http://tools.com/tools/calendar');
      });
    });

    describe('Parsing', function() {
      const activityJSON = {
        "@context": 'http://avatar.com/group/stackroute',
        id:'27d13830-5efa-4fec-9317-abe2e444d9c6',
        type: 'Create',
        name: 'Anis has created a new calendar wave18 for Stackroute',
        actor: {
          type: 'Link',
          name: 'Anis',
          href: 'http://profile.com/user/anis',
          mediaType: 'image/svg+xml'
        },
        object: {
          type: 'Link',
          name: 'wave18',
          href: 'http://profile.com/calendar-link',
          mediaType: 'image/svg+xml'
        },
        target: {
          type: 'Group',
          name: 'Stackroute',
          content: 'http://avatar.com/group/stackroute',
          url: 'http://groups.com/group/Stackroute'
        },
        context: {
          type: 'Link',
          name: 'Calendar',
          href: 'http://tools.com/tools/calendar',
          mediaType: 'image/svg+xml'
        }
      }

      const activity = AS.parse(activityJSON);

      it('should be of type Create', function() {
        activity.type.should.be.equal('Create');
      });

      it('should have an id', function() {
        activity.id.should.be.equal('27d13830-5efa-4fec-9317-abe2e444d9c6');
      });

      it('should have a name', function() {
        activity.name.should.be.equal('Anis has created a new calendar wave18 for Stackroute');
      });

      it('should have an @context', function() {
        activity['@context'].should.be.equal('https://www.w3.org/ns/activitystreams');
      });

      it('should have a target', function() {
        const target = activity.target;
        target.type.should.be.equal('Group');
        target.name.should.be.equal('Stackroute');
        target.content.should.be.equal('http://avatar.com/group/stackroute');
      });

      it('should have an actor', function() {
        const actor = activity.actor;
        actor.type.should.be.equal('Link');
        actor.name.should.be.equal('Anis');
        actor.href.should.be.equal('http://profile.com/user/anis');
      });

      it('should have an object', function() {
        const object = activity.object;
        object.type.should.be.equal('Link');
        object.name.should.be.equal('wave18');
        object.href.should.be.equal('http://profile.com/calendar-link');
      });

      it('should have a context', function() {
        const context = activity.context;
        context.type.should.be.equal('Link');
        context.name.should.be.equal('Calendar');
        context.href.should.be.equal('http://tools.com/tools/calendar');
      });
    });
  });
});
