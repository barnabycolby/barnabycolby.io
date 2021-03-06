> When solving CTF challenges, I often find myself running through the same set of actions to look for clues, as well as discovering new actions to add to the list. Once complete, this page will act as a reference/cheatsheet of those actions, speeding up future solves for myself and hopefully others.

## Linux shells
List the commands that can be executed as another user
```bash
sudo -l
```

## File steganography
Is the file type what you expect?
```bash
file <file to check>
```

Are they any other hidden file types?
```bash
binwalk <file to check>
```

## Heap exploitation
- [how2heap](https://github.com/shellphish/how2heap) Examples and explanations of different heap exploits
- [Diagram](https://raw.githubusercontent.com/cloudburst/libheap/master/heap.png) showing how `malloc`, `realloc` and `free` work

## Scripting boilerplates/libraries
For question and answer style scripting challenges, use the [CTFQA](https://github.com/barnabycolby/ctfqa) library.

## Programming quirks
- Floats can be set to the `NaN` value
