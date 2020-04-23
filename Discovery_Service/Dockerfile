FROM openjdk:8
ADD target/Discovery_Service-0.0.1-SNAPSHOT.jar discovery.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","discovery.jar"]