module.exports = class Editor {

  constructor() {
    this.undoneCommands = []
    this.commands = []
  }

  write(text) {
    this.commands.push({text})
  }

  toString() {
    return this.commands.reduce((result, command) => {
      if (command.find) return result.split(command.find).join(command.replace)
      return result + command.text
    }, '')
  }

  undo() {
    this.undoneCommands.push(this.commands.pop())
  }

  redo() {
    this.commands.push(this.undoneCommands.pop())
  }

  replace(find, replace) {
    this.commands.push({find, replace})
  }

}
