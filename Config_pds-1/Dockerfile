FROM openjdk:8
VOLUME /tmp
ADD target/Config_pds-1-0.0.1-SNAPSHOT.jar app1.jar
EXPOSE 8887
ENTRYPOINT ["java","-jar","app1.jar"]