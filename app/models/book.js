import DS from "ember-data";

var BookModel = DS.Model.extend({
                                  title: DS.attr('string'),
                                  isbn: DS.attr('string'),
                                  pages: DS.attr('number'),
                                  description: DS.attr('string'),
                                  authors: DS.hasMany('author', {async: true}),
                                  publisher: DS.belongsTo('publisher', {async: true}),
                                  reviews: DS.hasMany("review", {async: true})
                                });

BookModel.reopenClass({
                        FIXTURES: [
                          {
                            "id": 1,
                            "title": "Fixure Ember.js nage Essentials",
                            "isbn": "ISBN1",
                            "pages": 180,
                            "description": "Fixure Ember.js essentials to master",
                            "authors": [1],
                            "publisher": 1,
                            "reviews": [1, 2, 3]
                          },
                          {
                            "id": 2,
                            "title": "Fixure Some Other Book On Ember.js",
                            "isbn": "ISBN2",
                            "pages": 200,
                            "description": "Some Description",
                            "authors": [2],
                            "publisher": 1,
                            "reviews": [4, 5, 6]
                          }
                        ]
                      });

export default BookModel;
