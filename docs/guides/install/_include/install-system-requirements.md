You can use following instructions to install the system requirements for EASIFEM.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Linux

<Tabs>
<TabItem value="1" label="Ubuntu">

```bash
sudo apt-get update && \
sudo apt-get install -y gfortran gcc libomp-dev curl git \
python3 python3-pip cmake ninja-build \
liblapack-dev libopenblas-dev libhdf5-dev \
libplplot-dev plplot-driver-cairo libboost-all-dev \
gnuplot doxygen libgtk-4-dev lua5.4 liblua5.4-dev
```

</TabItem>

<TabItem value="2" label="Arch Linux">

First install `yay` on Arch Linux by following process.

```bash
sudo pacman -Syu
sudo pacman -Sy base-devel
sudo pacman -Sy git
mkdir -pv ~/temp
git clone https://aur.archlinux.org/yay.git ~/temp/yay
cd ~/temp/yay
makepkg -si
cd ~ && rm -rf ~/temp/yay
yay --version
```

After successfully installing `yay` we can install the system dependencies by using following command.

```bash
yay -Sy gcc gcc-fortran openmp curl git python3 cmake ninja lapack openblas hdf5 plplot gnuplot doxygen gtk4 lua
```

If you face any problem installing plplot with fortran binding, then follow the instruction given below.

```bash 
mkdir -pv ~/temp 
cd ~/temp 
git clone https://github.com/easifem/archlinux-plplot-fortran.git
cd archlinux-plplot-fortran
makepkg -si
```

</TabItem>

<TabItem value="3" label="Debian">

Coming soon 😭.

</TabItem>

<TabItem value="4" label="Fedora">

Coming soon 😭.

</TabItem>

<TabItem value="5" label="Redhat">

Coming soon 😭.

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

## macOS (Darwin)

```bash
brew install gcc gfortran libomp curl git python3 cmake ninja lapack openblas hdf5 plplot gnuplot doxygen gtk4 lua
```

## Windows

Coming soon.
