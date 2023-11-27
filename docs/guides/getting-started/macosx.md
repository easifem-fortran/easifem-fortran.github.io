---
title: macOS
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section you will perform a quick installation of easifem library and run some sample programs.

Following steps are performed in this section.

- Installing `easifem` command line interface.
- Set up the environment variables by using `easifem` CLI.
- Install easifem library.

:::info summary
It is recommended that you read and follow the steps given below to quickly install `easifem`. However, due to any reason, if you do not want to read the instruction given below, then just copy and paste the command given below.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" && \
brew update && brew upgrade && \ 
brew install gcc gfortran libomp curl git python3 cmake ninja lapack openblas hdf5 plplot gnuplot doxygen gtk4 lua && \
python3 -m pip install easifem && \
easifem setenv -i ~/.easifem/install -b ~/.easifem/build -s ~/.easifem/src && \
source ~/.config/easifem/easifemvar.sh && \
easifem install easifem
```

:::

## Build from source

### Step 1: Install system dependencies

```bash
brew install gcc gfortran libomp curl git python3 cmake ninja lapack openblas hdf5 plplot gnuplot doxygen gtk4 lua
```

:::caution "Clang vs GCC"
If you are using Clang compiler then make sure to set `LDFLAGS` and `CPPFLAGS` as follows (otherwise, openmp cannot be used)

**Fish shell**

```bash
set -gx LDFLAGS "-L/opt/homebrew/opt/libomp/lib"
set -gx CPPFLAGS "-I/opt/homebrew/opt/libomp/include"
```

**Bash or Zsh shell**

```bash
export LDFLAGS="-L/opt/homebrew/opt/libomp/lib"
export CPPFLAGS="-I/opt/homebrew/opt/libomp/include"
```

:::

### Step 2: Install `easifem` CLI

```bash
python3 -m pip install easifem
```

### Step 3: Setting up environment variables

```bash
easifem setenv -i ~/.easifem/install -b ~/.easifem/build -s ~/.easifem/src
```

If your active shell is `zsh` or `bash`, then please run the following command.

```bash title="for bash or zsh shell only"
# add to ~/.bashrc or ~/.zshrc
source ~/.config/easifem/easifemvar.sh
```

If your active shell is `fish`, then run the following command.

```bash title="for fish shell"
# add to ~/.config/fish/config.fish
source ~/.config/easifem/easifemvar.fish
```

<details>
<summary>Check your shell</summary>
<div>

You can check your active shell by using the following command.

```bash
echo $SHELL
```

</div>
</details>

Now, you need to modify the shell file by adding following lines.

<details>
<summary>Click here to to know more about the environment variables</summary>
<div>

- option `-i` denotes the location of file system where `easifem` will be installed.
- `-b` denotes the location of file system where `easifem` build files will be stored.
- `-s` denotes the location of file system where `easifem` source file will be downloaded.

[You can learn more about the `easifem` environment variables here](/guides/install/macos/setup-environment).

</div>
</details>

<details>
<summary>Click here to see how to modify the shell(recommended)</summary>
<div>

If you do not want to source the `easifemvar` files every time you open a new terminal window, then please add following lines to your shell configuration.

<Tabs>

<TabItem value="1" label="Bash Shell">

If you are using `Bash` shell, then you can place `easifemvar.sh` in your shell. Open `~/.bashrc` in the editor, and add the following line at the end of the file.

```bash
source ${HOME}/.config/easifem/easifemvar.sh
```

- Save the file and exit.
- Restart your terminal.

</TabItem>

<TabItem value="2" label="Zsh Shell">

If you are using the `Zsh` shell, then you can place `easifemvar.sh` in your shell. Open `~/.zshrc` file in the editor, and add the following line at the end of the file:

```bash
source ${HOME}/.config/easifem/easifemvar.sh
```

- Save the file and exit.
- Restart your terminal.

</TabItem>

<TabItem value="3" label="Fish Shell">

If you are using `Fish` shell, then you can place `easifemvar.fish` in your shell. For fish shell, open `~/.config/fish/config.fish` in the editor and add the following line at the end of the file:

```bash
source $HOME/.config/easifem/easifemvar.fish
```

- Save the file and exit.
- Restart your terminal.

</TabItem>

</Tabs>

</div>
</details>

### Step 4: Install easifem

```bash
easifem install easifem
```

