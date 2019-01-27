FROM openjdk:8
VOLUME /tmp
ADD target/Zuul-pds-0.0.1-SNAPSHOT.jar zuul.jar
EXPOSE 9004
ENTRYPOINT ["java","-jar","zuul.jar"]