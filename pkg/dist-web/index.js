import { LitElement } from 'lit-element';
export * from 'lit-element';

/**
 * Add camel case function to the string prototype
 */

if (String.prototype.toCamelCase === undefined) {
  String.prototype.toCamelCase = function () {
    return this.replace(/^([A-Z])|[\s-_](\w)/g, function (match, p1, p2) {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
    });
  };
}

class SixphereLitElement extends LitElement {
  constructor() {
    super();
    this.updateComplete.then(this.bindChildren.bind(this));
  }
  /**
   * Searching and binding all children which contains a valid ref attribute
   */


  bindChildren() {
    let nodes = this.shadowRoot === null ? this.querySelectorAll('*') : this.shadowRoot.querySelectorAll('*');
    [...nodes].filter(node => node.attributes["ref"] && node.attributes["ref"].value).forEach(node => this.__bind(node.attributes["ref"].value, node));
  }
  /**
   * Saving the node reference in the $ref attribute
   *
   * @param {String} ref Node ref
   * @param {HTMLElement} node HTML node element
   */


  __bind(ref, node) {
    if (this.$refs === undefined) this.$refs = {};
    if (this.$refs[ref.toCamelCase()] === undefined) this.$refs[ref.toCamelCase()] = node;
  }

}

export { SixphereLitElement };
