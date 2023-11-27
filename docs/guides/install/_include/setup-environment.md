To install `EASIFEM` you need to define following environment variables in your shell.

- **`EASIFEM_INSTALL_DIR`**: The location of file system where EASIFEM will be installed. For example, `/opt`, `${HOME}`, `/usr/local/`. Default location is `$HOME/.easifem/install/`.
- **`EASIFEM_SOURCE_DIR`**: The location of file system where the source code of EASIFEM will be downloaded. For example, `~/.easifem/src/`.
- **`EASIFEM_BUILD_DIR`**: The location of file system where build files will be stored. These files are necessary for installation, and after installation you can remove them if you want. Always keep your build directory separated from your source and install directory. For example, `~/.easifem/build/`.

The above-mentioned environment variables are the fundamental environment variables, which are used for defining other variables as shown in the following table.

| Env-var name              | description                                                                                      | example                                         |
| :------------------------ | :----------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| **`EASIFEM_INSTALL_DIR`** | Location of file system where EASIFEM library will install its components and external packages. | `~/.easifem/install/`                           |
| **`EASIFEM_SOURCE_DIR`**  | Location of file system where the source code will be downloaded.                                | `~/.easifem/src/`                               |
| **`EASIFEM_BUILD_DIR`**   | Location of file system where the build files will be stored.                                    | `~/.easifem/build/`                             |
| **`EASIFEM_EXTPKGS`**     | Location of file system where external packages will be installed.                               | `$EASIFEM_INSTALL_DIR/easifem/extpkgs`          |
| **`EASIFEM_BASE`**        | Location where `easifemBase` library will be installed.                                          | `EASIFEM_BASE=EASIFEM_INSTALL_DIR/easifem/base` |
| **`EASIFEM_CLASSES`**     | Location where `easifemClasses` library will be installed.                                       | `EASIFEM_INSTALL_DIR/easifem/classes`           |
| **`EASIFEM_MATERIALS`**   | Location where `easifemMaterials` library will be installed.                                     | `EASIFEM_INSTALL_DIR/easifem/materials`         |
| **`EASIFEM_KERNELS`**     | Location where `easifemKernels` library will be installed.                                       | `EASIFEM_INSTALL_DIR/easifem/kernels`           |

## Automatic setup of environment variables

:::note
First, make sure you have successfully installed the `easifem` CLI as mentioned in [Step-1](install-easifem-cli).
:::

You can set up the environment variables by using the `easifem` CLI application.

```bash
easifem setenv --install /home/easifem/install --build /home/easifem/build --source /home/easifem/src
```

You can also use short flags for `--install (-i)`, `--build (-b)`, and `--source (-s)` as shown below.

```bash
easifem setenv -i ~/.easifem/install -b ~/.easifem/build -s ~/.easifem/src
```

This command will create config files for `bash`, `zsh`, and `fish` shell in `~/.config/easifem` directory.

- For `bash` and `zsh` shell, the name of the file is `easifemvar.sh`
- For `fish` shell, the name of the file is `easifemvar.fish`.

Then, you can run following command to bring the changes in your current shell session.

```bash title="For bash and zsh SHELL 🍉"
source ${HOME}/.config/easifem/easifemvar.sh
```

```bash title="For fish SHELL 🍎"
source $HOME/.config/easifem/easifemvar.fish
```

<details>
<summary>Click here to see how to check your SHELL</summary>
<div>

The following command will provide the information of the current shell.

```bash
echo $SHELL
```

</div>
</details>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Modify the SHELL
Now you need to a line to your default shell, the process is described below for `Bash`, `Zsh`, and `Fish` shell.
:::

<Tabs>

<TabItem value="1" label="Bash Shell">

If you are using `Bash` shell, then you can place `easifemvar.sh` in your shell. Open `~/.bashrc` in the editor, and add the following line at the end of the file.

```bash
source ${HOME}/.config/easifem/easifemvar.sh
```

- Save the file and exit.
- Restart your terminal, and try following command.

```bash
echo $EASIFEM_INSTALL_DIR
```

</TabItem>

<TabItem value="2" label="Zsh Shell">

If you are using the `Zsh` shell, then you can place `easifemvar.sh` in your shell. Open `~/.zshrc` file in the editor, and add the following line at the end of the file:

```bash
source ${HOME}/.config/easifem/easifemvar.sh
```

- Save the file and exit.
- Restart your terminal, and try following command.

```bash
echo $EASIFEM_INSTALL_DIR
```

</TabItem>

<TabItem value="3" label="Fish Shell">

If you are using `Fish` shell, then you can place `easifemvar.fish` in your shell. For fish shell, open `~/.config/fish/config.fish` in the editor and add the following line at the end of the file:

```bash
source $HOME/.config/easifem/easifemvar.fish
```

- Save the file and exit.
- Restart your terminal, and try following command.

```bash
echo $EASIFEM_INSTALL_DIR
```

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

## Manual set up of environment variable

If you want to set up the environment variable by yourself, then you can follow the following instructions.

<Tabs>

<TabItem value="1" label="Bash">

Add following environment to `~/.bashrc`

```bash
    export EASIFEM_INSTALL_DIR=$HOME/.easifem/install
    export EASIFEM_BUILD_DIR=$HOME/.easifem/build/
    export EASIFEM_SOURCE_DIR=$HOME/.easifem/src/

    export EASIFEM_BASE=$EASIFEM_INSTALL_DIR/easifem/base
    export EASIFEM_CLASSES=$EASIFEM_INSTALL_DIR/easifem/classes
    export EASIFEM_EXTPKGS=$EASIFEM_INSTALL_DIR/easifem/extpkgs
    export EASIFEM_APP=$EASIFEM_INSTALL_DIR/easifem/app
    export EASIFEM_MATERIALS=$EASIFEM_INSTALL_DIR/easifem/materials
    export EASIFEM_KERNELS=$EASIFEM_INSTALL_DIR/easifem/kernels

    export PKG_CONFIG_PATH="${PKG_CONFIG_PATH}:${EASIFEM_EXTPKGS}/lib/pkgconfig"

    export PATH="${PATH}:${EASIFEM_EXTPKGS}/bin"
    export PATH="${PATH}:${EASIFEM_APP}/bin"

    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_BASE}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_CLASSES}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_EXTPKGS}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_APP}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_MATERIALS}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_KERNELS}/lib"
```

</TabItem>

<TabItem value="2" label="Zsh">

Add following environment to `~/.zshrc`

```bash
    export EASIFEM_INSTALL_DIR=$HOME/.easifem/install
    export EASIFEM_BUILD_DIR=$HOME/.easifem/build/
    export EASIFEM_SOURCE_DIR=$HOME/.easifem/src/

    export EASIFEM_BASE=$EASIFEM_INSTALL_DIR/easifem/base
    export EASIFEM_CLASSES=$EASIFEM_INSTALL_DIR/easifem/classes
    export EASIFEM_EXTPKGS=$EASIFEM_INSTALL_DIR/easifem/extpkgs
    export EASIFEM_APP=$EASIFEM_INSTALL_DIR/easifem/app
    export EASIFEM_MATERIALS=$EASIFEM_INSTALL_DIR/easifem/materials
    export EASIFEM_KERNELS=$EASIFEM_INSTALL_DIR/easifem/kernels

    export PKG_CONFIG_PATH="${PKG_CONFIG_PATH}:${EASIFEM_EXTPKGS}/lib/pkgconfig"

    export PATH="${PATH}:${EASIFEM_EXTPKGS}/bin"
    export PATH="${PATH}:${EASIFEM_APP}/bin"

    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_BASE}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_CLASSES}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_EXTPKGS}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_APP}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_MATERIALS}/lib"
    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_KERNELS}/lib"
```

</TabItem>

<TabItem value="3" label="Fish shell">

Add following environment variables to `~/.config/fish/config.fish`.

```bash
set -gx EASIFEM_INSTALL_DIR $HOME/.easifem/install
set -gx EASIFEM_BUILD_DIR $HOME/.easifem/build/
set -gx EASIFEM_SOURCE_DIR $HOME/.easifem/src
set -gx EASIFEM_BASE $EASIFEM_INSTALL_DIR/easifem/base
set -gx EASIFEM_CLASSES $EASIFEM_INSTALL_DIR/easifem/classes
set -gx EASIFEM_EXTPKGS $EASIFEM_INSTALL_DIR/easifem/extpkgs
set -gx EASIFEM_APP $EASIFEM_INSTALL_DIR/easifem/app
set -gx EASIFEM_MATERIALS $EASIFEM_INSTALL_DIR/easifem/materials
set -gx EASIFEM_KERNELS $EASIFEM_INSTALL_DIR/easifem/kernels

set -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_BASE/lib
set -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_CLASSES/lib
set -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_EXTPKGS/lib
set -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_APP/lib
set -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_MATERIALS/lib
set -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_KERNELS/lib

set -gx PKG_CONFIG_PATH $PKG_CONFIG_PATH $EASIFEM_EXTPKGS/lib/pkgconfig
set -gx PATH $PATH $EASIFEM_EXTPKGS/bin
set -gx PATH $PATH $EASIFEM_APP/bin
```

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

