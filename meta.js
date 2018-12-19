module.exports = {
  helpers: {
    test(v1, v2, options) {
      console.log(v1, v2, options)
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: 'Project name'
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: 'Author'
    }
  }
}
