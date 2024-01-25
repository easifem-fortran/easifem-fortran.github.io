---
sidebar_position: 1
date: 2023-02-12
update: 2023-02-12
status: stable
docs: done
extpkgs: none
category:
  - File
tags:
  - AbstractFile
  - easifemClasses
  - File
  - IO
---

# AbstractFile

Abstract class for handling files.

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

## Get Methods

| Method name  | comment                       |
| ------------ | ----------------------------- |
| GetFilePath  | Get the path of the file      |
| GetFileName  | Get the name of the file      |
| GetFileExt   | Get the extension of the file |
| GetFileParts | Get the parts of the file     |

## EnquireMethods

| Method name | comment                                          |
| ----------- | ------------------------------------------------ |
| IsOpen      | This function returns true if the file is open.  |
| IsEOF       | This returns true if the end of file is reached. |
| IsRead      | This returns true if the file has read access.   |
| IsWrite     | This returns true if the file has write access.  |

## Deferred methods

The following methods should be implemented by the subclasses.

### Open

This methid is used for opening the file. First we initiate an instance and then open it for reading and/or writing.

### Close

This method is used for closing the file.

### Delete

This method is used for deleting the file.

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
