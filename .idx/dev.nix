
{ pkgs, ... }:
let
  # Pomocný launcher emulátoru
  runAvd = pkgs.writeShellScriptBin "run-avd" ''
    set -euo pipefail
    AVD_NAME="$${1:-Pixel_5_API_34_Play_x86_64}"

    export ANDROID_SDK_ROOT="$${ANDROID_SDK_ROOT}"
    export ANDROID_HOME="$${ANDROID_HOME}"
    export ANDROID_AVD_HOME="$${ANDROID_AVD_HOME}"
    export PATH="$${PATH}"
    
    # Spuštění emulátoru na pozadí
    emulator -avd "$AVD_NAME" -no-snapshot > /dev/null 2>&1 &
  '';

in {
  ##########################################################################
  # Základní kanál a balíčky (žádné androidenv)
  ##########################################################################
  channel = "stable-24.11";

  packages = [
    pkgs.openjdk17
    pkgs.gradle
    pkgs.android-tools # adb/fastboot
    pkgs.unzip
    pkgs.curl
    pkgs.sudo
    pkgs.p7zip
    # runAvd # This has been disabled
  ];

  ##########################################################################
  # Prostředí – vše pod $HOME
  ##########################################################################
  env = {
    JAVA_HOME = "$${pkgs.openjdk17}/lib/openjdk";
    ANDROID_SDK_ROOT = "$HOME/.android/sdk";
    ANDROID_HOME = "$HOME/.android/sdk";
    ANDROID_AVD_HOME = "$HOME/.android/avd";
    GRADLE_USER_HOME = "$HOME/.gradle";
    PATH = [
      "$HOME/.android/sdk/platform-tools"
      "$HOME/.android/sdk/cmdline-tools/latest/bin"
      "$HOME/.android/sdk/emulator"
      "$HOME/.android/sdk/build-tools/34.0.0"
    ];
  };

  ##########################################################################
  # Previews vypnuté
  ##########################################################################
  idx.previews = { enable = false; previews = { }; };

  ##########################################################################
  # Jednorázová instalace Android SDK
  ##########################################################################
  idx.workspace.onCreate = {
    sdk = ''
      mkdir -p $HOME/.android/sdk
      curl -o sdk.zip "https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip"
      unzip sdk.zip -d "$HOME/.android/sdk/cmdline-tools"
      mv "$HOME/.android/sdk/cmdline-tools/cmdline-tools" "$HOME/.android/sdk/cmdline-tools/latest"
      rm sdk.zip
      yes | $HOME/.android/sdk/cmdline-tools/latest/bin/sdkmanager --licenses
      $HOME/.android/sdk/cmdline-tools/latest/bin/sdkmanager "platform-tools" "build-tools;34.0.0" "platforms;android-34"
    '';
  };

  ##########################################################################
  # Rozšíření editoru
  ##########################################################################
  idx.extensions = [
    "vscjava.vscode-java-pack"
    "redhat.java"
    "vscjava.vscode-gradle"
  ];
}
