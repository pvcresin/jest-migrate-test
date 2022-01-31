#!/bin/sh

if [ -z "$DEBUG" ]; then
  export DEBUG="app:*"
fi

# jest "$@"
jest
