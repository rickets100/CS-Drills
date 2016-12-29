class Directory {

  constructor(name) {
    this.name = name
    this.files = {}
  }

  write (name, contents) {
    if (!this.files[name]) this.files[name] = {}
    this.files[name].contents = contents
  }

  ls () {
    return Object.keys(this.files).sort()
  }

  ls_la () {
    return this.ls().map(name => `${name} - ${this.files[name].contents.length}`)
  }

  cat (name) {
    return this.files[name].contents
  }

  mv (src, dest) {
    this.files[dest] = this.files[src]
    delete this.files[src]
  }

  cp (src, dest) {
    this.files[dest] = {contents: this.files[src].contents}
  }

  ln_s (src, dest) {
    this.files[dest] = this.files[src]
  }

}

module.exports = Directory;
