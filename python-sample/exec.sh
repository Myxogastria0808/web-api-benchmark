#!bin/bash

nix-shell
cd src
uvicorn api:app --reload --port=3000
