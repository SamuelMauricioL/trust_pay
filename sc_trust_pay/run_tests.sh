#!/bin/bash

# Script para ejecutar tests con snforge

# Agregar scarb al PATH
export PATH="/Users/samuelaimarmauriciolaime/.asdf/installs/scarb/2.11.4/bin:$PATH"

# Agregar snforge al PATH
export PATH="/Users/samuelaimarmauriciolaime/.asdf/installs/starknet-foundry/0.48.1/bin:$PATH"

# Ejecutar tests
snforge test "$@"
