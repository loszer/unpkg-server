unpkg is a fast, global [content-delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) for stuff that is published to [npm](https://www.npmjs.com/). Use it to quickly and easily load files using a simple URL like:

<div style="text-align:center">`https://unpkg.com/package@version/file`</div>

A few examples:

  * [https://unpkg.com/react@15.0.1/dist/react.min.js](/react@15.0.1/dist/react.min.js)
  * [https://unpkg.com/react-dom@15.0.1/dist/react-dom.min.js](/react-dom@15.0.1/dist/react-dom.min.js)
  * [https://unpkg.com/history@3.0.0/umd/history.min.js](/history@3.0.0/umd/history.min.js)

You may also use a [tag](https://docs.npmjs.com/cli/dist-tag) or [version range](https://docs.npmjs.com/misc/semver) instead of a fixed version number, or omit the version/tag entirely to use the `latest` tag.

  * [https://unpkg.com/react@^0.14/dist/react.min.js](/react@^0.14/dist/react.min.js)
  * [https://unpkg.com/react/dist/react.min.js](/react/dist/react.min.js)

If you omit the file path, unpkg will try to serve [the `browser` bundle](https://github.com/defunctzombie/package-browser-field-spec) if present, the [`main` module](https://docs.npmjs.com/files/package.json#main) otherwise.

  * [https://unpkg.com/jquery](/jquery)
  * [https://unpkg.com/angular-formly](/angular-formly)
  * [https://unpkg.com/three](/three)

Append a `/` at the end of a URL to view a listing of all the files in a package.

  * [https://unpkg.com/lodash/](/lodash/)
  * [https://unpkg.com/modernizr/](/modernizr/)
  * [https://unpkg.com/react/](/react/)

You may use the special `/bower.zip` file path in packages that contain a `bower.json` file to dynamically generate a zip file that Bower can use to install the package.

  * [https://unpkg.com/react-swap/bower.zip](/react-swap/bower.zip)
  * [https://unpkg.com/react-collapse@1.6.3/bower.zip](/react-collapse@1.6.3/bower.zip)

**_We do NOT recommend JavaScript libraries use Bower._** Bower places additional burdens on JavaScript package authors for little to no gain. unpkg is intended to make it easier to publish code, not harder, so Bower support will be removed in January 2017\. Please move to npm for installing packages and stop using Bower before that time. See [here](https://github.com/mjackson/npm-http-server#bower-support) for our rationale.

### Query Parameters

<table cellpadding="0" cellspacing="0">
  <thead>
    <tr>
      <th width="80px">Name</th>
      <th width="120px">Default Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`main`</td>
      <td>`browser`, `main`</td>
      <td>The name of the field in [package.json](https://docs.npmjs.com/files/package.json) to use as the main entry point when there is no file path in the URL.</td>
    </tr>
    <tr>
      <td>`json`</td>
      <td>`undefined`</td>
      <td>Return a recursive list of metadata about all the files in a directory as JSON (e.g. `/any/path/?json`). Note: this only works for directories.</td>
    </tr>
  </tbody>
</table>

### Suggested Workflow

For npm package authors, unpkg relieves the burden of publishing your code to a CDN in addition to the npm registry. All you need to do is include your [UMD](https://github.com/umdjs/umd) build in your npm package (not your repo, that's different!).

You can do this easily using the following setup:

  * Add the `umd` (or `dist`) directory to your `.gitignore` file
  * Add the `umd` directory to your [files array](https://docs.npmjs.com/files/package.json#files) in `package.json`
  * Use a build script to generate your UMD build in the `umd` directory when you publish

That's it! Now when you `npm publish` you'll have a version available on unpkg as well.