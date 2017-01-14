# Description: 
The script will deploy 4 containers as follows:

  - haproxy with round-robin policy between the 2 app nodes
  - nodeapp which runs a nodejs
  - nodeapp2 which runs a nodejs
  - hello-world docker image
  
# Prerequisites: On the host you must have installed: docker, docker-compose.
  
# Howto run:
```
git clone https://github.com/whizsper/docker-compose.git
cd docker-compose/
docker-compose up
```

# Howto test:
```To test the loadbalancer functionallity use http://localhost:80/8080```

