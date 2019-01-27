FROM openjdk:8
VOLUME /tmp
ADD target/Eureka_pds-1-0.0.1-SNAPSHOT.jar eureka.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","eureka.jar"]