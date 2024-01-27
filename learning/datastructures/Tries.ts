class TrieNode {
  character: string;
  end: boolean;
  children: Array<TrieNode>;

  constructor(char = "#root", end = false) {
    this.character = char;
    this.end = end;
    this.children = [];
  }
  addChild(node: TrieNode): void {
    if (!this.hasChild(node.character)) {
      this.children.push(node);
    }
  }
  hasChild(char: string): boolean {
    return this.children.some((childNode) => childNode.character === char);
  }
}
class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let characters = word.split("");
    let currentNode = this.root;
    while (characters.length > 0) {
      const char = characters.shift()!;
      if (!currentNode.hasChild(char)) {
        const newNode = new TrieNode(char, characters.length === 0);
        currentNode.addChild(newNode);
        currentNode = newNode;
      } else {
        currentNode = currentNode.children.find((n) => n.character === char)!;
        if (characters.length === 0) {
          currentNode.end = true;
        }
      }
    }
  }

  search(word: string): boolean {
    console.log("start search");
    let characters = word.split("");
    let currentNode = this.root;
    while (characters.length > 0) {
      // get the head of the characters
      const char = characters.shift()!;

      // short circuit if we don't have a match
      if (!currentNode.hasChild(char)) return false;

      currentNode = currentNode.children.find((n) => n.character === char)!;

      if (currentNode.end && characters.length === 0) {
        return true;
      }
    }
    return false;
  }

  startsWith(prefix: string): boolean {
    console.log("start search");
    let characters = prefix.split("");
    let currentNode = this.root;
    while (characters.length > 0) {
      // get the head of the characters
      const char = characters.shift()!;

      // short circuit if we don't have a match
      if (!currentNode.hasChild(char)) return false;

      currentNode = currentNode.children.find((n) => n.character === char)!;

      if (characters.length === 0) {
        return true;
      }
    }
    return false;
  }
  print() {
    return console.log(JSON.stringify(this.root, null, 2));
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie();

obj.insert("apple");
obj.insert("apply");
obj.insert("app");
const s = obj.startsWith("ap");

console.log({ s });

// obj.print();
