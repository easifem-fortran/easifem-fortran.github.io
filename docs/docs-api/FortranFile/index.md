---
sidebar_position: 1
date: 2023-08-05
update: 2023-08-05
status: stable
docs: done
extpkgs: none
category:
  - File
  - IO
tags:
  - easifemClasses
  - file
  - io
---

# FortranFile

`FortranFile_` is user data type designed to access the features of fortran file system.

## API

- First Initiate the file by using the [Initiate](/docs-api/FortranFile/Initiate)
- Then open the file by using the [Open](/docs-api/FortranFile/Open)
- Then close the file by using the [Close](/docs-api/FortranFile/Close)
- To deallocate the file you can use [Deallocate](/docs-api/FortranFile/Deallocate). It will close the file too.

## Constructor methods

| Method name | comment                            |
| ----------- | ---------------------------------- |
| Initiate    | Initiate the instance              |
| Deallocate  | Deallocate data and close the file |
| Open        | Open the file                      |
| Close       | close the file                     |
| Delete      | Delete the file                    |
| Backspace   | Go back one record                 |
| Rewind      | Rewind the file                    |

## Set methods

| Method name  | comment                    |
| ------------ | -------------------------- |
| SetFilePath  | Set the file path          |
| SetFileName  | Set the file name          |
| SetFileExt   | Set the file extension     |
| SetEOFStat   | Set the end of file status |
| SetOpenStat  | Set the open status        |
| SetReadStat  | Set the read status        |
| SetWriteStat | Set the write status       |
| SetStatus    | Set the status of the file |

## Get methods

| Method name  | comment                       |
| ------------ | ----------------------------- |
| GetFilePath  | Get the path of the file      |
| GetFileName  | Get the name of the file      |
| GetFileExt   | Get the extension of the file |
| GetFileParts | Get the parts of the file     |

## Enquire methods

| Method name | comment                                          |
| ----------- | ------------------------------------------------ |
| IsOpen      | This function returns true if the file is open.  |
| IsEOF       | This returns true if the end of file is reached. |
| IsRead      | This returns true if the file has read access.   |
| IsWrite     | This returns true if the file has write access.  |

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
