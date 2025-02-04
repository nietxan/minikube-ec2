### usage

```bash
# AWS EC2 KeyPair

mv /path/to/minikube.pem .

chmod 600 minikube.pem

# AWS EC2 with pulumi

yarn install

pulumi stack init

pulumi stack select <stack>

pulumi up -s <stack> --diff

# Ansible

./install.sh
```

```bash
KUBECONFIG=./config k get all
```
