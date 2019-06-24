# Sixphere Lit Element

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]

[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

## Libraries
[![lit-element][lit-element-version-badge]][lit-element-url]

------------------------------------------------------------------

Sixphere Lit Element is a subclass of [LitElement][lit-element-url] with new features:
* Binding child nodes by reference: You can bind a child node as a property by defining his `ref` attribute.


## Install
```bash
npm install '@sixphere/lit-element' --save
```

## How to use?

### Use like a super class
```javascript
import {SixphereLitElement} from '@sixphere/lit-element'

class MyElement extends SixphereLitElement {

    render() {
        return html `
        <div ref="test">
            <p>hello world!</p>
        </div>
        `
    }
}

customElements.define("my-element", MyElement)
```



## License
[MIT License][mit-license-url] © 2019 Sixphere

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[java-url]: https://www.java.com/en/download
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[vscode-url]: https://code.visualstudio.com
[vscode-lit-html-url]: https://github.com/mjbvz/vscode-lit-html
[web-component-tester-url]: https://github.com/Polymer/tools/tree/master/packages/web-component-tester
[lit-element-url]: https://github.com/Polymer/lit-element

<!-- Badges -->
<!-- [follow-me-badge]: https://flat.badgen.net/twitter/follow/Fernando Jiménez?icon=twitter -->

[version-badge]: https://flat.badgen.net/npm/v/@sixphere/lit-element?icon=npm
[lit-element-version-badge]: https://flat.badgen.net/npm/v/lit-element/latest?icon=npm&label=lit-element
[node-version-badge]: https://flat.badgen.net/npm/node/@sixphere/lit-element
[mit-license-badge]: https://flat.badgen.net/npm/license/@sixphere/lit-element

[downloads-badge]: https://flat.badgen.net/npm/dm/@sixphere/lit-element
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@sixphere/lit-element?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@sixphere/lit-element
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@sixphere/lit-element

<!-- Links -->
<!-- [follow-me-url]: https://twitter.com/Fernando Jiménez?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=diwrapper -->

[version-url]: https://www.npmjs.com/package/@sixphere/lit-element
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: /LICENSE

[downloads-url]: https://www.npmtrends.com/@sixphere/lit-element
[packagephobia-url]: https://packagephobia.now.sh/result?p=@sixphere/lit-element
[bundlephobia-url]: https://bundlephobia.com/result?p=@sixphere/lit-element

[circleci-url]: https://circleci.com/gh//diwrapper/tree/master
[daviddm-url]: https://david-dm.org//diwrapper

[codebeat-url]: https://codebeat.co/projects/<codebeat_path>
[codacy-url]: https://www.codacy.com/app/<codacy_path>
[lgtm-url]: https://lgtm.com/projects/g/<lgtm_path>