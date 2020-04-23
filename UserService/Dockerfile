FROM openjdk:8
ADD target/userService.jar userService.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","userService.jar"]