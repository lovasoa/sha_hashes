# sha_hashes
Collection of sha hashes of common passwords.

[![screenshot](https://cloud.githubusercontent.com/assets/552629/26223531/2498c004-3c27-11e7-997f-52fffc9398df.png)](https://lovasoa.github.io/sha_hashes/)

## Organisation of the repository

### Python script
There is a small script provided that hashes passwords and saves the hashes in this repository format.

Create a password file containing one password per line, and run the following from the root of the repository:

```sh
./create_hashes.py < password_file.txt
```

### Hashes

This repo contains the hashes for around one million common passwords.
You can find the password that matches a given hash by looking into `hashes/sha1`.
The file tree is organised so that the first 4 characters of the haxedecimal hash are the first four directories in the file tree
under `/hashes/sha1`.

## How to clone

This repository contains over a million files. You might encounter issues when cloning it on your usual filesystem.

Instead, if you have more than 4GB of RAM, I would recommend to clone it to a temporary file system:

```sh
mkdir -p /tmp/ram
sudo mount -t tmpfs -o size=4G,nr_inodes=2m tmpfs /tmp/ram/
cd /tmp/ram/
git clone --depth 1 git@github.com:lovasoa/sha_hashes.git
```
