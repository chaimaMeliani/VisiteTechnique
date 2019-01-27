FROM openjdk:8
VOLUME /tmp
ADD target/ClientPDS-0.0.1-SNAPSHOT.jar app2.jar
EXPOSE 8887
ENTRYPOINT ["java","-jar","app2.jar"]