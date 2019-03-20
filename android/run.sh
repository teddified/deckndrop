#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.duve.deckndrop/host.exp.exponent.MainActivity
