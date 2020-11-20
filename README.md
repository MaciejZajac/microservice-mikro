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
