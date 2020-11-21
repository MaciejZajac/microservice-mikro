# docker commands:
docker build -t maciejzajac1997/posts - build an image based on the dockerfile.
docker run [image id or image tag]    - create and start container, override default command
docker ps                             - information about all the running containers
docker exec -it [container id][cmd]   - execute the given command in a running container
docker logs [container id]            - print out logs from the given container


# kubernetes commands
kubectl get pods                    --- same as docker
kubectl exec -it [pod_name][cmd]    --- same as docker
kubectl logs [pod_name]             --- same as logs from docker
kubectl delete pod [pod_name]       --- deletes pod
kubectl apply -f [config file name] --- tell kubernetes to process the config
kubectl describe pod [pod_name]     --- print information about running pod

# kubernetes deployment commands
kubectl get deployments
kubectl describe deployment [depl name]
kubectl apply -f [config file name]
kubectl 

# update kubernetes deployment steps
there must be :latest tag in the pod spec
make update to code
build the image
push the image to docker hub
run 'kubectl rollout restart deployment [depl_name]'

# types of services in kubernetes
cluster IP - ease-to-remember URL to access a pod. Only exposes pods in the cluster.
node port - makes a pod accessible from outside the cluster. Usually only used for dev purposes
Load Balancer - makes a pod accessible from outside the cluster. This is the right way to expose a pod to the outside world
external name - redirects an in-cluster request to CNAME url 


<!-- apiVersion: v1          preset object, k8s can add custom objects. v1 is default k8s list of objects
kind: Pod               type of object from v1 / wraps a container
metadata:               config options for object we are about to create
  name: posts           name of object when it is created  / command kubectl get pods
spec:                   list of configuration options for pod.
  containers:           array of elements 
    - name: posts       one container named posts
      image: maciejzajac1997/posts:0.0.1 exact image of container is posts from docker created from post folder / command docker build -t maciejzajac1997/posts:0.0.1 .
without version, docket will put :lastest. k8s search computer on to find specific version 0.0.1 -->
