**commit 6791829b9fa02bda2460894f54712303ce71a60d**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Fri Apr 20 13:17:02 2018 +0530`
```
Commit Message:     0.4.0
```
---
 package-lock.json | 2 +-\
 package.json      | 2 +-\
 2 files changed, 2 insertions(+), 2 deletions(-)

---
**commit 0cbf2ef96d30876e28247b5df9a52afe3359dd10**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Fri Apr 20 13:15:15 2018 +0530`
```
Commit Message:     Update to streams and transformers, add more types. Fix: Parsing & Formatting
```
---
 README.md                            |  72 ++++++++++++--\
 sample-logs/CHANGELOG-custom.md      |   8 --\
 sample-logs/CHANGELOG-decorate.md    |  63 +++++++++++++\
 sample-logs/CHANGELOG-default.md     | 166 +++++++++++++++++++++++++-------\
 sample-logs/CHANGELOG-email.md       |  63 +++++++++++++\
 sample-logs/CHANGELOG-full.md        |  63 +++++++++++++\
 sample-logs/CHANGELOG-fuller.md      |  81 ++++++++++++++++\
 sample-logs/CHANGELOG-oneline.md     |  17 ++--\
 sample-logs/CHANGELOG-pretty.md      |   9 ++\
 sample-logs/CHANGELOG-raw.md         | 178 ++++++++++++++++++++---------------\
 sample-logs/CHANGELOG-short.md       |  54 +++++++++++\
 sample-logs/CHANGELOG-userdefined.md |  63 +++++++++++++\
 src/index.js                         |  48 +++++++---\
 src/transformer.js                   |  96 +++++++++++++++++++\
 test/index.js                        |  18 +++-\
 15 files changed, 848 insertions(+), 151 deletions(-)

---
 delete mode 100644 sample-logs/CHANGELOG-custom.md\
 create mode 100644 sample-logs/CHANGELOG-decorate.md\
 create mode 100644 sample-logs/CHANGELOG-email.md\
 create mode 100644 sample-logs/CHANGELOG-full.md\
 create mode 100644 sample-logs/CHANGELOG-fuller.md\
 create mode 100644 sample-logs/CHANGELOG-pretty.md\
 create mode 100644 sample-logs/CHANGELOG-short.md\
 create mode 100644 sample-logs/CHANGELOG-userdefined.md\
 create mode 100644 src/transformer.js\
**commit 0ff707511618d611ecd7a6a3f99b11254ffe3fdc**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Wed Apr 18 12:20:13 2018 +0530`
```
Commit Message:     0.3.0
```
---
 package-lock.json | 2 +-\
 package.json      | 2 +-\
 2 files changed, 2 insertions(+), 2 deletions(-)

---
**commit ebfa2a6023d52377cecf2267ad3684b5acc0749d**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Wed Apr 18 12:18:43 2018 +0530`
```
Commit Message:     fix dependency issue
```
---
 package-lock.json                | 61 +++++++++++-----------------------------\
 package.json                     |  4 ++-\
 sample-logs/CHANGELOG-custom.md  |  8 +++++-\
 sample-logs/CHANGELOG-default.md | 38 ++++++++++++++++++++++++-\
 sample-logs/CHANGELOG-oneline.md |  6 ++++\
 sample-logs/CHANGELOG-raw.md     | 57 +++++++++++++++++++++++++++++++++++++\
 6 files changed, 127 insertions(+), 47 deletions(-)

---
**commit 78a7f8e3fc9d9886a4ac588bb1a473e6b6a36d70**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Wed Apr 18 12:11:46 2018 +0530`
```
Commit Message:     0.2.0
```
---
 package-lock.json | 2 +-\
 package.json      | 2 +-\
 2 files changed, 2 insertions(+), 2 deletions(-)

---
**commit 44316ba7531f9b7b592370fd987c40db293e9a4c**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Wed Apr 18 12:11:09 2018 +0530`
```
Commit Message:     fix docs
```
---
 README.md | 32 ++++++++++++++++++++++++++------\
 1 file changed, 26 insertions(+), 6 deletions(-)

---
**commit b890dc6425076b887d9c27ec0844d07476b350d7**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Wed Apr 18 12:10:13 2018 +0530`
```
Commit Message:     Update LICENSE
```
---
 LICENSE | 27 ++++++++++++++-------------\
 1 file changed, 14 insertions(+), 13 deletions(-)

---
**commit b396c1105de52fcabfb937581a18c07f3f7934ee**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Wed Apr 18 12:09:13 2018 +0530`
```
Commit Message:     Create CODE_OF_CONDUCT.md
```
---
 CODE_OF_CONDUCT.md | 46 ++++++++++++++++++++++++++++++++++++++++++++++\
 1 file changed, 46 insertions(+)

---
 create mode 100644 CODE_OF_CONDUCT.md\
**commit e27ae7a4c7d33dc1dacc45c25fd3e5d353574aa2**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Wed Apr 18 12:06:26 2018 +0530`
```
Commit Message:     Update readme
```
---
 README.md | 32 +++++++++++++++++++++++++++++---\
 1 file changed, 29 insertions(+), 3 deletions(-)

---
**commit 6172a11b8bcecb1aa8cc30674f13d9281a9425f3**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Wed Apr 18 11:51:13 2018 +0530`
```
Commit Message:     initial commit
```
---
 CHANGELOG.md                     | 11 -----------\
 README.md                        | 12 +++++++++---\
 package.json                     |  2 +-\
 sample-logs/CHANGELOG-custom.md  |  2 ++\
 sample-logs/CHANGELOG-default.md |  6 ++++++\
 sample-logs/CHANGELOG-oneline.md |  2 ++\
 sample-logs/CHANGELOG-raw.md     | 19 +++++++++++++++++++\
 src/index.js                     | 19 +++++++++++--------\
 test/index.js                    | 18 ++++++++++++------\
 9 files changed, 62 insertions(+), 29 deletions(-)

---
 create mode 100644 sample-logs/CHANGELOG-custom.md\
 create mode 100644 sample-logs/CHANGELOG-default.md\
 create mode 100644 sample-logs/CHANGELOG-oneline.md\
 create mode 100644 sample-logs/CHANGELOG-raw.md\
**commit 98d5089a8fee0821dc946bcb031de20a76a46d8c**\
_Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>_\
`Date:   Wed Apr 18 11:05:40 2018 +0530`
```
Commit Message:     initial commit
```
---
 .babelrc          |    5 +\
 .editorconfig     |   11 +\
 .eslintrc         |    9 +\
 .gitignore        |    8 +\
 .travis.yml       |    8 +\
 CHANGELOG.md      |   11 +\
 LICENSE           |   20 +\
 README.md         |   70 +\
 package-lock.json | 5725 +++++++++++++++++++++++++++++++++++++++++++++++++++++\
 package.json      |   59 +\
 src/index.js      |   38 +\
 test/index.js     |   13 +\
 12 files changed, 5977 insertions(+)

---
 create mode 100644 .babelrc\
 create mode 100644 .editorconfig\
 create mode 100644 .eslintrc\
 create mode 100644 .gitignore\
 create mode 100644 .travis.yml\
 create mode 100644 CHANGELOG.md\
 create mode 100644 LICENSE\
 create mode 100644 README.md\
 create mode 100644 package-lock.json\
 create mode 100644 package.json\
 create mode 100644 src/index.js\
 create mode 100644 test/index.js\
