'use strict'

let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ': ' + student)
      }.bind(group)
    )
  },
}
group.showList()

/* forEach explicitely set "this" as undefined. Since regular functions have their own context, we are getting error inside callback in forEach function. To fix the error we need explicitely bind "this" */
