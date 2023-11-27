# This program is a part of EASIFEM library
# Copyright (C) 2020-2021  Vikas Sharma, Ph.D
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https: //www.gnu.org/licenses/>
#

CMAKE_MINIMUM_REQUIRED(VERSION 3.20.0 FATAL_ERROR)
SET(PROJECT_NAME "_test_")
SET(PROJECT_SRC_PATH "../tests/")
PROJECT(${PROJECT_NAME})
ENABLE_LANGUAGE(Fortran)
SET(TARGET_NAME "test")


LIST(
  APPEND
  CMAKE_PREFIX_PATH
  "$ENV{EASIFEM_EXTPKGS}"
  "$ENV{EASIFEM_BASE}"
  "$ENV{EASIFEM_CLASSES}"
  "$ENV{EASIFEM_MATERIALS}"
  "$ENV{EASIFEM_KERNELS}"
)


LIST(
  APPEND
  EXT_LIBS
  LAPACK95
  PENF
  BeFoR64
  FACE
  StringiFor
  Sparsekit
  FPL
)


FOREACH(LIB ${EXT_LIBS})
  FIND_PACKAGE(${LIB} REQUIRED)
ENDFOREACH()


LIST(
  APPEND
  EASIFEM_LIBS
  easifemBase
  easifemClasses
  # easifemMaterials
  # easifemKernels
)


FOREACH(LIB ${EASIFEM_LIBS})
  FIND_PACKAGE(${LIB})
ENDFOREACH()

OPTION( TESTID, "Test number" )
OPTION( CLASSID, "Testing component" )

ADD_EXECUTABLE(${TARGET_NAME}
  ${PROJECT_SRC_PATH}/${CLASSID}${PROJECT_NAME}${TESTID}.F90)

TARGET_LINK_LIBRARIES( ${TARGET_NAME} easifemClasses::easifemClasses )

