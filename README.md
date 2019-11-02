# React-Sentence-Tree Demo
## This is the demo application for the [react-sentence-tree](https://github.com/Lucas-Kohorst/react-sentence-tree) package

### Run Locally
#### Demo
Clone this repo: git clone https://github.com/Lucas-Kohorst/react-sentence-tree-demo.git
cd react-sentence-tree-demo
Run yarn or npm install

#### Package
Clone this repo: git clone https://github.com/Lucas-Kohorst/react-sentence-tree.git
cd react-sentence-tree
Run yarn or npm install

### Run StandfordCoreNLP Server
Credits to [CoreNLP @gerardobort](https://www.npmjs.com/package/corenlp)

##### Download Stanford CoreNLP

##### Shortcut
Stanford CoreNLP can by downloaded and ran through npm thanks to [CoreNLP @gerardobort](https://www.npmjs.com/package/corenlp)
Via `npm`, run this command from your own project after having installed this library:

```
npm explore corenlp -- npm run corenlp:download
```

Once downloaded you can easily start the server by running

```
npm explore corenlp -- npm run corenlp:server
```

Or you can manually download the project from the Stanford's CoreNLP download section at: https://stanfordnlp.github.io/CoreNLP/download.html
You may want to download, apart of the full package, other language models (see more on that page).

##### Via sources

For advanced projects, when you have to customize the library a bit more, we highly recommend to download the StanfordCoreNLP from the [original repository](https://github.com/stanfordnlp/CoreNLP), and compile the source code by using `ant jar`.

##### Configure Stanford CoreNLP

There are two method to connect your NodeJS application to Stanford CoreNLP:

1. HTTP is the preferred method since it requires CoreNLP to initialize just once to serve many requests, it also avoids extra I/O given that the CLI method need to write temporary files to run *recommended*.
2. Via Command Line Interface, this is by spawning processes from your app.

##### Using StanfordCoreNLPServer

```bash
# Run the server using all jars in the current directory (e.g., the CoreNLP home directory)
java -mx4g -cp "*" edu.stanford.nlp.pipeline.StanfordCoreNLPServer -port 9000 -timeout 15000
```
