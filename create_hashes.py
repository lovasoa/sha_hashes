#!/usr/bin/env python3

import hashlib
import sys
import pathlib

infile = sys.stdin

basefolder = pathlib.Path() / "hashes" / "sha1"

for i,password in enumerate(infile):
    password = password[:-1] # strip the \n
    password_bytes = password.encode("utf8")
    hashed = hashlib.sha1(password_bytes).hexdigest()
    path = basefolder / hashed[0] / hashed[1] / hashed[2] / hashed[3]
    path.mkdir(parents=True, exist_ok=True)
    (path / hashed).write_bytes(password_bytes)
    print("% 10d:%s:%s" % (i, hashed, password), file=sys.stderr, end="\r")

print("\nDone!", file=sys.stderr)

