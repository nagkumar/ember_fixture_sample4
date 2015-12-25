import DS from 'ember-data';
export default DS.FixtureAdapter.extend({
                                          namespace: 'api',
                                          defaultSerializer: '-default',
                                          shouldReloadAll: function ()
                                          {
                                            return true;
                                          }
                                        });


//export default DS.RESTAdapter.extend({
//                                          namespace: 'api',
//                                          shouldReloadAll: function ()
//                                          {
//                                            return true;
//                                          }
//                                        });
