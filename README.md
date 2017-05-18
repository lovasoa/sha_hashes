# sha_hashes
Collection of sha hashes of common passwords

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
