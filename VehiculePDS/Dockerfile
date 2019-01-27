FROM openjdk:8
VOLUME /tmp
ADD target/VehiculePDS-0.0.1-SNAPSHOT.jar app3.jar
EXPOSE 8886
ENTRYPOINT ["java","-jar","app3.jar"]