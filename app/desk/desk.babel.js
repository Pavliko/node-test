"use strict"
import templateFile from './desk.monk';
import monkberry from 'monkberry';
require('./desk.css');
monkberry.mount(templateFile);

class Desk {
  constructor(wrapper, data) {
    var tempate = monkberry.render('desk', data);
    tempate.appendTo(wrapper)
  }
};

module.exports = Desk;
