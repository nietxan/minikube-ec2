usage:

```bash
pulumi stack init
```

```bash
export $(cat .env)
```

```bash
pulumi up -s <stack> --diff
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
