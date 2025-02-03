usage:

```bash
# prepare AWS EC2 KeyPair named minikube

pulumi stack init

pulumi up -s <stack> --diff

./install.sh

KUBECONFIG=./config k get all
```
