class TagBuilder {

  constructor(tagName, selfClosing) {
    this.tagName = tagName;
    this.selfClosing = selfClosing;
    this.innerHTML = '';
    this.attributes = {};
  }

  toString() {
    let attributes = Object.keys(this.attributes).map(name => {
      let value = this.attributes[name];
      if (Array.isArray(value)) {
        return `${name}="${value.join(' ')}"`;
      } else {
        return `${name}="${value}"`;
      }
    }).join(' ');
    if (attributes.length) attributes = ` ${attributes}`;
    if (this.selfClosing) {
      return `<${this.tagName}${attributes} />`;
    } else {
      return `<${this.tagName}${attributes}>${this.innerHTML}</${this.tagName}>`;
    }
  }

  setInnerHTML (content) {
    this.innerHTML = content;
  }

  addAttribute (name, value) {
    if (name === 'class') {
      this.addClass(value);
    } else {
      this.attributes[name] = value;
    }
  }

  addClass (className) {
    this.attributes.class = this.attributes.class || [];
    this.attributes.class.push(className);
  }

}

module.exports = TagBuilder;
