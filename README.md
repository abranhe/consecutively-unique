
<p align="center">
	<a href="https://www.npmjs.com/package/consecutively-unique"><img src="https://cdn.abraham.gq/projects/consecutively-unique/logo.svg" width="30%"></a>
	<br>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/consecutively-unique"><b>consecutively-unique</b></a>: unique generator from a consecutively number list
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/consecutively-unique"><img src="https://img.shields.io/travis/abranhe/consecutively-unique.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/permutated/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/consecutively-unique.svg" /></a>
</p>

# Install

```
$ npm install consecutively-unique
```

# Why?

- Why not 😂
- Clean and focused
- Actively maintained


# Usage

```js
const cU = require('consecutively-unique');
const val = cU(1, 20);

console.log(val(), val(), val(), val());
//=> 18 7 1 10
```

# API

**cU(minValue, maxValue)**

> Return a function with a unique value unique value form a consecutively number list

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# Related

- [cu](https://github.com/abranhe/cu): same thing but in Python

# License

[MIT](https://github.com/abranhe/consecutively-unique/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe)
