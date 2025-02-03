usage:

`pulumi stack init`
`pulumi up -s <stack> --diff`
`export $(cat .env)`
`echo "$(pulumi stack output ip) minikube" | sudo tee -a /etc/hosts`
`ssh-keygen -R minikube`
`ansible-playbook -i inventory.ini minikube.yaml`
