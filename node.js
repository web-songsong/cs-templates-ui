const Metalsmith = require('metalsmith')
// const meta = require('./meta')
const Handlebars = require('handlebars')

// Metalsmith(process.cwd())
//   .metadata({ name: 'songsong' })
//   .source('./template/')
//   .clean(false)
//   .destination('.')
//   .use((files, metalsmith, done) => {
//     console.log('file', files.contents)
//     Object.keys(files).forEach(fileName => {
//       let str = files[fileName].contents.toString()
//       files[fileName].contents = new Buffer(
//         Handlebars.compile(str)(metalsmith.metadata())
//       )
//     })
//     done()
//   })
//   .build(err => {
//     if (err) {
//       return console.log('err', err)
//     }
//     console.log('success')
//   })


Metalsmith(process.cwd())
  .metadata({ name: 'songsong' })
  .source('./haha/')
  .clean(false)
  .destination('.')
  .use((files, metalsmith, done) => {
    Object.keys(files).forEach(fileName => {
      const str = files[fileName].contents.toString()
      files[fileName].contents = new Buffer(
        Handlebars.compile(str)(metalsmith.metadata())
      )
    })


    done()
  })
  .build(err => {
    if (err) {
      return console.log('err', err)
    }
    console.log('success')
  })
