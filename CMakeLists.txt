cmake_minimum_required(VERSION 3.16)
project(RoadRacer)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(raylib 5.0 REQUIRED)

add_executable(road_racer main.cpp)
target_link_libraries(road_racer raylib)

if(WIN32)
    set_target_properties(road_racer PROPERTIES WIN32_EXECUTABLE TRUE)
endif()
