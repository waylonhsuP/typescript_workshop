#!/bin/bash

filepath="$1"

folderpath="$(dirname "$filepath")"

parentfolder="$(basename "$folderpath")"

filename="$(basename "$filepath")"

npx ts-node "../checker/$parentfolder/$filename"
