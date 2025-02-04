usage:

```bash
# AWS EC2 KeyPair

mv /path/to/minikube.pem .

chmod 600 minikube.pem

# AWS EC2 with pulumi

pulumi stack init

yarn install

pulumi up -s <stack> --diff

# Ansible

./install.sh
```

```bash
KUBECONFIG=./config k get all
```
