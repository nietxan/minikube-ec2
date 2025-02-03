usage:

```bash
pulumi stack init
```

```bash
pulumi up -s <stack> --diff
```

```bash
export $(cat .env)
```

```bash
echo "$(pulumi stack output ip) minikube" | sudo tee -a /etc/hosts
```

```bash
ssh-keygen -R minikube
```

```bash
ansible-playbook -i inventory.ini minikube.yaml
```
