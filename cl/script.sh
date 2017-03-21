#!/bin/bash


for file in vendor/juju/*.js; do

  yourmom=${file##*/}
  retailer=${yourmom:4}
  sed -i "1 i\import { OPTIMILE_SETTINGS } from './tags/tag-$retailer';" file.js

done


cat file.js >> vendor/parp.js
