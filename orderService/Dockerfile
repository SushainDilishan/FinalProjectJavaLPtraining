FROM openjdk:8
ADD target/order-service-0.0.1-SNAPSHOT.jar orderservice.jar
EXPOSE 8090
ENTRYPOINT ["java","-jar","orderservice.jar"]