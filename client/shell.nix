{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-23.11") {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_21
    corepack_21
  ];
}
