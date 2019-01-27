FROM openjdk:8
VOLUME /tmp
ADD target/Config_pds-1-0.0.1-SNAPSHOT.jar config.jar
EXPOSE 8888
ENTRYPOINT ["java","-jar","config.jar"]