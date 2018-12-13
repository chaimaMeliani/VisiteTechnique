FROM openjdk:8
VOLUME /tmp
ADD target/ClientPDS-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8887
ENTRYPOINT ["java","-jar","app.jar"]